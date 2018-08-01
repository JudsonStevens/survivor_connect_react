import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import '../css/ComingSoon.css'

class ComingSoon extends Component {
  render() {
    return (
      <div class="coming-soon-div">
        <Grid centered container>
          <Grid.Row centered>
            <Grid.Column id="inset-column" className='coming-soon-text'>
            <h2>This feature will be added soon!</h2>
            <p>Thank you for your patience.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ComingSoon