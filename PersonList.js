import _ from 'lodash'
import React from 'react'

import Person from './Person'
import { modifyPerson } from './store'

export default class PersonList extends React.Component {

  editPerson (id) {
    modifyPerson()
  }

  render () {
    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
        </tr>

        { _.map(this.props.people, (person, id) =>
          <tr key={id} className="person">
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td><button onClick={e => this.editPerson(id) }>Edit</button></td>
          </tr>
          )}
      </table>
    )
  }
}
