import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ContactForm from '../components/ContactForm'
import '../css/Contact.css'




class Contact extends Component {
  render() {
    return (
      <div className='contact-body-div'>
        <Grid centered container>
          <Grid.Row stretched centered>
            <Grid.Column id='inset-column'>

                <ContactForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
        );
    }
}

export default Contact