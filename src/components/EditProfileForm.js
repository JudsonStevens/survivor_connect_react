import React,  { Component } from 'react'
import { Container, Header, Form, Dropdown } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { API_Url } from '../api/APIUrls'

class EditProfileForm extends Component {
  constructor(props ) {
    super(props);
    this.state = this.state = {
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
      responseBody : '',
      redirect: false,
      loading: true
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  componentDidMount() {
    // whatever is written here will kick off as soon as user visits page
    // we talked about the fetch call happening here, but if the user navigated away from the page before
    // this.setState, could receive an error page
    // this.setState({
    //   loading: true
    // })
    // fetch(/* */)
    //   .then(data => {
    //     this.setState({ loading: false })
    //   })
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
      method: 'PUT',
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


    // in the case of a fetch call for pre poupulated fields that is loading slower than the form,
    // we could return a spinner animation from semantic ui
    // return this.state.loading ? (
    //   <Spanner />
    // ) : (
    //   <Form />
    // )
  } 
}
