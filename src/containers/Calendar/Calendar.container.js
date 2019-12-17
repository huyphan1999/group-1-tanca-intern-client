
import React, { Component } from 'react';

import { View, Text } from 'react-native';
export default class Calendar_Activity extends Component {

    static navigationOptions =
        {
            title: 'Lịch công'
        }

    render() {

        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Calendar Activity Screen</Text>

            </View>

        );
    }
}