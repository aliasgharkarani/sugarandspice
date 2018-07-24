import React from 'react'

// import {
//   App,
//   Signup
// } from './../components/index';
import {
  App,
} from './../container/index';
import { StackNavigator, DrawerNavigator, NavigationActions } from "react-navigation";
// import history from '../components/History'


const Drawer = DrawerNavigator({
  Home: {
    screen: App
  }
}, { drawerWidth: 200 })

const NavigationApp = StackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      header: null,
    }
  }
}
)

export default NavigationApp;