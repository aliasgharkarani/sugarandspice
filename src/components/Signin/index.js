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

class Signin extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
    this.state = {
      email: "",
      password: "",
    }
    // this.signup = this.signup.bind(this);
  }

  static navigationOptions = {
    title: "App"
  };
  // console.log();
  signup = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((studentcreatedUser) => {
        // delete user.password;
        // delete user.confirmPassword;
        // user.uid = studentcreatedUser.uid;
        firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)
        // alert("nbhfbh")
        // alert(this.state.password)
      }).catch(
      (Error) => { alert(Error.message) }
      )
    // alert("cbvbvb");
    // alert();
  }
  render() {
    // const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ height: width / 1.3}}>
          </View>
          <View style={{ alignSelf: "center", borderRadius:16, height: width / 1.2, width: width / 1.1, backgroundColor: "red" }}>
            <TextInput
              underlineColorAndroid="white"
              style={{ fontWeight: "bold", fontWeight: "bold", height: width /4, width, color: "#ffffff", backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              placeholder="Email"
              placeholderTextColor="#ffffff"
            />
            <TextInput
              underlineColorAndroid="white"
              style={{ color: "#ffffff", fontWeight: "bold", height: width /4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="#ffffff"
              secureTextEntry={true}
            />
            <Button style={{ height: width / 8, width: width /1.7, backgroundColor: "purple", borderRadius: 24, alignSelf: "center", paddingLeft: "23%", marginTop: "5%" }} onPress={() => this.signup()}><Text style={{ color: "white", fontSize: fontScale * 25, fontWeight: "bold", justifyContent: "center" }}>SIGN IN</Text></Button>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: "5%" }}><Text style={{ color: "#ffffff", fontSize: fontScale * 22, fontWeight: "bold" }}>Dont Have an Account? </Text><Text style={{ textDecorationLine: 'underline', color: "#ffffff", fontSize: fontScale * 22 }}>Sign Up</Text></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

export default Signin;