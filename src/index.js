import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
//import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation'
//import { Navigation } from 'react-native-navigation' // now react navigation
import configureStore from './store'
import {Provider} from 'react-redux'
import * as db from './db'
//import {navigatorStyle} from './config'

import Home from './containers/Home'

db.firstTimeCheck()

const store = configureStore()

const ArcheryNotes = DrawerNavigator(StackNavigator({
  Home: { screen: Home },
}), {
  drawerWidth: 200
, drawerPosition: 'left'
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ArcheryNotes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ArcheryNotes', ()=>App)
