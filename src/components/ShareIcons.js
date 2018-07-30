import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import { FacebookIcon, TwitterIcon,} from 'react-share';
import '../css/Share.css'

class ShareIcons extends Component {
  render() {
    return (
      <div className='share-icons-div'>
        <h2>Share Survivor Connect</h2>
        <TwitterIcon className='twitter' size={92} round={false} />
        <FacebookIcon className='facebook' size={92} round={false} />
      </div>
    )
  }
}

export default ShareIcons