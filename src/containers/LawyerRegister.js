import React, { Component } from 'react';
import '../css/LawyerRegister.css';
import { Grid } from 'semantic-ui-react'
import RegistrationForm from '../components/RegistrationForm'

class LawyerRegister extends Component {
  render() {
    return (
      <div className="results-body-div">
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

export default LawyerRegister
