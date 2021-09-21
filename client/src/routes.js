import React from 'react';
import {Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/User/login'
import MainLayout from './hoc/mainLayout'
import Auth from './hoc/auth'
import AddPatient from './components/Patient/Add'
import EditPatient from './components/Patient/Edit'
import ApiKey from './components/User/apikey'
import Billing from './components/Billing/Upload/index'
import Billers from './components/Billing/Billers/'
import AddCaller from './components/Billing/Add'
import Link from './components/Billing/Link/index'
import Deposits from './components/Billing/Deposits'
import Collections from './components/Billing/Collections/Home'
import AddCollectionsCaller from './components/Billing/Collections/Add';
import Waitlist from './components/Waitlist'
import AddWaitlist from './components/Waitlist/Add';

const Routes = (props) =>{

    return(
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path='/waitlist/add' component={Auth(AddWaitlist, true, false)}/>
                    <Route path='/waitlist' component={Auth(Waitlist, true, false)}/>
                    <Route path='/collections/add' component={Auth(AddCollectionsCaller, true, true)}/>
                    <Route path='/collections' component={Auth(Collections, true, true)}/>
                    <Route path='/deposits' component={Auth(Deposits, true, true)}/>
                    <Route path='/link' component={Auth(Link, true, true)}/>
                    <Route path='/csvuploadbilling' component={Auth(Billing, true, true)}/>
                    <Route path='/billers/add' component={Auth(AddCaller, true, true)}/> 
                    <Route path='/billers' component={Auth(Billers, true, true)}/> 
                    <Route path='/edit/:id' component={Auth(EditPatient, true, false)}/>
                    <Route path='/add' component={Auth(AddPatient, true, false)}/>
                    <Route path='/key' component={Auth(ApiKey, true, false)}/>
                    <Route path='/home' component={Auth(Home, true, false)}/>
                    <Route path='/' component={Login}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}


export default Routes;