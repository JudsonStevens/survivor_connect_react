import React, { Component } from 'react';
import '../css/Login.css';
import { Grid } from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'

class Login extends Component {
  render() {
    return (
      <div className="login-body-div">
        <Grid centered container>
          <Grid.Row stretched centered>
            <Grid.Column id="inset-column">
              <LoginForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Login