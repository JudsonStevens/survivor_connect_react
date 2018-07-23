import React, { Component } from 'react'
import { Container, Header, Form, Dropdown } from 'semantic-ui-react'
import '../css/RegistrationForm.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    firstName:              '',
    lastName:               '',
    email:                  '',
    streetAddress:          '',
    city:                   '',
    state:                  '',
    zipCode:                '',
    phoneNumber:            '',
    submittedName:          '',
    submittedEmail:         '',
    submittedStreetAddress: '',
    submittedCity:          '',
    submittedState:         '',
    submittedZipCode:       '',
    submittedPhoneNumber:   ''
    };

  this.stateOptions = [
    { key: 'AL', value: 'AL', text: 'Alabama' },
    { key: 'AK', value: 'AK', text: 'Alaska' },
    { key: 'AZ', value: 'AZ', text: 'Arizona' },
    { key: 'AR', value: 'AR', text: 'Arkansas'},
    { key: 'CA', value: 'CA', text: 'Califorina' },
    { key: 'CO', value: 'CO', text: 'Colorado' },
    { key: 'CT', value: 'CT', text: 'Connecticut' },
    { key: 'DE', value: 'DE', text: 'Delware' },
    { key: 'FL', value: 'FL', text: 'Florida' },
    { key: 'GA', value: 'GA', text: 'Georgia' },
    { key: 'HI', value: 'HI', text: 'Hawaii' },
    { key: 'ID', value: 'ID', text: 'Idaho' },
    { key: 'IL', value: 'IL', text: 'Illinois' },
    { key: 'IN', value: 'IN', text: 'Indiana' },
    { key: 'IA', value: 'IA', text: 'Iowa' },
    { key: 'KS', value: 'KS', text: 'Kansas' },
    { key: 'KY', value: 'KY', text: 'Kentucky' },
    { key: 'LA', value: 'LA', text: 'Louisiana' },
    { key: 'ME', value: 'ME', text: 'Maine' },
    { key: 'MD', value: 'MD', text: 'Maryland' },
    { key: 'MA', value: 'MA', text: 'Massachusetts' },
    { key: 'MI', value: 'MI', text: 'Michigan' },
    { key: 'MN', value: 'MN', text: 'Minnesota' },
    { key: 'MS', value: 'MS', text: 'Mississippi' },
    { key: 'MO', value: 'MO', text: 'Missouri' },
    { key: 'MT', value: 'MT', text: 'Montana' },
    { key: 'NE', value: 'NE', text: 'Nebraska' },
    { key: 'NV', value: 'NV', text: 'Nevada' },
    { key: 'NH', value: 'NH', text: 'New Hampshire' },
    { key: 'NJ', value: 'NJ', text: 'New Jersey' },
    { key: 'NM', value: 'NM', text: 'New Mexico' },
    { key: 'NY', value: 'NY', text: 'New York' },
    { key: 'NC', value: 'NC', text: 'North Carolina' },
    { key: 'ND', value: 'ND', text: 'North Dakota' },
    { key: 'OH', value: 'OH', text: 'Ohio' },
    { key: 'OK', value: 'OK', text: 'Oklahoma' },
    { key: 'OR', value: 'OR', text: 'Oregon' },
    { key: 'PA', value: 'PA', text: 'Pennsylvania' },
    { key: 'RI', value: 'RI', text: 'Rhode Island' },
    { key: 'SC', value: 'SC', text: 'South Carolina' },
    { key: 'SD', value: 'SD', text: 'South Dakota' },
    { key: 'TN', value: 'TN', text: 'Tennessee' },
    { key: 'TX', value: 'TX', text: 'Texas' },
    { key: 'UT', value: 'UT', text: 'Utah' },
    { key: 'VT', value: 'VT', text: 'Vermont' },
    { key: 'VA', value: 'VA', text: 'Virginia' },
    { key: 'WA', value: 'WA', text: 'Washington' },
    { key: 'WV', value: 'WV', text: 'West Virginia' },
    { key: 'WI', value: 'WI', text: 'Wisconsin' },
    { key: 'WY', value: 'WY', text: 'Wyoming' }
    ];
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value});

  handleChangeState = (e, data) => { 
    this.setState({ state: data.value });
  }

  handleSubmit = () => {
    const { firstName, lastName, email, streetAddress, city, state, zipCode, phoneNumber } = this.state

    this.setState({ 
      submittedName:          firstName + " " + lastName,
      submittedEmail:         email,
      submittedStreetAddress: streetAddress,
      submittedCity:          city,
      submittedState:         state,
      submittedZipCode:       zipCode,
      submittedPhoneNumber:   phoneNumber
    });
  }

  render() {
    const { 
      firstName,
      lastName, 
      email, 
      streetAddress, 
      city, 
      state, 
      zipCode,
      phoneNumber,
      submittedName,
      submittedEmail,
      submittedStreetAddress,
      submittedCity,
      submittedState,
      submittedZipCode,
      submittedPhoneNumber
    } = this.state

    const stateOptions = this.stateOptions

    return (
      <Container id="registration-container">
        <Header>
          Fill in your information in order to create an account.
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths={2}>
            <Form.Input label="First Name" placeholder='First Name' name='firstName' value={firstName} onChange={this.handleChange} width={8} />
            <Form.Input label="Last Name" placeholder='Last Name' name='lastName' value={lastName} onChange={this.handleChange} width={8} />
          </Form.Group>
          <Form.Group>
            <Form.Input label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} width={10} />
            <Form.Input label='Phone Number' placeholder='Phone Number' name='phoneNumber' value={phoneNumber} onChange={this.handleChange} width={6} />
          </Form.Group>
          <Form.Group>
            <Form.Input label='Street Address' placeholder='Street Address' name='streetAddress' value={streetAddress} onChange={this.handleChange} width={16} />
          </Form.Group>
          <Form.Group>
            <Form.Input label='City' placeholder='City' name='city' value={city} onChange={this.handleChange} width={9} />
            <Form.Group id='state-field'>
              <label id='state-label'>State</label>
              <Dropdown placeholder='State' value={state} search selection options={stateOptions} width={2} onChange={this.handleChangeState} />
            </Form.Group>
            <Form.Input label='Zip Code' placeholder='Zip Code' name='zipCode' value={zipCode} onChange={this.handleChange} width={4} />
          </Form.Group>
          <Form.Group>

          </Form.Group>
        </Form>
      </Container>
    )
  }


}

export default RegistrationForm