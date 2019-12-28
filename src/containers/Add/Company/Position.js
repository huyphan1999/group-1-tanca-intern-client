import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class Position extends Component {
    static navigationOptions = ({ navigate, navigation }) => ({

        headerRight: (
            <TouchableOpacity
                style={{ paddingRight: 15 }}
                onPress={() =>
                    navigation.navigate('AddPosition')
                }
            >
                <Image
                    source={require('../../image/add_object.png')}
                    style={{ width: 20, height: 20 }}
                    tintColor='white'

                />
            </TouchableOpacity >
        ),
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>Chức vụ</Text>
            </View>

        ),
    });
    render() {
        return (
            <View>
                <Text>Trưởng phòng</Text>
                <Text>Nhân viên</Text>
            </View>
        )
    }
}
