import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export class DonateForm extends Component {
  render() {
    return (
    <Grid centered container>
      <Grid.Row>
      </Grid.Row>
      <Grid.Row stretched centered>
        <Grid.Column id='inset-column'>
          <Container>
            <Header id='donate-form'>
              Donate
            </Header>
          <Card.Group>
            { 
              this.props.amount.map((info) =>
              <Card>
                <Card.Content>
                  <Card.Header>
                  </Card.Header>
                  <Card.Description>
                  </Card.Description>
                </Card.Content>
              </Card>)
            }
          </Card.Group>
        </Container>
      <Grid.Column>
    </Grid.Row>
    <Grid.Row>
    </Grid.Row>
    </Grid>
        );
    }
}



export default DonateForm