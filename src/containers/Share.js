import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ShareIcons from '../components/ShareIcons'
import '../css/Share.css'

class Share extends Component {
  render() {
    return (
      <Container className="share-page">
      <ShareIcons />
      </Container>
    )
  }
}

export default Share