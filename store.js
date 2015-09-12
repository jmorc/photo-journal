import ee from 'event-emitter'

export const store = {
  people: {
    'person-0': {
      firstName: 'Donald',
      lastName: 'Duck',
      email: 'donald@gmail.com',
    },
  },
  notes: {

  },
}

window.store = store

export const emitter = ee({})
export const STORE_CHANGED = 'STORE_CHANGED'

export const addPerson = (id, fields) => {
  store.people[id] = fields
  emitter.emit(STORE_CHANGED)
}

export const modifyPerson = addPerson

export const getPersonById = id => {
  return store.people[id]
}
