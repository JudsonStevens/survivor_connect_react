import React, { Component } from 'react';
import { Form, Button, TextArea, Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import '../css/ContactForm.css'

class ContactForm extends Component {
  render() {
    return (
       <Container class='contact-container'>
          <h3 id='contact-header'> Send us a message and we will be in touch soon. </h3>
            <Form>
                <div id='test' class='eight wide field'>
                <Form.Field id='name_field'>
                    <label id='name_field_label'>Please enter your name:</label>
                    <input placeholder='Name'/>
                </Form.Field>
                </div>
                <div id='test2' class='eight wide field'>
                <Form.TextArea id='message_field' placeholder='Message' rows="15">
                </Form.TextArea>
                </div>
                <Button type='submit'>Submit</Button>
           </Form>
      </Container>
    // </div>
    );
  }
}

export default ContactForm