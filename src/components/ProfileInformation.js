import React, { Component } from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import '../css/ProfileInformation.css'
import { API_Url } from '../api/APIUrls'

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
      loading:        true,
      displayButtons: false
    }
  }

  componentWillMount() {
    let jwt = sessionStorage.getItem('jwt')
    fetch(`${API_Url}/api/user/${this.props.name}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then( response => response.json() )
    .then( parsedResponse => this.setState( () => ( 
      { loading:        false, 
        name:           parsedResponse["name"], 
        email:          parsedResponse["email"],
        address:        parsedResponse["address"],
        firmName:       parsedResponse["firm_name"],
        phoneNumber:    parsedResponse["phone_number"],
        signalNumber:   parsedResponse["signal_number"],
        bioInfo:        parsedResponse["bio_info"],
        proBonoHours:   parsedResponse["pro_bono_hours"],
        displayButtons: parsedResponse["display_buttons"]
      } 
    ) ) );
  }
  
  render () {
    return(
      <div id="profile-container">  
        <Header id="profile-header">
          Profile Information
        </Header>
        <div id="profile-card-container">
          <Card fluid id="profile-card">
            {
              !this.state.loading && 
              <Card.Content id="profile-content">
                <Card.Header>
                  {this.state.name}
                </Card.Header>
                <Card.Meta>
                  {this.state.address}
                </Card.Meta>
                <Card.Description>
                  {this.state.bioInfo}
                </Card.Description>
                <br />
                <Card.Description>
                  Email - {this.state.email}
                </Card.Description>
                <Card.Description>
                  Phone Number - {this.state.phoneNumber}
                </Card.Description>
                {
                  this.state.firmName &&
                  <Card.Description>
                    Law Firm Name - {this.state.firmName}
                  </Card.Description>
                }
                {
                  this.state.signalNumber &&
                  <Card.Description>
                    Signal Number - {this.state.signalNumber}
                  </Card.Description>
                }
                {
                  this.state.proBonoHours &&
                  <Card.Description>
                    Pro Bono Hours Per Week - {this.state.proBonoHours}
                  </Card.Description>
                }
              </Card.Content>
            }
            {
              !this.state.loading && this.state.displayButtons &&
              <Button id="user-edit-button">
                Edit My Account
              </Button>
            }
          </Card>
        </div>
      </div>
    )
  }
}

export default ProfileInformation