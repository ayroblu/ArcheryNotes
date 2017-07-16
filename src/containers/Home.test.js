import 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import Home from './Home'
import configureStore from '../store'
import * as ssActions from '../actions/scoreSheet'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const store = configureStore()

it('renders correctly', async ()=>{
  const props = {
    navigator: {
      setOnNavigatorEvent(){}
    }
  }
  store.dispatch(ssActions.set({
    users: [{
      name: 'first'
    , scoreSheet: [{
        scores: [9,8,7,6,5,4]
      }, {
        scores: [9,8,7,6,5,null]
      , preTotal: 39
      }]
    }]
  }))
  await new Promise(y=>setTimeout(y))
  const tree = renderer.create(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  )
  expect(tree).toMatchSnapshot()
})
