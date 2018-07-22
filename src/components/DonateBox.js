import React, { Component } from 'react';
import { Container, Header, Search } from 'semantic-ui-react'

class DonateForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 'enter amount'};

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
  }
}

handleAmountChange(event) {
  this.setState({ value: event.target.value });
}

handleSubmit(event) {
  alert('Redirecting to Paypal')
  event.preventDefault();
}

render() {
  return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Amount:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
  );
}