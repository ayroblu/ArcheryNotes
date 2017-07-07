//import { Navigation } from 'react-native-navigation' // now react navigation
import configureStore from './store'
//import {Provider} from 'react-redux'
import * as db from './db'
//import {navigatorStyle} from './config'

const store = configureStore()
db.firstTimeCheck()

import './containers/Init'
