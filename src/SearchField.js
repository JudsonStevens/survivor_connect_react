import React, { Component } from 'react';
import { Container, Header, Search } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      value: '',
      redirect: false,
      newData:  [],
      loading: true 
    };    

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      redirect: false
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  // renderRedirect = () => {
  //   return (
  //     this.state.redirect &&
  //     <Redirect to='/search_results'
  //     /* {{
  //       pathname: '/search_results',
  //       state: { info: this.state.newData }
  //       }} */
  //     />
  //     )
  // }

  storeInformation = (info, finished) => {
    
    this.setState({
      newData: info,
      loading: finished
    });
    console.log(this.state.newData);
    console.log(this.state.loading)
  }

  handleSearchChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    const search_location = this.state.value;
    const search_url = `http://127.0.0.1:3001/api/lawyers?q=${search_location}`

    fetch(search_url).then( response => {return response.json()}).then (json => this.storeInformation(json, false));
    // this.props.onSearchComplete(this.state.newData)
    this.setRedirect();
    // this.renderRedirect();
    event.preventDefault();
  }

  render() {
    const redirect = this.state.redirect
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
        { !this.state.loading && redirect && <Redirect push to={{
           pathname: '/search_results',
           state: { info: this.state.newData }
          }} />}
      </Container>
    )
  }
}

export default SearchField
// this.props.searchComplete(data)