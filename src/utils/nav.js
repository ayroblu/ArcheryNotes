export const navButtons = {
  leftButtons: [
    {
      title: 'Menu', // for a textual button, provide the button title (label)
      //icon: require('../../img/navicon_edit.png'), // if you want an image button
      id: 'sideMenu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
      buttonFontSize: 18, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
      buttonFontWeight: '300', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
    },
  ]
}
export function onNavigatorEvent(event){ // this is the onPress handler for the two buttons together
  if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
    if (event.id == 'sideMenu') { // this is the same id field from the static navigatorButtons definition
      this.props.navigator.toggleDrawer()
    }
  }
}
