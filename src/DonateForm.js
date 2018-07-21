import React, { Component } from 'react'
import { Container, Header, Grid, Card, Form, Button, Checkbox, Image } from 'semantic-ui-react'


class DonateForm extends Component {
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
    
    event.preventDefault();
  }

  render() {
    return (
      <Grid container columns={3}>
      <Grid.Row>
      </Grid.Row>
      <Grid.Row stretched centered>
        <h1>Support Survivor Connect</h1>
      </Grid.Row>
    
    <Card.Group container columns={2}>
      <Card id='donate_card'>
        <Card.Content>
        <Image floated='right' size='mini' src={require("./heart.png")} />
          <Card.Header>
            Donate
          </Card.Header>
          <Card.Meta>
            Give securely via PayPal
          </Card.Meta>
          <Card.Description>
            Your generosity helps us maintain this site and help survivors.
          </Card.Description>
        </Card.Content>
          <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='black'>
            Donate with PayPal
          </Button>
        </div>
      </Card.Content>
      </Card>


    <Card id='advocate_card'>
      <Card.Content>
        <Image floated='right' size='mini' src={require("./law.png")} />
        <Card.Header>Advocate</Card.Header>
        <Card.Meta>We are always looking for legal professionals to add to our network.</Card.Meta>
        <Card.Description>
          Sign up to offer pro-bono hours to those in need of legal assistance.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui buttons'>
          <Button basic color='black'>
            Request a law practice profile
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card id='contact_card'>
      <Card.Content>
        <Image floated='right' size='mini' src={require("./contact.png")}/>
        <Card.Header>Contact</Card.Header>
        <Card.Meta>Send us a message or join our mailing list</Card.Meta>
        <Card.Description>
          We are looking forward to hearing from you!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='black'>
            Get in touch
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card id='share_card'>
      <Card.Content>
        <Image floated='right' size='mini' src={require("./social-media.png")} />
        <Card.Header>Share</Card.Header>
        <Card.Meta>By sharing our app, you're helping us reach more survivors and more service providers </Card.Meta>
        <Card.Description>Click below to share Survivor Connect on social media.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='black'>
            Share
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
    </Grid>
        );
    }
}



export default DonateForm