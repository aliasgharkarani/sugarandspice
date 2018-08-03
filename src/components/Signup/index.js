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
      accountType:"user",
      email: "",
      password: "",
    }

    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser)
      this.props.navigation.navigate("Main")
    }
    else{
      console.log("firebase.auth().currentUser",firebase.auth().currentUser)
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
      accountType:this.state.accountType,
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
      <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled">
        <View style={{  justifyContent:"center",height: width/2.5}}>
        <Image 
          style={{width:width/1.2,alignSelf:"center"}}
          resizeMode="contain"
          source={require("../../assets/logo.png") }
        />
        </View>
        <View style={{ alignSelf: "center", borderRadius: 16, height: width /0.95, width: width / 1.1, backgroundColor: "rgba(10,50,80,0.5)" }}>
        <TextInput
              underlineColorAndroid="white"
              style={{ color: "rgb(99, 212, 218)", fontWeight: "bold", height: width / 4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%", }}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder="Name"
              placeholderTextColor="#ffffff"
               /* autoCapitalize = 'none'  */
              // secureTextEntry={true}
            />
          <TextInput
            underlineColorAndroid="white"
            style={{ fontWeight: "bold",color: "rgb(99, 212, 218)", fontWeight: "bold", height: width / 4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#ffffff"
            autoCapitalize = 'none'
          />
          <TextInput
            underlineColorAndroid="white"
            style={{ color:"rgb(99, 212, 218)", height: width / 4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
            autoCapitalize = 'none'
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
    backgroundColor:"rgba(180, 212, 250,0.2)",
  },
});

export default Signup;