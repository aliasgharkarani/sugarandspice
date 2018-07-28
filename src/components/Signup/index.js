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

class SignUps extends Component {
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
      email : this.state.email,
      password : this.state.password
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
        (Error)=>{ alert(Error.message)}
      )
      // alert("cbvbvb");
      // alert();
  }
  render() {
    // const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{height:width/1.2}}>
            </View>
          <View style={{alignItems:"center",height:width/2,flex:1,justifyContent:"flex-end"}}>
            <TextInput
              underlineColorAndroid="white"
              style={{ height: width /8, width: "70%", backgroundColor: "#ffffff", borderTopLeftRadius: 12, borderTopRightRadius: 12, fontSize: fontScale * 13, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              placeholder="Email"
              placeholderTextColor="black"
            />
            <TextInput
              underlineColorAndroid="white"
              style={{ height: width /8, width: "70%", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: "#ffffff", borderColor: "red", borderTopWidth:1, fontSize: fontScale * 13, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={true}
            />
            <Button style={{alignSelf:"center",alignContent:"center",width:width/5,backgroundColor:"purple",paddingLeft:"5%"}} onPress={() => this.signup( )}><Text style={{color:"white",fontSize:fontScale*20,fontWeight:"bold"}}>Click</Text></Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"red",
  },
});

export default SignUps;