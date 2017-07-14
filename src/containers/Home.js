// @flow
import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DevTools from '../components/DevTools'
import {navButtons, onNavigatorEvent} from '../utils/nav'
import * as mainActions from '../actions/main'
import * as theme from '../theme'
import {textStyle} from '../config'

class Home extends Component {
  static navigatorButtons = navButtons
  componentWillMount(){
    this.props.mainActions.set({navigator: this.props.navigator})
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this));
  }
  render() {
    const {text} = this.props.main
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>Archery Notes</Text>
        <Text style={styles.text}>Probably should add a score card here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  , flex: 1
  }
, text: {
    ...textStyle
  }
})

export default connect(state=>({
  main: state.main
}), dispatch=>({
  mainActions: bindActionCreators(mainActions, dispatch)
}))(Home)
