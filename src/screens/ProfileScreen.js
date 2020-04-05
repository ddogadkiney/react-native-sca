import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

// importing Firebase utils
import { getUserObject } from '../utils/firebase';

// importing global styles
import Styles from "../Styles";

// importing components
import Header from "../components/Header";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const POST = [
    { token: '0', image: require('../../assets/bg.jpg') },
    { token: '1', image: require('../../assets/bg.jpg') },
    { token: '2', image: require('../../assets/bg.jpg') },
    { token: '3', image: require('../../assets/bg.jpg') },
    { token: '4', image: require('../../assets/bg.jpg') },
    { token: '5', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
    { token: '6', image: require('../../assets/bg.jpg') },
]

class ProfileScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {},
            uid: this.props.navigation.getParam('uid'),
        }
    }

    async UNSAFE_componentWillMount() {
        const { uid } = this.state;
        const user = await getUserObject(uid);
        this.setState({
            user
        })
    }

    render() {
        const { user } = this.state;
        
        return (
            <>
            <Header 
                navigate={this.props.navigation.navigate}
                username='Profile'
            />
            <View style={styles.fixedTopHeader}>
                <Image source={require("../../assets/bg.jpg")} alt="User Image" style={styles.userImage} />
                <Text style={[ styles.headerUsername ]}>{ user.username }</Text>
                <View style={styles.fixedTopHeaderInnerSection}>
                    <View style={styles.fixedTopHeaderCards}>
                        <Text>123</Text>
                        <Text style={Styles.textSmall}>POSTS</Text>
                    </View>
                    <View style={styles.fixedTopHeaderCards}>
                        <Text>123</Text>
                        <Text style={Styles.textSmall}>LIKES</Text>
                    </View>
                    <View style={styles.fixedTopHeaderCards}>
                        <Text>123</Text>
                        <Text style={Styles.textSmall}>NOPES</Text>
                    </View>
                </View>
            </View>
            <ScrollView
                style={styles.scrollBottomView}
                onScrollAnimationEnd
            >
                <View style={styles.postContainer}>
                    {
                        POST.map(( i, index ) => {
                            return (
                                <Image source={require("../../assets/bg.jpg")} style={styles.postImageCard} />
                            );
                        })
                    }
                </View>
            </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    fixedTopHeader: {
        height: SCREEN_HEIGHT/3,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fff',
        paddingTop: 10,
    },
    userImage: {
        height: 100,
        width: 100,
        borderRadius: 50,

        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: '#000'
    },
    headerUsername: {
        marginTop: 10,
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold'
    },
    fixedTopHeaderInnerSection: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT/9,
        margin: 0,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        paddingHorizontal: 60,
    },
    fixedTopHeaderCards: {
        height: SCREEN_HEIGHT/9,
        width: SCREEN_WIDTH/3 - 40,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollBottomView: {
        height: (2*SCREEN_HEIGHT/3),
        backgroundColor: '#fff'
    },
    postContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    postImageCard: {
        width: SCREEN_WIDTH/3,
        height: SCREEN_WIDTH/3,
        borderColor: '#000',
        borderWidth: 0.2,
    }
})

export default ProfileScreen;