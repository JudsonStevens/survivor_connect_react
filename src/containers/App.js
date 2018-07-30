import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from './NotFound'
import SupportPage from './SupportPage'
import SearchResults from './SearchResults'
import UserRegister from './UserRegister'
import UserProfile from './UserProfile'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/index.html' exact component={Search} />
          <Route path='/search_results' exact component={SearchResults} />
          <Route path='/support' exact component={SupportPage} />
          <Route path='/user_register' exact component={UserRegister} />
          <Route path='/profile/:name' component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App