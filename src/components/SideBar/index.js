import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Footer, Drawer, FooterTab, Button, Icon, List, ListItem } from 'native-base';
import * as firebase from 'firebase';
import ImagePicker from "react-native-image-picker"
import RNFetchBlob from 'react-native-fetch-blob'
const { height, width, fontScale, } = Dimensions.get('window');

var options = {
    title: 'Select Image',
    // customButtons: [
    //     { name: 'fb', title: 'Choose Photo from Facebook' },
    // ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};



const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob




class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Ali Asghar Karani",
            accountType: "user",
            // check:firebase.database().ref(`user/${firebase.auth().currentUser.uid}/`).once("value"),
            //         firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).update({imagelink})
            avatarSource:"content://media/external/images/media/2958"
            // avatarSource:valu,
        }
        
        firebase.database().ref("user/" + firebase.auth().currentUser.uid).once("value")
        .then(success => {
            console.log(success.val())
            success.val().imagelink ? this.setState({ username: success.val().name , avatarSource:success.val().imagelink ,accountType:success.val().accountType }): this.setState({ username: success.val().name,accountType:success.val().accountType})
            //   if(success.val().imagelink=null){
                // this.setState({ avatarSource:"content://media/external/images/media/2958", })                
            //   }
            //   else{
            //     this.setState({ avatarSource: success.val().imagelink })                
            //   }
        }).catch(err => {
            console.log(err)
        })
        
        // firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).once("value")        
        // .then(success => {
        //     console.log(success.val())
        //     this.setState({ avatarSource: success.val().imagelink })
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    ComponentWillMount(){
        console.log("cbxbvzbx");
    }
    
    uploadImage = (uri, imageName, mime = 'image/jpg') => {
        console.log("1");
        return new Promise((resolve, reject) => {
            console.log("2");
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            let uploadBlob = null
            const imageRef = firebase.storage().ref('posts').child(imageName)
            fs.readFile(uploadUri, 'base64')
            .then((data) => {
                console.log("then 1")
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                console.log("then 2")
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                console.log("then 3")                    
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                console.log("then 4")                    
                resolve(url)
            })
            .catch((error) => {
                console.log("cath")                    
                reject(error)
            })
        })
    }  //        firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)    
    uploadonFirebase=(imagelink)=>{
        firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).update({imagelink})
    }
    start = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                
                this.setState({
                    avatarSource: response.uri
                });
            }
            console.log(this.state.avatarSource)
            this.uploadonFirebase(this.state.avatarSource)
            this.uploadImage(response.uri,firebase.auth().currentUser.uid);
        });
    }
    
    // ComponentWillMount(){
    //     alert("mount");
    // }
    render() {
        closeDrawer = () => {
            this.drawer._root.close()
          };
        return (
            <View style={styles.container}>
                <View style={{ width, height: width / 4, backgroundColor: "#9f80d3", flexDirection: "row" }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.start()} style={{ width:width/5, height:width/5, alignSelf: "center", marginLeft: "5%", borderRadius: 100, overflow:"hidden",backgroundColor:"rgb(180,180,180)" }}>
                        <Image
                        onPress={() => this.start()}
                            /* resizeMode="contain"  */
                            /* source={require("../../assets/defaultuser.png")}*/ 
                            source={{uri:this.state.avatarSource}}
                             style={{height:width/5,width:width/5}} 
                            /> 
                    </TouchableOpacity>
                    <Text style={{ color:"blue", alignSelf: "center", fontSize: fontScale * 25, marginLeft: "5%" }}>{this.state.username}</Text>
                </View>

                <TouchableOpacity activeOpacity={1} style={{ width, height: width / 4,borderBottomColor:"blue",borderBottomWidth:1, backgroundColor: "rgb(180,180,180)", flexDirection: "row" }} onPress={()=>{ this.props.navigation.navigate("Main")}} >
                    <View style={{ alignSelf: "center", marginLeft: "5%" }}>
                        <Icon name="ios-home" />
                    </View>
                    <Text  style={{ color: "red", alignSelf: "center", fontSize: fontScale * 25, marginLeft: "5%" }}>Home</Text>
                </TouchableOpacity>
        {/* firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).update({imagelink}) */}
                  
                  {/* { firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).once} */}
                <TouchableOpacity activeOpacity={1} style={{ width, height: width / 4 ,backgroundColor: "rgb(180,180,180)", flexDirection: "row" }}  onPress={()=>{ this.state.accountType=="user"? this.props.navigation.navigate("Orders"):this.props.navigation.navigate("Addproducts")}} >
                    <View style={{ alignSelf: "center", marginLeft: "5%" }}>
                        <Icon name="ios-basket" />
                    </View>
                    <Text  style={{ color: "red", alignSelf: "center", fontSize: fontScale * 25, marginLeft: "5%" }}>{this.state.accountType=="user"?"Orders":"Add Products"}</Text>
                </TouchableOpacity>

                <Text style={{backgroundColor:"green",color:"white",textAlign:"center",fontSize:fontScale*30,fontWeight:"bold",flex:1}} onPress={() => firebase.auth().signOut().then(s => {
                    this.props.navigation.navigate("Signup")
                })}>Logout</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        //   width:width/4,
    },
    textContent: {
        fontSize: 20,
        color: 'red',
    },
    uploadAvatar:{
        height:60,width:60
    }
});

export default SideBar;
