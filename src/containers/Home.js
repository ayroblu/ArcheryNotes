import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as mainActions from '../actions/main'
import * as theme from '../theme'

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <View><Text>Thing</Text></View>
    ),
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
    color: theme.text
  }
})

export default connect(state=>({
  main: state.main
}), dispatch=>({
  mainActions: bindActionCreators(mainActions, dispatch)
}))(Home)
