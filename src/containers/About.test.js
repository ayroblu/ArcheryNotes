import 'react-native'
import React from 'react'
import About from './About'
jest.mock('react-native-version-number', ()=>({
  appVersion: '1'
, buildVersion: '1.1'
}))

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', ()=>{
  const props = {
    navigator: {
      setTitle(){
        console.log('set title called')
      }
    }
  }
  const tree = renderer.create(
    <About {...props} />
  )
})
