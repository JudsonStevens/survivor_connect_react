import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { FacebookShareButton, TwitterShareButton,} from 'react-share';

class ShareIcons extends Component {
  render() {
    return (
      <div className='share-icons-div'>
        <Grid centered Container>
          <Grid.Row stretched centered>
            <Grid.Column id='inset-column'>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ShareIcons