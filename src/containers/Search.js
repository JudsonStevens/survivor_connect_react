import React, { Component } from 'react';
import '../css/Search.css';
import '../css/SearchField.css';
import { Grid } from 'semantic-ui-react'
import SearchField from '../components/SearchField'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { searchData: '{"new": "fake"}' }
  }

  searchComplete = (data) => {
    this.setState({
      searchData: data
    })
  }

  render() {
    return (
      <div class="home-page">
        <div class="parallax">
          <Grid centered container>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row stretched centered>
              <Grid.Column id="inset-column">
                <SearchField onSearchComplete={this.searchComplete} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
        <div class="about-text">
          <h1> Hello </h1>
        </div>
        <div class="second-parallax">
        </div>
      </div>
    );
  }
}

export default Search;
