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

class Signup extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
    this.state = {
      name:"",
      email: "",
      password: "",
    }
    // this.signup = this.signup.bind(this);
  }

  // static navigationOptions = {
  //   title: "App"
  // };
  // console.log();
  signup = () => {
    let user = {
      name : this.state.name,
      email : this.state.email,
      password : this.state.password
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((studentcreatedUser) => {
        // delete user.password;
        // delete user.confirmPassword;
        // user.uid = studentcreatedUser.uid;
        firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)
        this.props.navigation.navigate("Signin")
        // alert("nbhfbh")
        // alert(this.state.password)
      }).catch(
        (Error)=>{ alert(Error.message)}
      )
      // alert("cbvbvb");
      // alert();
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{ height: width/2.5}}>
        </View>
        <View style={{ alignSelf: "center", borderRadius: 16, height: width /0.95, width: width / 1.1, backgroundColor: "red" }}>
        <TextInput
              underlineColorAndroid="white"
              style={{ color: "#ffffff", fontWeight: "bold", height: width / 4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder="Name"
              placeholderTextColor="#ffffff"
              // secureTextEntry={true}
            />
          <TextInput
            underlineColorAndroid="white"
            style={{ fontWeight: "bold", fontWeight: "bold", height: width / 4, width, color: "#ffffff", backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#ffffff"
          />
          <TextInput
            underlineColorAndroid="white"
            style={{ color: "#ffffff", fontWeight: "bold", height: width / 4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
          />
          <Button onPress={ ()=>this.signup() } style={{ height: width / 8, width: width / 1.7, backgroundColor: "purple", borderRadius: 24, alignSelf: "center", paddingLeft: "23%", marginTop: "5%" }} ><Text style={{ color: "white", fontSize: fontScale * 25, fontWeight: "bold", justifyContent: "center" }}>SIGN UP</Text></Button>
          <View style={{ flexDirection: "row", alignSelf: "center", marginTop: "5%" }}><Text style={{ color: "#ffffff", fontSize: fontScale * 22, fontWeight: "bold" }}>Already have an Account? </Text><Text onPress={() => this.props.navigation.navigate("Signin")} style={{ textDecorationLine: 'underline', color: "#ffffff", fontSize: fontScale * 22 }}>Log In</Text></View>
        </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"purple",
  },
});

export default Signup;