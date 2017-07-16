import { SET, RESET } from '../types/scoreSheet'

const initialState = {
  users: [{
    name: 'first'
  , scoreSheet: [{
      scores: [9,8,7,6,5,4]
    }, {
      scores: [9,8,7,6,5,null]
    , preTotal: 39
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
