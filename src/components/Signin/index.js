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


  signup = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    // console.log(user);
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((studentcreatedUser) => {
      // delete user.password;
      // delete user.confirmPassword;
      // alert("aaaa")
      // user.uid = studentcreatedUser.uid;
      //Database Work
      // firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)
      // alert("nbhfbh")
      // alert(this.state.password)
      // alert("Working");
        this.props.navigation.navigate("Main")
      }).catch(
        (Error) => { alert(Error.message) }
      )
    // alert(firebase.toString());
    // alert();
  }
  render() {
    // const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
        <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled">
          <View style={{ height: width / 1.6, justifyContent:"center" }}>
          <Image
          resizeMode="contain"
          style={{width:width/1.2,alignSelf:"center"}}
          source={require("../../assets/logo.png")} 
          />
          </View>
          <View style={{ alignSelf: "center", borderRadius: 16, height: width / 1.2, width: width / 1.1, backgroundColor: "rgba(10,50,80,0.5)" }}>
            <TextInput
              underlineColorAndroid="white"
              style={{ fontWeight: "bold", fontWeight: "bold", height: width / 4, width, color:"rgb(99, 212, 218)", backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              placeholder="Email"
              placeholderTextColor="#ffffff"
              autoCapitalize = 'none'
            />
            <TextInput
              underlineColorAndroid="white"
              style={{ color:"rgb(99, 212, 218)", fontWeight: "bold", height: width / 4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="#ffffff"
              secureTextEntry={true}
              autoCapitalize = 'none'
            />
            <Button style={{ height: width / 8, width: width / 1.7, backgroundColor: "purple", borderRadius: 24, alignSelf: "center", paddingLeft: "23%", marginTop: "5%" }} onPress={() => this.signup()}><Text style={{ color: "white", fontSize: fontScale * 25, fontWeight: "bold", justifyContent: "center" }}>SIGN IN</Text></Button>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: "5%" }}><Text style={{ color: "#ffffff", fontSize: fontScale * 22, fontWeight: "bold" }}>Dont Have an Account? </Text><Text onPress={() => this.props.navigation.navigate("Signup")} style={{ textDecorationLine: 'underline', color: "#ffffff", fontSize: fontScale * 22 }}>Sign Up</Text></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(180, 250, 250,0.6)",
  },
});

export default Signin;