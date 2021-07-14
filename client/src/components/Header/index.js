import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../LCPT_Logo2016_horizontal_for_referral.png'



const Header = (props) =>{
    return(
        <header>
            <Link to='/home' className='logo'>
                <img src={logo} />
            </Link>
        </header>
    )
}

export default Header;