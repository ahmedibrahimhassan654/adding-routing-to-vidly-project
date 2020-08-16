import React, { Component } from 'react'
import { Route, Redirect,Switch } from 'react-router-dom'

import Movies from './components/movies'
import Customers from './components/customers.jsx'

import Rentals from './components/rentals.jsx'
import NotFound from './components/notFound.jsx'

import './App.css'

class App extends Component {
  render() {
    return (
      <main className='container'>
        <Switch>
          <Route path='/customers' component={Customers}></Route>
          <Route path='/movies' component={Movies}></Route>
          <Route path='/rentals' component={Rentals}></Route>
          <Route path='/not-found' component={NotFound}></Route>
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found'/>
        </Switch>
      </main>
    )
  }
}

export default App
