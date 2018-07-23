import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from './NotFound'
import SupportPage from './SupportPage'
import SearchResults from './SearchResults'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/index.html' exact component={Search} />
          <Route path='/search_results' exact component={SearchResults} />
          <Route path='/support' exact component={SupportPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App