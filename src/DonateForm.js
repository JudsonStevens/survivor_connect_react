import React, { Component } from 'react'
import { Container, Header, Grid, Card, Form, Button, Checkbox, Image } from 'semantic-ui-react'
import './DonateForm.css'
import { law } from './law.png'

export class DonateForm extends Component {
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
        <Grid.Column>
          <Container>  
            <Card id='donate_card'>
               <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder='email' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I would like to receive email updates about Survivor Connect' />
                </Form.Field>
                <Button type='submit'>Pay with Paypal</Button>
              </Form>
            </Card>
        </Container>
      </Grid.Column>
    </Grid.Row>
    
    <Card.Group container columns={2}>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={law} />
        <Card.Header>Advocate</Card.Header>
        <Card.Meta>We are always looking for legal professionals to add to our network.</Card.Meta>
        <Card.Description>
          Sign up to offer pro-bono hours to those in need of legal assistance.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Request a law practice profile
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/images/avatar/large/jenny.jpg' />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
    <Grid.Row>
    </Grid.Row>
    </Grid>
        );
    }
}



export default DonateForm