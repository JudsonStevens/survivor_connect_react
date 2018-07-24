import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import '../css/Contact.css'

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
    const rawResponse = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain,',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
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
                <Form>
                    <div id='test' className='eight wide field'>
                    <Form.Field id='name_field'>
                        <label id='name_field_label'>Please enter your name:</label>
                        <input placeholder='Name'/>
                    </Form.Field>
                    <Form.Field id='name_field'>
                        <label id='name_field_label'>Please enter your email:</label>
                        <input placeholder='Email'/>
                    </Form.Field>
                    </div>
                    <div id='test2' className='eight wide field'>
                    <Form.TextArea id='message_field' placeholder='Message' rows="15">
                    </Form.TextArea>
                    </div>
                    <Button type='submit'>Submit</Button>
              </Form>
          </Container>
        // </div>
        )
      }
    }
  
export default ContactForm