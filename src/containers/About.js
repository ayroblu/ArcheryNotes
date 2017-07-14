import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import VersionNumber from 'react-native-version-number'

import {textStyle} from '../config'
import * as theme from '../theme'

class About extends Component {
  componentWillMount(){
    this.props.navigator.setTitle({title:'About'})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Archery Notes App</Text>
        <Text style={styles.text}>
          Version: {VersionNumber.appVersion}, (Build: {VersionNumber.buildVersion})
        </Text>
        <Text style={styles.text}>Built by Ben Lu</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  text: {
    ...textStyle
  },
})

export default About
