import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import { FacebookIcon, TwitterIcon,} from 'react-share';

class ShareIcons extends Component {
  render() {
    return (
      <div className='share-icons-div'>
        <Grid centered Container>
          <Grid.Row stretched centered>
            <Grid.Column id='inset-column'>
            <TwitterIcon size={32} round={true} />
            <FacebookIcon size={32} round={true} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ShareIcons