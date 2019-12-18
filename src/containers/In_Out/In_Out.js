
import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class Input_OutPut_Activity extends Component {

    static navigationOptions =
        {
            title: 'Vào/Ra ca',
        };

    render() {

        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Input/Output Activity Screen</Text>

            </View>

        );
    }
}