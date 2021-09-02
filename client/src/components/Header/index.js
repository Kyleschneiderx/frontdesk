import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../LCPT_Logo2016_horizontal_for_referral.png'
import SideDrawer from './Sidenav/sideNavigation';
import { useSelector } from 'react-redux';



const Header = (props) =>{

    let [mainNav, setMainNav] = useState(false);
    const users = useSelector(state => state.user)
    
    const onShowNav = () =>{
        setMainNav(true)
    }

    const onHideNav = () =>{
        setMainNav(false)
    }
    return(
        <header>
            {users.auth ?
            <div className='navbar'>
                <SideDrawer/>
            </div>
            : null}
            <Link to='/home' className='logo'>
                <img src={logo} />
            </Link>   
        </header>
    )
}

export default Header;