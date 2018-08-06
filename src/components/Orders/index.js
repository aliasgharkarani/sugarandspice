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
import { Content, Container, Header, List, ListItem, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon } from "native-base"
import Headers from '../Header'
import * as firebase from 'firebase';
const { height, width, fontScale } = Dimensions.get('window');

class Orders extends Component {
    constructor(props) {
        super(props);
firebase.database().ref('Products').once("value").then(success=>{
alert(success.val());
})
.catch(err=>{
    alert(err)
}
)

    
    }
    render() {

        return (
            <Container>
                <Headers navigation={this.props.navigation} />
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/defaultuser.png?alt=media&token=666d2446-cc82-4023-870c-994a2a8fcc6d' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },

});

export default Orders;