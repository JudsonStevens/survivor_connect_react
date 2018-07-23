import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from './NotFound'
import SupportPage from './SupportPage'
import SearchResults from './SearchResults'
<<<<<<< HEAD
import Contact from './Contact'
=======
import LawyerRegister from './LawyerRegister'
>>>>>>> 96ba1ab2893a6c3d34359ee7f2d2f12957e25f12

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/index.html' exact component={Search} />
          <Route path='/search_results' exact component={SearchResults} />
          <Route path='/support' exact component={SupportPage} />
<<<<<<< HEAD
          <Route path='/contact' exact component={Contact} />
=======
          <Route path='/lawyer_register' exact component={LawyerRegister} />
>>>>>>> 96ba1ab2893a6c3d34359ee7f2d2f12957e25f12
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App