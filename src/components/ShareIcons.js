import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
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
      <Container>
        <div className='share-icons-div'>
          <h2>Share Survivor Connect</h2>
          <TwitterShareButton url={shareUrl} title={twitterTitle} hashtag={via}>
            <TwitterIcon className='twitter' size={92} round={false} />
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl} title={title} quote={quote}>
            <FacebookIcon className='facebook' size={92} round={false} />
          </FacebookShareButton>
        </div>
        <div className="share-blurb">
          <p>Use the icons above to tell your friends about Survivor Connect.</p> 
          <p>By sharing our app, you're helping us reach more survivors and more service providers.</p>
          <p>Thank you!</p>
        </div>
      </Container>
    )
  }
}

export default ShareIcons