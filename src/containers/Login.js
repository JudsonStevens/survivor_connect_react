import React, { Component } from 'react';
import '../css/Login.css';
import { Grid } from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'

class Login extends Component {
  render() {
    return (
      <div className="login-body-div">
        <Grid centered container>
          <Grid.Row stretched centered>
            <Grid.Column id="inset-column">
              <LoginForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className='login-footer'>
            <div className='login-signal-blurb'>
              <p>We recommend that all users of our site communicate with attorneys 
              via Signal,</p>
              <p>a free and secure app which encrypts all messages and calls when both parties use it.</p>
              <p>Find a link{' '} <a href="https://signal.org/">here for Signal.</a></p>
            </div>
            <div className="login-credits">
              <p>Image credits:{'   '}
              <a href="https://unsplash.com/@saffu">Saffu</a>,{'  '}
              <a href="https://unsplash.com/@firmbee">William Iven</a>,{'  '} 
              <a href="hhttps://unsplash.com/@kalljet">Katarzyna Grabowska</a>,{'  '} 
              <a href="https://unsplash.com/@acharki95">Aziz Acharki</a>,{'  '}
              <a href="https://unsplash.com/@sharonmccutcheon">Sharon McCutcheon</a>,{'  '} 
              <a href="https://unsplash.com/@adrianpelletier">Adrian Pelletier</a>,{'  '} 
              <a href="https://unsplash.com/@__matthoffman__">Matt Hoffman</a>,{'  '}
              <a href="https://unsplash.com/@pichler_sebastian">Sebastian Pichler</a></p>{'  '}
            </div>
          </div>
      </div>
    )
  }
}

export default Login