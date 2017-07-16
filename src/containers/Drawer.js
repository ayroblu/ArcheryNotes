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

import * as mainActions from '../actions/main'
import {textStyle} from '../config'
//import * as theme from '../theme'

class Drawer extends Component {
  _goTo(screen){
    // apparently normal navigator ONLY works in android
    // https://github.com/wix/react-native-navigation/issues/1143
    const {navigator} = Platform.OS==='ios' ? this.props.main : this.props
    navigator.push({screen: `arn.${screen}`, animationType: 'slide-horizontal'})
    navigator.toggleDrawer({side: 'left'})
  }
  _resetTo(screen){
    const {navigator} = Platform.OS==='ios' ? this.props.main : this.props
    navigator.resetTo({screen: `arn.${screen}`})
    navigator.toggleDrawer({side: 'left'})
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.line} onPress={()=>this._goTo('About')}>
          <Text style={styles.lineText}>About</Text>
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
  line: {
    marginLeft: 20
  , marginRight: 20
  , paddingLeft: 40
  , padding: 20
  , borderBottomWidth: 1
  , borderColor: '#ddd'
  , flexDirection: 'row'
  , alignItems: 'center'
  },
  lineText: {
    ...textStyle
  , fontSize: 20
  },
})

export default connect(state=>({
  main: state.main
}), dispatch=>({
  mainActions: bindActionCreators(mainActions, dispatch)
}))(Drawer)
