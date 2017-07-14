//import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation'
import { Navigation } from 'react-native-navigation'
import configureStore from './store'
import {Provider} from 'react-redux'
import * as db from './db'
import {navigatorStyle} from './config'

import About from './containers/About'
import Drawer from './containers/Drawer'
import DrawerDebug from './containers/DrawerDebug'
import Home from './containers/Home'

db.firstTimeCheck()

const store = configureStore()

// register all screens of the app (including internal ones)
Navigation.registerComponent('arn.About', ()=>About, store, Provider);
Navigation.registerComponent('arn.Drawer', ()=>Drawer, store, Provider);
Navigation.registerComponent('arn.DrawerDebug', ()=>DrawerDebug, store, Provider);
Navigation.registerComponent('arn.Home', ()=>Home, store, Provider);

// start the app
const screen = {
  screen: 'arn.Home'
, title: 'Home'
, navigatorStyle
}
Navigation.startSingleScreenApp({
  screen,
  drawer: {
    left: {
      screen: 'arn.Drawer'
    }
  , right: {
      screen: 'arn.DrawerDebug'
    }
  },
  appStyle: {
    orientation: 'portrait' //'auto', 'landscape', 'portrait'
  },
})
