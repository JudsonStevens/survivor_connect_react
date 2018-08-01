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
        <div className='contact-footer'>
            <div className='contact-signal-blurb'>
              <p>We recommend that all users of our site communicate with attorneys 
              via Signal,</p>
              <p>a free and secure app which encrypts all messages and calls when both parties use it.</p>
              <p>Find a link{' '} <a href="https://signal.org/">here for Signal.</a></p>
            </div>
            <div className="contact-credits">
              <p>Image credits:{'   '}
              <a href="https://unsplash.com/@saffu">Saffu</a>,{'  '}
              <a href="https://unsplash.com/@firmbee">William Iven</a>,{'  '} 
              <a href="hhttps://unsplash.com/@kalljet">Katarzyna Grabowska</a>,{'  '} 
              <a href="https://unsplash.com/@acharki95">Aziz Acharki</a>,{'  '}
              <a href="https://unsplash.com/@sharonmccutcheon">Sharon McCutcheon</a>,{'  '} 
              <a href="https://unsplash.com/@adrianpelletier">Adrian Pelletier</a>,{'  '} 
              <a href="https://unsplash.com/@pichler_sebastian">Sebastian Pichler</a></p>{'  '}
            </div>
          </div>
      </div>
        );
    }
}

export default Contact