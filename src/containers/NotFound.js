import React, { Component } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../css/NotFound.css'

class NotFound extends Component {
  render () {
    return (
      <div id="not-found-div">
        <Container text textAlign='center'>
          <h1>404: Not found</h1>
          <Button as={Link} to='/'>Back to home</Button>
        </Container>
      </div>
    )
  }
}

export default NotFound