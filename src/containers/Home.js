import React, {Component} from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {navButtons, onNavigatorEvent} from '../utils/nav'
import * as mainActions from '../actions/main'
import * as ssActions from '../actions/scoreSheet'
//import * as theme from '../theme'
import * as sc from '../utils/scoreCalculator'
import {textStyle} from '../config'

class Home extends Component {
  static navigatorButtons = navButtons
  componentWillMount(){
    this.props.mainActions.set({navigator: this.props.navigator})
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this));
  }
  _addScore(score: string){
    const {users} = this.props.scoreSheet
    const scoreSheet = sc.addScore(users[0].scoreSheet, score)
    const newUsers = users.map(u=>({
      ...u, scoreSheet
    }))
    this.props.ssActions.set({users: newUsers})
  }
  _removeScore(){
    const {users} = this.props.scoreSheet
    const scoreSheet = sc.undo(users[0].scoreSheet)
    const newUsers = users.map(u=>({
      ...u, scoreSheet
    }))
    this.props.ssActions.set({users: newUsers})
  }
  _renderRow(row, rowId){
    const isFirstLine = row.preTotal === undefined
    const rowTotal = row.scores.filter(s=>s).reduce((a,n)=>a+sc.scoreToVal(n),0)
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
      <View style={styles.flex}>
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
        <View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('X')}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('10')}>
              <Text style={styles.buttonText}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>this._addScore('M')}>
              <Text style={styles.buttonText}>M</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={()=>this._removeScore()}>
              <Text style={styles.buttonText}>undo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
, button: {
    flex: 1
  , paddingTop: 10
  , paddingBottom: 10
  , marginRight: 4
  , marginBottom: 4
  , backgroundColor: '#eee'
  , shadowColor: '#0005'
  , shadowOffset: {width: 1, height: 1}
  , shadowRadius: 5
  , shadowOpacity: 1
  , elevation: 5
  }
, buttonLine: {
    flexDirection: 'row'
  , paddingLeft: 4
  }
, buttonText: {
    ...textStyle
  , textAlign: 'center'
  }
})
styles.totalBoxText = StyleSheet.flatten([styles.boxText, styles.totalBox])
styles.subTotalBoxText = StyleSheet.flatten([styles.boxText, {flex: 1.5}])

export default connect(state=>({
  main: state.main
, scoreSheet: state.scoreSheet
}), dispatch=>({
  mainActions: bindActionCreators(mainActions, dispatch)
, ssActions: bindActionCreators(ssActions, dispatch)
}))(Home)
