import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from './NotFound'
<<<<<<< HEAD
import Donate from './Donate'
=======
import SupportPage from './SupportPage'
>>>>>>> lawyer_register
import SearchResults from './SearchResults'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/index.html' exact component={Search} />
          <Route path='/search_results' exact component={SearchResults} />
<<<<<<< HEAD
          <Route path='/donate' exact component={Donate} />
=======
          <Route path='/support' exact component={SupportPage} />
>>>>>>> lawyer_register
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App