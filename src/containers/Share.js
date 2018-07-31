import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ShareIcons from '../components/ShareIcons'
import '../css/Share.css'

class Share extends Component {
  render() {
    return (
      <span className="share-page">
        <Grid centered Container>
          <Grid.Row stretched centered>
            <Grid.Column id='inset-column'>
              <ShareIcons />
            </Grid.Column>
          </Grid.Row>
        </Grid>      
      </span>
    )
  }
}

export default Share