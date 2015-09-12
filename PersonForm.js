import _ from 'lodash'
import React from 'react'

import { addPerson } from './store'

export default class PersonForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = { isValid: true }
  }

  handleSubmit (e) {
    e.preventDefault()
    const personData = {
      firstName: React.findDOMNode(this.refs.firstName).value,
      lastName: React.findDOMNode(this.refs.lastName).value,
      email: React.findDOMNode(this.refs.email).value,
    }
    if (_.every(personData)) {
      addPerson(_.uniqueId('person-'), personData)
      this.setState({ isValid: true })
    } else {
      this.setState({ isValid: false })
    }
  }

  render () {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        {this.state.isValid || <span>All fields are required</span>}
        <input ref='firstName' type='text' />
        <input ref='lastName' type='text' />
        <input ref='email' type='email' />
        <input type='submit' />
      </form>
    )
  }
}
