import 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import Drawer from './Drawer'
import configureStore from '../store'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const store = configureStore()

it('renders correctly', ()=>{
  const props = {
    navigator: {
      push(){}
    , toggleDrawer(){}
    , resetTo(){}
    }
  }
  const tree = renderer.create(
    <Provider store={store}>
      <Drawer {...props} />
    </Provider>
  )
  expect(tree).toMatchSnapshot()
})
