import React from 'react'
import {createDevTools} from 'redux-devtools'
import LogMonitor from './LogMonitor'
//import LogMonitor from 'redux-devtools-log-monitor'
//import DockMonitor from 'redux-devtools-dock-monitor'

/**
 * Create the DevTools component and export it.
 */
export default createDevTools(
  <LogMonitor />
//  <DockMonitor
//    toggleVisibilityKey='ctrl-h'
//    changePositionKey='ctrl-q'
//    defaultIsVisible={false}
//  >
//    <LogMonitor theme='tomorrow' />
//  </DockMonitor>
)

