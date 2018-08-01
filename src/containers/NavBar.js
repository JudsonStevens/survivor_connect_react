import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../css/NavBar.css'
import { API_Url } from '../api/APIUrls'

export default class NavBar extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      name: null,
      jwt:  sessionStorage.getItem('jwt'),
      currentUser: sessionStorage.getItem('currentUser'),
      loggedIn: false
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentWillMount() {
    // if(this.state.currentUser) {
    // fetch(`${API_Url}/api/users/${this.state.currentUser.split('@')[0]}`, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${this.state.jwt}`
    //   }
    // })
    // .then( response => response.json() )
    // .then( parsedResponse => 
    //   this.setState( () => ( 
    //       {  
    //         name: parsedResponse      
    //       }
    //     ) 
    //   ) 
    // )};
  }

  isLoggedIn = () => {
    if(this.state.currentUser !== "null") {
        this.setState({
          loggedIn: true
      })
    }
  }
  
  render() {
    const { activeItem } = this.state
    const userLoggedIn = this.isLoggedIn()

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
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
          href='/contact'
        >
          Contact Survivor Connect
        </Menu.Item>
        <Menu.Item
          name='Donate'
          active={activeItem === 'Donate'}
          onClick={this.handleItemClick}
          href='/donate'
        >
          Donate
        </Menu.Item>
        {
          this.state.jwt && userLoggedIn &&
          <Menu.Item
            name='Profile'
            active={activeItem === 'Profile'}
            onClick={this.handleItemClick}
            href={"/profile/" + this.state.currentUser.split('@')[0]}
          >
          Profile
          </Menu.Item>
        }
        {
          this.state.jwt && userLoggedIn &&
          <Menu.Item
            name='Logout'
            active={activeItem === 'Logout'}
            onClick={this.handleItemClick}
            href='/logout'
          >
          Logout
          </Menu.Item>
        }
        {
          this.state.currentUser == "null" &&
          <Menu.Item
            name='Login'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
            href='/login'
          >
          Login
          </Menu.Item>
        }
      </Menu>
    )
  }
}