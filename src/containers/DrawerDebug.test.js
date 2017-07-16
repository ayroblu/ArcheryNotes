import 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import DrawerDebug from './DrawerDebug'
import configureStore from '../store'
Date.now = jest.fn(() => 1487076708000)

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const store = configureStore()

it('renders correctly', ()=>{
  const props = {
  }
  const tree = renderer.create(
    <Provider store={store}>
      <DrawerDebug {...props} />
    </Provider>
  )
  expect(tree).toMatchSnapshot()
})
