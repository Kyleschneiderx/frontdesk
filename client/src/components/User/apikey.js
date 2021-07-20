import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import Cookies from 'js-cookie';


const Apikey =(props) => {
    const [api, setApi] = useState('')
    
    useEffect(()=>{
        console.log(Cookies.get('auth'))
        setApi(Cookies.get('auth'))

    }, [api])





    return (
        <div className="App-container">
            <h2>
                Key:
            </h2>
            <h3>
                {api}
            </h3>
        </div>

    )
}


function mapStateToProps(state){
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Apikey);

