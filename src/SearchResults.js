import React, { Component } from 'react';
import { Container, Header, Grid, Card } from 'semantic-ui-react';
import './SearchResults.css'
// import SearchField from './SearchField'

class SearchResults extends Component {
  render() {
    return (
      <div class="results-body-div">
        <Grid centered container>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row stretched centered>
            <Grid.Column id="inset-column">
              {/* <SearchField onSearchComplete={this.searchComplete}/> */}
              <Container>
                <Header id="result-header">
                  Search Results
                </Header>
                <Card.Group>
                  {
                    this.props.location.state.info.map((info) => 
                    <Card>
                      <Card.Content>
                        <Card.Header>
                          {info.name}
                        </Card.Header>
                        <Card.Meta>
                          {info.street_address + ", " + info.city}
                        </Card.Meta>
                        <Card.Description>
                          {info.bio_info}
                        </Card.Description>
                        <br>
                        </br>
                        <Card.Content extra>
                          <p>Reach out to this lawyer here</p>
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