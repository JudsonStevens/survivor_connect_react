import React, { Component } from 'react';
import '../css/Search.css';
import '../css/SearchField.css';
import { Grid } from 'semantic-ui-react'
import SearchField from '../components/SearchField'

class Search extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="parallax">
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
        </div>
        <div className="about-text">
          <h1> Survivor Connect </h1>
          <p>Survivor Connect is designed to help survivors of domestic violence and sexual assault find attorneys in their area who offer pro bono legal services.</p>
          <p><a href='/support' >click here to learn more</a></p>
        </div>
        <div className="second-parallax">
        </div>
      </div>
    );
  }
}

export default Search;
