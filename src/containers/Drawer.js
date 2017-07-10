import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as db from '../db'
import * as mainActions from '../actions/main'
import * as theme from '../theme'
import {navigatorStyle} from '../config'

class Drawer extends Component {
  _goTo(screen){
    // apparently normal navigator ONLY works in android
    // https://github.com/wix/react-native-navigation/issues/1143
    const {navigator} = Platform.OS==='ios' ? this.props.user : this.props
    navigator.push({screen: `arn.${screen}`, animationType: 'slide-horizontal'})
    navigator.toggleDrawer({side: 'left'})
  }
  _resetTo(screen){
    const {navigator} = Platform.OS==='ios' ? this.props.user : this.props
    navigator.resetTo({screen: `arn.${screen}`})
    navigator.toggleDrawer({side: 'left'})
  }
  render() {
    const {username} = this.props.user
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.line} onPress={()=>this._goTo('About')}>
          <Text style={styles.lineText}>About App</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.select({ios: 20, android: 0})
  },
})

export default connect(state=>({
  user: state.user
}), dispatch=>({
  userActions: bindActionCreators(userActions, dispatch)
}))(Drawer)
