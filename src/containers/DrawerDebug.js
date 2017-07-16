// @flow
import React, { Component } from 'react'
import {connect} from 'react-redux'

import DevTools from '../components/DevTools'

class DrawerDebug extends Component {
  render() {
    return (
      <DevTools />
    )
  }
}

export default connect(state=>({
  main: state.main
}))(DrawerDebug)
