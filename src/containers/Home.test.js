import 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import Home from './Home'
import configureStore from '../store'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const store = configureStore()

it('renders correctly', ()=>{
  const props = {
    navigator: {
      setOnNavigatorEvent(){}
    }
  }
  const tree = renderer.create(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  )
  expect(tree).toMatchSnapshot()
})
