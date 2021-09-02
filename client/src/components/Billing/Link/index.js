import React, { useEffect,useCallback, useState, FunctionComponent } from "react";
import {
  PlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import axios from 'axios';
import { useSelector } from "react-redux";


const Link = () => {
  const [token, setToken] = useState(null);
  const user = useSelector(state => state.user.userData)

  // generate a link_toke


  useEffect(() => {
    async function createLinkToken(){
      let response = await axios.post("/api/deposits/create_link_token", {id:user.id});
      console.log(response)
      const {link_token} = await response.data;
      setToken(link_token);
    }
    createLinkToken();
  }, []);

  const onSuccess = useCallback(
    async (public_token, metadata) => {
      // send public_token to server
      let response = await axios.post("/api/deposits/token-exchange", { userId:user.id ,public_token: public_token});
      console.log(metadata)
    },
    []
  );



  if(user.plaidToken){
    return(
      <div>
        bank has been linked
      </div>
    )
  }else{
    if(token === null){
      return(
        <div className="loader"></div>
      )
    }else{
      return(<PlaidLink
        token={token}
        onSuccess={onSuccess}
        // onExit={...}
        // onEvent={...}
      >
        Connect a bank account
      </PlaidLink>)
    }
  }

  // only initialize Link once our token exists
};


export default Link;
