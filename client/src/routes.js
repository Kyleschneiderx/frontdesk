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



const Routes = (props) =>{

    return(
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path='/csvuploadbilling' component={Auth(Billing, true, true)}/>
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