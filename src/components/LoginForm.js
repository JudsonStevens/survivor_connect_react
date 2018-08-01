import React, { Component } from 'react'
import { Container, Header, Form } from 'semantic-ui-react'
import '../css/LoginForm.css'
import { Redirect } from 'react-router-dom'
import { API_Url } from '../api/APIUrls'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    email: '',
    password: '',
    redirect: false,
    responseBody: '',
    loading: true,
    touched: {
      email:                false,
      password:             false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      email:            !info.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
      password:         info.password.length < 6,
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
    sessionStorage.setItem('currentUser', this.state.responseBody.email)    
  }

  // Devise expects the login information to come in as a specific hash with user as the key.
  handleSubmit(evt) {
    fetch(`${API_Url}/users/sign_in`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain,',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
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
      email, 
      password,
      redirect
    } = this.state

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    }
    const errors = this.validate(this.state);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <Container id="login-container">
        <Header id='login-header'>
          Login to your account here.
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input className={shouldMarkError('email') ? "error" : ""} onBlur={this.handleBlur('email')} label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} width={16} />
          </Form.Group>
          <Form.Group>
            <Form.Input type='password' className={shouldMarkError('password') ? "error" : ""} onBlur={this.handleBlur('password')} label="Password" placeholder="Password" name='password' value={password} onChange={this.handleChange} width={16} />
          </Form.Group>
          <Form.Button disabled={isDisabled} content='Submit' />
        </Form>
        {/* In order to redirect after the fetch call, added in a loading attribute and checked to see if it was false before redirecting. */}
        { 
          !this.state.loading && redirect && <Redirect push to={ {
            pathname: `/profile/${this.state.email.split('@')[0]}`,
            state: { email: this.state.responseBody["email"] }
          } } />
        }
      </Container>
    )
  }


}

export default LoginForm