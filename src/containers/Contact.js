import React, { Component } from 'react';
import { Container, Header, Grid, Card } from 'semantic-ui-react';
import '../css/Contact.css'

class NameField extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }
}

class MessageField extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
  }

class Contact extends Component {
  }
  render() {
    return (
      <div class='contact-body-div'>
        <Grid centered container>
          <Grid.Row stretched centered>
            <Grid.Column id='contact-inset-column'>
              <Container id='contact-container'>

              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
        )
    }
}