const express = require('express');
const router = express.Router();
const crypto = require('crypto-js')
const moment = require('moment')
const {auth} = require('../middleware/auth')

const {User} = require('../models/user');


const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);




router.route('/create_link_token')

.post(auth, async function (req, response) {
    // Get the client_user_id by searching for the current user
    const clientUserId = req.body.id;
    const request = {
      user: {
        // This should correspond to a unique id for the current user.
        client_user_id: clientUserId,
      },
      client_name: 'Plaid Test App',
      products: ['transactions'],
      language: 'en',
      country_codes: ['US'],
    };
    try {
      const createTokenResponse = await plaidClient.linkTokenCreate(request);
      response.json(createTokenResponse.data);
    } catch (error) {
      console.log(error)
    }
});


router.route('/token-exchange')
.post( auth, async (req, res)=>{

    console.log(req.body)
    const {public_token} = req.body
    const response = await plaidClient.itemPublicTokenExchange({ public_token });
    const access_token = response.data.access_token;

    User.findByIdAndUpdate(req.body.userId,{ plaidToken: access_token }, { new: true}, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({
            success: true,
            doc
        })
    })
    const accounts_response = await plaidClient.accountsGet({ access_token });
    const accounts = accounts_response.data.accounts;

    console.log(accounts)


    // console.log(
    // `You have ${res.transactions.length} transactions from the last thirty days.`,
    // );

})

router.route('/transactions')
.post(auth, async (req, res)=>{
    const now = moment();
    const today = req.body.end_date;
    const thirtyDaysAgo = req.body.start_date;

    try{
        const response = await plaidClient.transactionsGet({
            access_token: req.body.access_token,
            start_date: thirtyDaysAgo,
            end_date: today,
        });
        const transactions = response.data.transactions;
        const deposits = transactions.filter(item => item.amount <= 0)
        // console.log(transactions.amount)
        // console.log(deposits)
        res.status(201).send(deposits)
    }catch(e){
        res.status(401).send(e)
    }


})



module.exports = router;
