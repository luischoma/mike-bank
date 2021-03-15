import React from 'react'
import { Route, Switch, BrowserRouter} from 'react-router-dom'

import '../src/api/config/config.js'
import 'typeface-saira'
import './App.css'

import {
  Login,
  Register,
  Payment,
  Withdrawal
} from './pages/'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/withdrawal'>
            <Withdrawal />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
