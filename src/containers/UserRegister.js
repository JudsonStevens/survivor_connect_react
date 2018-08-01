import React, { Component } from 'react';
import '../css/UserRegister.css';
import { Grid } from 'semantic-ui-react'
import RegistrationForm from '../components/RegistrationForm'

class UserRegister extends Component {
  render() {
    return (
        <div className="register-body-div">
          <Grid centered container>
            <Grid.Row stretched centered>
              <Grid.Column id="inset-column">
                <RegistrationForm />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

export default UserRegister
