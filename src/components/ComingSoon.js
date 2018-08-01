import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import '../css/ComingSoon.css'

class ComingSoon extends Component {
  render() {
    return (
      <div class="coming-soon-div">
        <Grid centered container>
          <Grid.Row centered>
            <Grid.Column id="inset-column" className='coming-soon-text'>
            <h2>This feature will be added soon!</h2>
            <p>Thank you for your patience.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className='coming-soon-footer'>
            <div className='coming-soon-signal-blurb'>
              <p>We recommend that all users of our site communicate with attorneys 
              via Signal,</p>
              <p>a free and secure app which encrypts all messages and calls when both parties use it.</p>
              <p>Find a link{' '} <a href="https://signal.org/">here for Signal.</a></p>
            </div>
            <div className="coming-soon-credits">
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
    )
  }
}

export default ComingSoon