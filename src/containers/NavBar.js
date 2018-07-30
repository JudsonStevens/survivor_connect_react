import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
      <Menu stackable>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          href='/'
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='Register'
          active={activeItem === 'Register'}
          onClick={this.handleItemClick}
          href='/user_register'
        >
          Register as a Lawyer
        </Menu.Item>
        <Menu.Item
          name='Support'
          active={activeItem === 'Support'}
          onClick={this.handleItemClick}
          href='/support'
        >
          Support Survivor Connect
        </Menu.Item>
      </Menu>
    )
  }
}