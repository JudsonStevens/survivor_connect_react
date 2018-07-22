import React, { Component } from 'react';
import '../css/Donate.css';
import { Container, Grid } from 'semantic-ui-react'
import DonateForm from '../components/DonateForm.js'

class Donate extends Component {
  render() {
  return (
    <Grid centered container>
      <Grid.Row stretched centered>
        <Grid.Column id='inset-column'>
          <DonateForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
   );
  }
}

export default Donate