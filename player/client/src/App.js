import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Owner from './pages/Owner'
import Customer from './pages/Customer'

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Owner} />
        <Route exact path='/customer' component={Customer} />
      </Switch>
    </div>
  </Router>

export default App
