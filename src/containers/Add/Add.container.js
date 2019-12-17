
import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Add extends Component {

    static navigationOptions =
        {
            title: 'Quản lý tài khoản',
        };

    render() {

        return (

            <View style={styles.MainContainer}>

                <Text style={{ marginTop: 40, fontSize: 20 }}>Add Activity Screen</Text>      
            </View>

        );
    }
}
const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        padding: 11

    },

    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },

    text: {

        color: '#fff'
    }

});