import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DonateForm from './DonateForm'

class Donate extends Component {
    render() {
        return <DonateForm />
    }
}
ReactDOM.render(<DonateForm />, document.getElementById('root'));
export default Donate