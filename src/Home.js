import React, { Component } from 'react';
import './Home.css';
import './SearchField.css';
import { Grid } from 'semantic-ui-react'
import SearchField from './SearchField.js'

class Home extends Component {
  render() {
    return (
      <Grid centered container>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row stretched centered>
          <Grid.Column id="inset-column">
            <SearchField />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
