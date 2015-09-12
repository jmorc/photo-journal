import React from 'react'

import NotesPage from './NotesPage'
import PeoplePage from './PeoplePage'
import { store, emitter, STORE_CHANGED } from './store'

const PEOPLE_PAGE = 'PEOPLE_PAGE'
const NOTES_PAGE = 'NOTES_PAGE'

export default class Application extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      displayedPage: PEOPLE_PAGE,
      store: store,
    }
    this.updateStore = () => this.setState({ store: store })
  }

  componentWillMount () {
    emitter.on(STORE_CHANGED, this.updateStore)
  }

  componentDidUnmount () {
    emitter.off(STORE_CHANGED, this.updateStore)
  }

  switchPageTo (page) {
    this.setState({ displayedPage: page })
  }

  render () {
    const pageContent = {
      PEOPLE_PAGE: <PeoplePage people={this.state.store.people} />,
      NOTES_PAGE: <NotesPage store={this.state.store} />,
    }[this.state.displayedPage]

    return (
      <div>
        <div>
          <a onClick={e => this.switchPageTo(PEOPLE_PAGE)}>People</a>
          <a onClick={e => this.switchPageTo(NOTES_PAGE)}>Notes</a>
        </div>
        <div>{pageContent}</div>
      </div>
    )
  }
}
