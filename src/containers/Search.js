import React, { Component } from 'react';
import '../css/Search.css';
import '../css/SearchField.css';
import { Grid, Message } from 'semantic-ui-react'
import SearchField from '../components/SearchField'

class Search extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="parallax">
          <Grid centered container>
            <Grid.Row stretched centered>
              <Grid.Column id="inset-column">
                <SearchField />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
        <div className="about-text">
          <h1> Survivor Connect </h1>
          <p>Survivor Connect is designed to help survivors of domestic violence and sexual assault find attorneys in their area who offer pro bono legal services.</p>
          <p><a href='/support' >click here to learn more</a></p>
        </div>
        <div className="second-parallax">
          <Message className='ui compact message'>
            <Message.Header>
              <a href="https://signal.org/">Signal.org</a>
            </Message.Header>
            We recommend that all users of our site communicate with attorneys 
            via Signal, a free and secure app which encrypts all messages and calls when both parties use it.
          </Message>
          <div className='credits'>
            <p>Image credits:{' '}
            <a href="https://unsplash.com/@saffu">Saffu</a>,{' '}
            <a href="https://unsplash.com/@firmbee">William Iven</a>,{' '} 
            <a href="hhttps://unsplash.com/@kalljet">Katarzyna Grabowska</a>,{' '} 
            <a href="https://unsplash.com/@acharki95">Aziz Acharki</a>,{' '}
            <a href="https://unsplash.com/@sharonmccutcheon">Sharon McCutcheon</a>,{' '} 
            <a href="https://unsplash.com/@adrianpelletier">Adrian Pelletier</a>,{' '} 
            <a href="https://unsplash.com/@pichler_sebastian">Sebastian Pichler</a></p>{' '}
         </div>
        </div>
      </div>
    );
  }
}

export default Search;
