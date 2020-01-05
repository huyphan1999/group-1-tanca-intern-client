import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { navigate } from '../../../utils/navigate';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Giám đốc',
        note:'Phòng Giám Đốc',
        name: 'Phòng ban'
        
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Dịch vụ',
        note: 'Phòng Dịch Vụ',
        name: 'Phòng ban'
      
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Kế toán',
        note: 'Phòng Kế Toán',
        name: 'Phòng ban'
      
    },
];

function Item({ data }) {
    return (
            <TouchableOpacity 
            style={styles.item}
            onPress={() => navigate('ObjectDetails', data)} 
            >
                <Text style={styles.title}>{data.title}</Text>
                <Icon
                    name='chevron-right'
                    size={20}
                    color='#aaafb3'
                    style={styles.btnIcon}
                />

            </TouchableOpacity>
        
    );
}
export default class Department extends Component {
    static navigationOptions = ({ navigate, navigation }) => ({

        headerRight: (
            <TouchableOpacity
                style={{ paddingRight: 15 }}
                onPress={() =>
                    navigation.navigate('AddDepartment')
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
                <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>Phòng ban</Text>
            </View>

        ),
    });
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 0.4,
    },
    title: {
        fontSize: 16,
    },
});

