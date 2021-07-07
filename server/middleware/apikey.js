const {User} =  require('../models/user');



const api = (req,res, next) => {
    var token = req.headers["x-access-token"];
    User.findByToken(token, (err, user) =>{
        if(err) throw err;
        if(!user) return res.send(false)
        req.token = token;
        req.user = user
        next();
    })

    

};


module.exports = {api};