import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import ProfileInformation from '../components/ProfileInformation'
import NotFound from './NotFound'

class UserProfile extends Component {
  render() {
    let jwt = sessionStorage.getItem('jwt')
    return (
      <div className="register-body-div">
        <Grid centered container>
          <Grid.Row stretched centered>
            <Grid.Column id="inset-column">
              <ProfileInformation name={this.props.match.params.name} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default UserProfile