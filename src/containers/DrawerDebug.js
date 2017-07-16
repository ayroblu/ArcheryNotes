// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DevTools from '../components/DevTools'
import {textStyle} from '../config'
import * as theme from '../theme'

class DrawerDebug extends Component {
  render() {
    return (
      <DevTools />
    )
  }
}

const styles = StyleSheet.create({
})

export default connect(state=>({
  main: state.main
}))(DrawerDebug)
