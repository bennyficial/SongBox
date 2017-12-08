import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/Main'
import Search from './pages/Search'
import Playlist from './pages/Playlist';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/playlist' component={Playlist} />
      </Switch>
    </div>
  </Router>

export default App

