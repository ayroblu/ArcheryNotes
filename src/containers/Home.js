import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

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
        <Text style={styles.text}>Hello, Navigation!</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  , alignItems: 'center'
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
