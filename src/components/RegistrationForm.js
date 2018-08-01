import React, { Component } from 'react'
import { Container, Header, Form, Dropdown } from 'semantic-ui-react'
import '../css/RegistrationForm.css'
import { Redirect } from 'react-router-dom'
import { API_Url } from '../api/APIUrls'


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
    password:               '',
    passwordConfirmation:   '',
    touched: {
      firstName:            false,
      lastName:             false,
      email:                false,
      streetAddress:        false,
      city:                 false,
      state:                false,
      phoneNumber:          false,
      zipCode:              false,
      password:             false,
      passwordConfirmation: false
    },
    responseBody:           '',
    redirect:               false,
    loading:                true
    };

    this.handleSubmit = this.handleSubmit.bind(this);

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

  componentDidMount() {
    this.setState({
      redirect: false,
      responseBody: '',
      loading: true
    })
  }

  validate = (info) => {
    return {
      firstName:            info.firstName.length === 0,
      lastName:             info.lastName.length === 0,
      email:                !info.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
      streetAddress:        info.streetAddress.length === 0,
      city:                 info.city.length === 0,
      state:                info.state.length === 0,
      zipCode:              info.zipCode.length === 0,
      phoneNumber:          info.phoneNumber.length === 0,
      password:             info.password.length < 6,
      passwordConfirmation: info.passwordConfirmation !== info.password
    }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {...this.state.touched, [field]: true}
    })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value});

  handleChangeState = (e, data) => { 
    this.setState({ state: data.value });
  }

  storeInformation = (info) => {
    this.setState({
      responseBody: info,
      loading: false,
      redirect: true
    })
  }

  handleSubmit(evt) {
    fetch(`${API_Url}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain,',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: (this.state.firstName + " " + this.state.lastName),
        email: this.state.email,
        address: (this.state.streetAddress + ", " + this.state.city + ", " + this.state.state + " " + this.state.zipCode),
        phone_number: this.state.phoneNumber,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      })
    }).then(response => {
      sessionStorage.setItem('jwt', response.headers.get('Authorization').split('Bearer ')[1]);
      sessionStorage.setItem('currentUser', this.state.email)
      return response.json();
    }).then(parsedResponse => this.storeInformation(parsedResponse) );
    evt.preventDefault();
  }
  
  canBeSubmitted() {
    const errors = this.validate(this.state);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
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
      password,
      passwordConfirmation,
      redirect
    } = this.state

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    }
    const errors = this.validate(this.state);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const stateOptions = this.stateOptions

    return (
      <Container id="registration-container">
        {/* <Header id='registration-header'> */}
        <h2 className='register-form-header'>
          Fill in your information in order to create an account.
          All fields are required to create your account</h2>
        {/* </Header> */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths={2}>
            <Form.Input className={shouldMarkError('firstName') ? "error" : ""} onBlur={this.handleBlur('firstName')} label="First Name" placeholder='First Name' name='firstName' value={firstName} onChange={this.handleChange} width={8} />
            <Form.Input className={shouldMarkError('lastName') ? "error" : ""} onBlur={this.handleBlur('lastName')} label="Last Name" placeholder='Last Name' name='lastName' value={lastName} onChange={this.handleChange} width={8} />
          </Form.Group>
          <Form.Group>
            <Form.Input className={shouldMarkError('email') ? "error" : ""} onBlur={this.handleBlur('email')} label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} width={16} />
          </Form.Group>
          <Form.Group>
            <Form.Input type='password' className={shouldMarkError('password') ? "error" : ""} onBlur={this.handleBlur('password')} label="Password" placeholder="Password" name='password' value={password} onChange={this.handleChange} width={8} />
            <Form.Input type='password' className={shouldMarkError('passwordConfirmation') ? "error" : ""} onBlur={this.handleBlur('passwordConfirmation')} label="Password Confirmation" placeholder="Password" name='passwordConfirmation' value={passwordConfirmation} onChange={this.handleChange} width={8} /> 
          </Form.Group>
          <Form.Group>
            <Form.Input className={shouldMarkError('phoneNumber') ? "error" : ""} onBlur={this.handleBlur('phoneNumber')} label='Phone Number' placeholder='Phone Number' name='phoneNumber' value={phoneNumber} onChange={this.handleChange} width={6} />
          </Form.Group>
          <Form.Group>
            <Form.Input className={shouldMarkError('streetAddress') ? "error" : ""} onBlur={this.handleBlur('streetAddress')} label='Street Address' placeholder='Street Address' name='streetAddress' value={streetAddress} onChange={this.handleChange} width={16} />
          </Form.Group>
          <Form.Group>
            <Form.Input className={shouldMarkError('city') ? "error" : ""} onBlur={this.handleBlur('city')} label='City' placeholder='City' name='city' value={city} onChange={this.handleChange} width={9} />
            <Form.Group id='state-field'>
              <label id='state-label'>State</label>
              <Dropdown placeholder='State' value={state} search selection options={stateOptions} width={2} onChange={this.handleChangeState} />
            </Form.Group>
            <Form.Input className={shouldMarkError('zipCode') ? "error" : ""} onBlur={this.handleBlur('zipCode')} label='Zip Code' placeholder='Zip Code' name='zipCode' value={zipCode} onChange={this.handleChange} width={4} />
          </Form.Group>
          <Form.Group>
          </Form.Group>
          <Form.Button disabled={isDisabled} content='Submit' />
        </Form>
        {/* In order to redirect after the fetch call, added in a loading attribute and checked to see if it was false before redirecting. */}
        { 
          !this.state.loading && redirect && <Redirect push to={ {
            pathname: `/profile/${this.state.email.split('@')[0]}`,
            state: { name: this.state.responseBody["name"] }
          } } />
        }
      </Container>
    )
  }


}

export default RegistrationForm