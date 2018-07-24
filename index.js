import { AppRegistry } from 'react-native';
import App from './App';
// import Apps from './src/index'
import Apps from './src/index'
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDswKggKCbNBHJAS3L0IG0yhBlL2ARUKGo",
    authDomain: "sugarandspice-34c66.firebaseapp.com",
    databaseURL: "https://sugarandspice-34c66.firebaseio.com",
    projectId: "sugarandspice-34c66",
    storageBucket: "sugarandspice-34c66.appspot.com",
    messagingSenderId: "925829288265"
  };
  firebase.initializeApp(config);

console.disableYellowBox=true;
AppRegistry.registerComponent('sugarandspice', () => Apps);