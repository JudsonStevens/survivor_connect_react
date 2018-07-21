import React, { Component } from 'react';
import './Layout.css';
import { Grid } from 'semantic-ui-react';

class Layout extends Component {
  render() {
    return (
      <Grid centered container>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row stretched centered>
          <Grid.Column id="inset-column">
            <div className="Center">
              {this.props.center}
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Layout