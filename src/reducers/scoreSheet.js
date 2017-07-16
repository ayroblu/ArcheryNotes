import { SET, RESET } from '../types/scoreSheet'

const initialState = {
  users: [{
    name: 'first'
  , scoreSheet: [{
      scores: [null, null, null, null, null, null]
    }]
  }]
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SET:
      return {...state, ...action.payload}
    case RESET:
      return {...initialState, ...action.payload}
    default:
      return state
  }
}
