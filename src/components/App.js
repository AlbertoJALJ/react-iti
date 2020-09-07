import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import NewUser from '../pages/NewUser'
import Students from '../pages/Students'
import Student from '../pages/Student'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Layout>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/users/create" component={NewUser}/>
                    <Route exact path="/students" component={Students}/>
                    <Route exact path="/student/:studentID" component={Student}/>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}
