import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from './NotFound'
import SupportPage from './SupportPage'
import SearchResults from './SearchResults'
import UserRegister from './UserRegister'
import UserProfile from './UserProfile'
import Contact from './Contact'
import Share from './Share'
import Donate from './Donate'
import NavBar from './NavBar'
import { API_Url } from '../api/APIUrls'


class App extends Component {
  render() {
    const currentUser = React.createContext(
      fetch(`${API_Url}/api/current_user`).then(response => JSON.parse(response)).then(json => console.log(json))
    )
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/index.html' exact component={Search} />
          <Route path='/search_results' exact component={SearchResults} />
          <Route path='/support' exact component={SupportPage} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/user_register' exact component={UserRegister} />
          <Route path='/profile/:name' component={UserProfile} />
          <Route path='/donate' exact component={Donate} />
          <Route path='/share' exact component={Share} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App