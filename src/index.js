//import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation'
import { Navigation } from 'react-native-navigation'
import configureStore from './store'
import {Provider} from 'react-redux'
import * as db from './db'
import {navigatorStyle} from './config'

import Home from './containers/Home'
import Drawer from './containers/Drawer'

db.firstTimeCheck()

const store = configureStore()

// register all screens of the app (including internal ones)
Navigation.registerComponent('arn.Home', ()=>Home, store, Provider);
Navigation.registerComponent('arn.Drawer', ()=>Drawer, store, Provider);

// start the app
const settings = db.getSettings()
const screen = settings.username ? {
  screen: 'arn.Home'
, navigatorStyle
} : {
  screen: 'arn.Home'
, navigatorStyle
}
Navigation.startSingleScreenApp({
  screen,
  drawer: {
    left: {
      screen: 'arn.Drawer'
    }
  },
  appStyle: {
    orientation: 'portrait' //'auto', 'landscape', 'portrait'
  },
})
