import React from 'react'

import PersonForm from './PersonForm'
import PersonList from './PersonList'

export default class PeoplePage extends React.Component {
  render () {
    return React.DOM.div({},
        <PersonList people={this.props.people} />,
        <PersonForm />
    )
  }
}
