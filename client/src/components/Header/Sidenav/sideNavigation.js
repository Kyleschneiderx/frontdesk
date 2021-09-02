
import React,{ useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField
} from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CallIcon from '@material-ui/icons/Call';
import { useSelector } from 'react-redux';

const SideDrawer = ({signOutUser}) => {
    const [state,setState] = useState(false);
    const users = useSelector(state => state.user)

    return(
        <>
            <DehazeIcon
                className="drawer_btn"
                onClick={()=> setState(true)}
            />
            <Drawer anchor={'left'} open={state} onClose={()=> setState(false)}>
                <Divider/>
                <List>
                    <ListItem button component={RouterLink} to="/home" onClick={()=>setState(false)}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
{/* 
                    { !users.auth ?
                        <ListItem button component={RouterLink} to="/" onClick={()=>setState(false)}>
                            <ListItemIcon><VpnKeyIcon/></ListItemIcon>
                            <ListItemText primary="Sign in"/>
                        </ListItem>
                    : 
                        <ListItem button onClick={()=> { 
                            signOutUser()
                            setState(false)
                        }}>
                            <ListItemIcon><VpnKeyIcon/></ListItemIcon>
                            <ListItemText primary="Sign out"/>
                        </ListItem>
                    } */}
                    
                    
                </List>
                    { users.auth && users.userData.role === 2 ?
                        <>
                            <Divider/>
                            <List>
                                <ListItem button component={RouterLink} to="/billers" onClick={()=>setState(false)}>
                                    <ListItemIcon><CallIcon/></ListItemIcon>
                                    <ListItemText primary="Call List"/>
                                </ListItem>
                                <ListItem button component={RouterLink} to="/collections" onClick={()=>setState(false)}>
                                    <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
                                    <ListItemText primary="Collections List"/>
                                </ListItem>
                            </List>
                        </>
                    :null}
            </Drawer>
        </>
    )
}

export default SideDrawer;