import React, { Component } from 'react';
import { Container, Header, Search } from 'semantic-ui-react';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSearchChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const search_location = this.state.value;
    const search_url = `http://127.0.0.1:3000/search_lawyers?q=${search_location}`

    fetch(search_url).then( response => response.json()).then ( data => console.log(data));

    event.preventDefault();
  }

  render() {
    return (
      <Container id="form-container">
        <Header>
          Search for a Lawyer in Your Area
        </Header>
        <form onSubmit={this.handleSubmit}>
          <Search
            onSearchChange={this.handleSearchChange}
            type='text'
            value={this.state.value}
            size='massive'
            placeholder='Enter your address or a zip code' 
          />
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </Container>
    )
  }
}

export default SearchField
