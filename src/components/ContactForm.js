import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import '../css/Contact.css'
import { API_Url } from '../api/APIUrls'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name:                   '',
    email:                  '',
    message:                '',
    touched: {
      name:               false,
      email:              false,
      message:            false 
    }
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  validate = (info) => {
    return {
      name:           info.name.length === 0,
      email:          !info.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
      message:        info.message.length === 0
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

  async handleSubmit(evt) {
    console.log(this.state.message)
    const rawResponse = await fetch(`${API_Url}/api/contact`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain,',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message_content: this.state.message
      })
    });
    const response = await rawResponse.json();
   
    console.log(response);
  }

  canBeSubmitted() {
    const errors = this.validate(this.state);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { 
      name,
      email, 
      message
    } = this.state

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    }
    const errors = this.validate(this.state);
    const isDisabled = Object.keys(errors).some(x => errors[x]);



        return (
          <Container className='contact-container'>
              <h3 id='contact-header'> Send us a message and we will be in touch soon. </h3>
                <Form onSubmit={this.handleSubmit}>
                    <div id='test' className='eight wide field'>
                    <Form.Input required className={shouldMarkError('name') ? "error" : ""} onBlur={this.handleBlur('name')} label="Please enter your name:" placeholder="Name" name="name" value={name} onChange={this.handleChange}>
                    </Form.Input>
                    <Form.Input required className={shouldMarkError('email') ? "error" : ""} onBlur={this.handleBlur('email')} label="Please enter your email:" placeholder="Email" name="email" value={email} onChange={this.handleChange}>
                    </Form.Input>
                    </div>
                    <div id='message-box-div' className='eight wide field'>
                    <Form.TextArea required rows="15" className={shouldMarkError('message') ? "error" : ""} onBlur={this.handleBlur('message')} placeholder="Message" name="message" value={message} onChange={this.handleChange}>
                    </Form.TextArea>
                    </div>
                    <Form.Button disabled={isDisabled} content='Submit'>
                    </Form.Button>
              </Form>
          </Container>
        )
      }
    }
  
export default ContactForm