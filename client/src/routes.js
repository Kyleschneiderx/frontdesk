import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/User/login'
import MainLayout from './hoc/mainLayout'
import Auth from './hoc/auth'
import AddPatient from './components/Patient/Add'
import EditPatient from './components/Patient/Edit'


const Routes = () =>{
    return(
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path='/edit/:id' component={Auth(EditPatient)}/>
                    <Route path='/add' component={Auth(AddPatient)}/>
                    <Route path='/home' component={Auth(Home)}/>
                    <Route path='/' component={Login}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes;