import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import EmpolyeeIndex from './Components/Employee/EmployeeIndex'
import EmpolyeeShow from './Components/Employee/EmployeeShow'
import EmployeeNew from './Components/Employee/EmployeeNew'
import Home from './Components/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (

      <React.Fragment>
        <Route path="/" render={() => (
            <Header  user={user} />
        )} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

          <AuthenticatedRoute exact user={user} path='/employees' render={() => (
            <EmpolyeeIndex alert={this.alert} user={user} />
          )} />
          <Route exact  path={`/employees/:user_id/new`} render={() => (
            <EmployeeNew alert={this.alert} />
          )} />

        </main>
        <Route exact path='/employees/:id' render={(props) => (
            <EmpolyeeShow />
          )} />
          <Route exact path='/' render={(props) => (
            <Home />
          )} />
      </React.Fragment>
    )
  }
}

export default App
