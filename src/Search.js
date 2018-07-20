import React, { Component } from 'react';
import './Search.css';
import './SearchField.css';
import { Grid } from 'semantic-ui-react'
import SearchField from './SearchField'
import SearchResults from './SearchResults'

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
      <Grid centered container>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row stretched centered>
          <Grid.Column id="inset-column">
            <SearchField onSearchComplete={this.searchComplete}/>
            {
              this.state.searchData !== '{"new": "fake"}' &&
              <SearchResults data={this.state.searchData} />
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Search;
