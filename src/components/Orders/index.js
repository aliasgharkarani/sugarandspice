import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button,Icon } from "native-base"

const { height, width, fontScale } = Dimensions.get('window');

class Orders extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' ? <View style={{ height: "2.5%", backgroundColor: "#9f80d3" }}> </View> : null}

                <View style={{
                    flexDirection: 'row',
                    width,
                    justifyContent: "space-around"

                }}>
                    {/* <View style={{ flex: 1, height: 70, backgroundColor: "#9f80d3", alignItems: "flex-start", justifyContent: "center", }} ><Button onPress={() => { this.props.navigation.navigate("PaymentsWallet"), console.warn("navigation working") }} style={{ backgroundColor: "#9f80d3", height: width / 12, width: width / 12, alignSelf: "center", elevation: 0 }}   ><Image style={{ width: "100%", height: "100%" }} source={require("../../assets/left-arrow.png")} resizeMode="contain" /></Button></View> */}
                    <TouchableOpacity activeOpacity={1} style={{ width: "20%", backgroundColor: "#8d7ecc" }} onPress={() => { this.props.navigation.navigate("Main"), console.warn("navigation working") }} >
                        <View style={{ flex: 1, height: 70, backgroundColor: "#9f80d3", alignItems: "flex-start", justifyContent: "center", }} ><Button style={{ backgroundColor: "#9f80d3", height: width / 12, width: width / 12, alignSelf: "center", elevation: 0 }} onPress={() => { this.props.navigation.navigate("Main"), console.warn("navigation working") }}  ><Icon name="md-arrow-round-back"  onPress={() => { this.props.navigation.navigate("Main"), console.warn("navigation working") }} /></Button></View>
                    </TouchableOpacity>
                    <View style={{ flex: 2, height: 70, backgroundColor: '#9f80d3', alignItems: "center", justifyContent: "center" }} ><View style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}><Text style={{ fontWeight: "bold", fontSize: fontScale * 18, color: "white" }}>Orders</Text></View></View>
                    <View style={{ flex: 1, height: 70, backgroundColor: '#9f80d3', alignItems: "center", justifyContent: "center", }} ><View style={{ width: width / 14, height: width / 14 }} ><Image style={{ height: "100%", width: "100%" }} /></View></View>
                </View>

                <View style={styles.Create_Business_Container} >
                    {/* <View style={styles.Create_Business} >
                        <TouchableOpacity style={styles.Create_Icons} >
                            <Image resizeMode="center"
                                source={require("../../assets/logo.png")} style={{ height: 25, width: 25 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Create_Text_View} >
                            <Text style={styles.Create_Text} >
                                Create a Business Page
                        </Text>
                        </TouchableOpacity>
                    </View> */}

                  
                    <CardItem style={styles.CardItem}>
                        <Left>
                            <Thumbnail
                                style={styles.Thumbnail}
                                square source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.SqFFRAB4rmsWQgWw6iP-lAHaLH&pid=15.1&P=0&w=300&h=300' }} />
                            <Body>
                                <Text>Biryani</Text>
                                <Text>3</Text>
                                {/* <View style={styles.stars}>
                                    <Icons name="star" size={15} color="#a581d5" />
                                    <Icons name="star" size={15} color="#a581d5" />
                                    <Icons name="star" size={15} color="#a581d5" />
                                    <Icons name="star" size={15} color="#a581d5" />
                                    <Icons name="star" size={15} color="#a581d5" />
                                    <Text style={[styles.textStyle, { marginLeft: 3, marginTop: -3 }]} >
                                        (4.0)
                                             </Text>
                                </View> */}
                            </Body>
                        </Left>
                        <Right style={{ justifyContent: "flex-end" }} >
                            <View style={styles.RightSection} >
                                <View style={styles.byOn_container} >
                                    <Text style={styles.buyOnText} >
                                       $75
                                                 </Text>
                                </View>
                                <View style={styles.sellOn_container} >
                                    <Text style={styles.sellOnText} >
                                        Amount
                                                 </Text>
                                </View>
                            </View>
                        </Right>
                    </CardItem>
                  
                    <CardItem style={styles.CardItem}>
                    <Left>
                        <Thumbnail
                            style={styles.Thumbnail}
                            square source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.SqFFRAB4rmsWQgWw6iP-lAHaLH&pid=15.1&P=0&w=300&h=300' }} />
                        <Body>
                            <Text>Tiqa Boti</Text>
                            <Text>3</Text>
                            {/* <View style={styles.stars}>
                                <Icons name="star" size={15} color="#a581d5" />
                                <Icons name="star" size={15} color="#a581d5" />
                                <Icons name="star" size={15} color="#a581d5" />
                                <Icons name="star" size={15} color="#a581d5" />
                                <Icons name="star" size={15} color="#a581d5" />
                                <Text style={[styles.textStyle, { marginLeft: 3, marginTop: -3 }]} >
                                    (4.0)
                                         </Text>
                            </View> */}
                        </Body>
                    </Left>
                    <Right style={{ justifyContent: "flex-end" }} >
                        <View style={styles.RightSection} >
                            <View style={styles.byOn_container} >
                                <Text style={styles.buyOnText} >
                                   $60
                                             </Text>
                            </View>
                            <View style={styles.sellOn_container} >
                                <Text style={styles.sellOnText} >
                                    Amount
                                             </Text>
                            </View>
                        </View>
                    </Right>
                </CardItem>

                </View>

                {/* <View style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
                    <Footer style={{ position: "relative", bottom: 0, backgroundColor: "white", color: "black" }}>
                        <FooterTab style={{ backgroundColor: "white", color: "black" }}>
                            <Button style={{ padding: "5%", borderBottomWidth: 5, borderBottomColor: "#9f80d3" }} >
                                <Image resizeMode="contain" style={{ padding: 15, margin: 0, width: width / 35, height: width / 35 }} source={require("../../assets/icon6.png")} />
                            </Button>
                            <Button style={{ padding: "5%" }}>
                                <Image resizeMode="contain" style={{ padding: 15, margin: 0, width: width / 35, height: width / 35 }} source={require("../../assets/icon7.png")} />
                            </Button>
                            <Button style={{ padding: "5%" }}>
                                <Image resizeMode="contain" style={{ padding: 15, margin: 0, width: width / 35, height: width / 35 }} source={require("../../assets/icon8.png")} />
                            </Button>
                            <Button style={{ padding: "5%" }}>
                                <Image resizeMode="contain" style={{ padding: 15, margin: 0, width: width / 35, height: width / 35 }} source={require("../../assets/icon9.png")} />
                            </Button>
                            <Button style={{ padding: "5%" }}>
                                <Image resizeMode="contain" style={{ padding: 15, margin: 0, width: width / 35, height: width / 35 }} source={require("../../assets/icon10.png")} />
                            </Button>
                        </FooterTab>
                    </Footer>
                </View> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    Create_Business_Container: {
        justifyContent: "center",
        backgroundColor: '#fff',
        // borderBottomColor:"#dfdfdf",
        // borderWidth:0.5,
    },
    Create_Business: {
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "row",
        margin: 18,
    },
    Create_Icons: {
        margin: 5
    },
    Create_Text_View: {
        margin: 5,
    },
    Create_Text: {
        color: "#4e4d4d",
        fontWeight: "bold",
        fontSize: 18
    },
    Thumbnail: {
        borderRadius: 16,
        margin: 5,
        alignSelf: "flex-start",
        alignContent: "flex-start",
        height: 46,
        width: 45
    },
    stars: {
        flexDirection: "row",
    },
    RightSection: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    sellOn_container: {
        borderRadius: 5,
        borderColor: "#ad98d9",
        borderWidth: 1,
        padding: 3,
        paddingLeft: 8,
        paddingRight: 8,
        margin: 3,
        marginRight: -5
    },
    sellOnText: {
        color: "#ad98d9",
    },
    byOn_container: {
        borderRadius: 5,
        borderColor: "#848484",
        borderWidth: 1,
        padding: 3,
        paddingLeft: 8,
        paddingRight: 8,
        margin: 3
    },
    buyOnText: {
        color: "#848484",
    },
    CardItem: {
        elevation: 0,
        borderBottomColor: "#fff",
        borderTopWidth: 2,
        borderTopColor: "#f2f2f2"
    }
});

export default Orders;