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
      email: ""
    }
  }
  static navigationOptions = {
    title: "App"
  };

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TextInput
              underlineColorAndroid="white"
              style={{ height: width / 10, width: "90%", borderColor: "white", fontSize: fontScale * 13, paddingRight: "2%", paddingLeft: "2%" }}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              placeholder="Email Address or Mobile Number"
              placeholderTextColor="black"
            />
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