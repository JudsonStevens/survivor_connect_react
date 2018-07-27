import React, { Component } from 'react';
import { Container, Header, Grid, Card } from 'semantic-ui-react';
import '../css/SearchResults.css'

class SearchResults extends Component {
  render() {
    return (
      <div className="results-body-div">
        <Grid centered container>
          <Grid.Row stretched centered>
            <Grid.Column id="inset-column">
              <Container id="results-container">
                <Header id="result-header">
                  Search Results
                </Header>
                <Card.Group>
                  {
                    this.props.location.state.info.map((info) => 
                    <Card href={"/profile/" + info.email.split('@')[0]}>
                      <Card.Content>
                        <Card.Header>
                          {info.name}
                        </Card.Header>
                        <Card.Meta>
                          {info.address}
                        </Card.Meta>
                        <Card.Description>
                          {info.bio_info}
                        </Card.Description>
                        <br>
                        </br>
                        <Card.Content extra>
                          {info.phone_number}
                          <br />
                          {info.email}
                        </Card.Content>
                      </Card.Content>    
                    </Card>)
                  }
                </Card.Group>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SearchResults