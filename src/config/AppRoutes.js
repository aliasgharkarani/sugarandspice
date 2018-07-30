import React from 'react'

// import {
//   App,
//   Signup
// } from './../components/index';
import Signin from './../container/Signin/index';
import Signup from './../container/Signup/index';
import { StackNavigator, DrawerNavigator, NavigationActions } from "react-navigation";
// import history from '../components/History'

const NavigationApp = StackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null,
    }
  },
  Signin: {
    screen: Signin,
    navigationOptions: {
      header: null,
    }
  },
}
)

export default NavigationApp;