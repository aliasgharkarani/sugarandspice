import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableNativeFeedback,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
// import { CheckBox } from 'react-native-elements';
import { Button, CheckBox, ListItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import * as firebase from 'firebase';
const { height, width, fontScale } = Dimensions.get('window');

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
    this.state = {
      email: "",
      password: "",
    }
    this.signup = this.signup.bind(this);
  }

  static navigationOptions = {
    title: "App"
  };
  signup = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((studentcreatedUser) => {
        // delete user.password;
        // delete user.confirmPassword;
        user.uid = studentcreatedUser.uid;
        firebase.database().ref(`users/students/${user.uid}`).set(user)
      })
    alert();
  }
  render() {
    // const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TextInput
              underlineColorAndroid="white"
              style={{ height: width / 10, width: "70%", backgroundColor: "#ffffff", borderTopLeftRadius: 12, borderTopRightRadius: 12, fontSize: fontScale * 13, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              placeholder="Email"
              placeholderTextColor="black"
            />
            <TextInput
              underlineColorAndroid="white"
              style={{ height: width / 10, width: "70%", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: "#ffffff", borderColor: "red", borderTopWidth: 0.5, fontSize: fontScale * 13, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="black"
            />
            <Button onPress={() => this.signup}><Text>Click</Text></Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a481d5',
  },
  imageDiv: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: width / 12,
    // backgroundColor:"red"
  },
  buttonDiv: {
    flexDirection: 'row',
    bottom: 0,
    marginTop: 0,
  },
  loginButton: {
    width: "50%",
    height: height / 12,
    color: "#9f80d3",
    backgroundColor: "white"
  },
  loginButton1: {
    width: "50%",
    height: height / 12,
    borderRightWidth: 0.5,
    borderColor: "grey",
    color: "#9f80d3",
    backgroundColor: "white"
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#a481d5'
  }

});

export default App;