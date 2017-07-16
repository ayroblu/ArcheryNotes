import React, {Component} from 'react'
import {
  View,
  ScrollView,
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
  _renderRow(row, rowId){
    const isFirstLine = row.preTotal === undefined
    const rowTotal = row.scores.filter(s=>s).reduce((a,n)=>a+n,0)
    return (
      <View style={styles.line} key={rowId}>
        {row.scores.map((r,i)=>(
          <Text style={styles.boxText} key={i}>
            {r}
          </Text>
        ))}
        <Text style={styles.subTotalBoxText}>
          {rowTotal}
        </Text>
        <Text style={isFirstLine ? styles.totalBox : styles.totalBoxText}>
          {!isFirstLine && (row.preTotal + rowTotal)}
        </Text>
      </View>
    )
  }
  render() {
    const {text} = this.props.main
    const {users} = this.props.scoreSheet
    const rows = users[0].scoreSheet
    return (
      <ScrollView style={styles.flex} contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>Archery Notes</Text>
        <Text style={styles.text}>Probably should add a score card here</Text>
        <View style={styles.scoreSheet}>
          {rows.map((r,i)=>(
            this._renderRow(r,i)
          ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
, flex: {
    flex: 1
  }
, text: {
    ...textStyle
  }
, scoreSheet: {
    marginTop: 10
  , alignSelf: 'stretch'
  }
, line: {
    flexDirection: 'row'
  , marginBottom: 4
  }
, boxText: {
    ...textStyle
  , flex: 1
  , textAlign: 'center'
  , backgroundColor: '#ddd'
  , marginLeft: 4
  }
, totalBox: {
    marginLeft: 4
  , marginRight: 4
  , flex: 2
  }
})
styles.totalBoxText = StyleSheet.flatten([styles.boxText, styles.totalBox])
styles.subTotalBoxText = StyleSheet.flatten([styles.boxText, {flex: 1.5}])

export default connect(state=>({
  main: state.main
, scoreSheet: state.scoreSheet
}), dispatch=>({
  mainActions: bindActionCreators(mainActions, dispatch)
}))(Home)
