
import React, { Component } from 'react';

import { View, Text } from 'react-native';
export default class TimeKeep_Activity extends Component {

    static navigationOptions =
        {
            title: 'Lịch sử chấm công',
        };

    render() {

        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>TimeKeep Activity Screen</Text>

            </View>

        );
    }
}