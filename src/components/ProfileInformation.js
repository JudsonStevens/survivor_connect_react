import React, { Component } from 'react';
import { Container, Header, Grid, Card } from 'semantic-ui-react';
import '../css/ProfileInformation.css'

class ProfileInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:           '',
      address:        '',
      firmName:       '',
      phoneNumber:    '',
      bioInfo:        '',
      signalNumber:   '',
      proBonoHours:   '',
      licenseAreas:   '',
      email:          '',
      loading:        true
    }
  }

  componentWillMount() {
    let jwt = sessionStorage.getItem('jwt')
    fetch(`http://localhost:3001/api/user/${this.props.name}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then( response => response.json() )
    .then( parsedResponse => this.setState( () => ( 
      { loading:      false, 
        name:         parsedResponse["name"], 
        email:        parsedResponse["email"],
        address:      parsedResponse["address"],
        phoneNumber:  parsedResponse["phone_number"],
        signalNumber: parsedResponse["signal_number"],
        proBonoHours: parsedResponse["pro_bono_hours"]
      } 
    ) ) );
  }
  
  // getUserInformation = () => {
  //   let jwt = sessionStorage.getItem('jwt')
  //   fetch('http://localhost:3001/api/user', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${jwt}`
  //     }
  //   }).then(response => response.json())
  //   .then(parsedResponse => this.setState( () => ( { name: parsedResponse["name"] } ) ) );
  // }

  render () {
    return(
      <Header id="profile-header">
        Profile Information
        <div>
          {
            !this.state.loading && 
            <p>
              Name: {this.state.name},
              Address: {this.state.address}
            </p>
          }
        </div>
      </Header>
    )
  }
}

export default ProfileInformation