import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import { FacebookIcon, TwitterIcon, TwitterShareButton, FacebookShareButton } from 'react-share';
import '../css/Share.css'

class ShareIcons extends Component {
  render() {
    const shareUrl = 'https://survivor-connect.com';
    const title = 'Survivor Connect';
    const twitterTitle = 'Survivor Connect -- find affordable legal services'
    const quote = 'Survivor Connect exists to serve people affected by domestic violence and sexual assault.';
    const via = 'Survivor Connect exists to serve people affected by domestic violence and sexual assault.';

    return (
      <div className='share-icons-div'>
        <h2>Share Survivor Connect</h2>
        <TwitterShareButton url={shareUrl} title={twitterTitle} hashtag={via}>
          <TwitterIcon className='twitter' size={92} round={false} />
        </TwitterShareButton>
        <FacebookShareButton url={shareUrl} title={title} quote={quote}>
          <FacebookIcon className='facebook' size={92} round={false} />
        </FacebookShareButton>
      </div>
    )
  }
}

export default ShareIcons