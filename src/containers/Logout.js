import React, { Component } from 'react'
import { API_Url } from '../api/APIUrls'
import { Redirect } from 'react-router-dom'

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false,
      responseBody: ''
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     redirect: false,
  //     loading: true,
  //     responseBody: ''
  //   })
  // }

  logoutUser = () => {
    fetch(`${API_Url}/users/sign_out`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain,',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
          session: {
            email: `${sessionStorage.getItem('currentUser')}`
          }
        })
      })
      .then(response => {
      return response.json();
    }).then(parsedResponse => this.storeInformation(parsedResponse) );
  }

  storeInformation = (info) => {
    this.setState({
      loading: false,
      redirect: true,
      responseBody: info
    })
    sessionStorage.setItem('currentUser', null)
  }

  render() {
    return(
      <div>
        {this.logoutUser()}
        {
          !this.state.loading && this.state.redirect &&
          <Redirect push to={{pathname: '/'}} />
        }
      </div>
    )
  }
}