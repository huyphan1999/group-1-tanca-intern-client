import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { navigate } from '../../../utils/navigate';
import { postRequest } from '../../../actions/post.actions';
const DATA = [
    {
        id: 'CA_VAN_PHONG',
        title: 'Ca Văn Phòng',
        timeStart: '8:30',
        timeEnd: '17:30',
        branch: 'VP Công ty',
        uptime: [true, false, true, true, true, false,true]
    },
    {
        id: 'CA_VAN_PHONG1',
        title: 'Ca Văn Phòng',
        timeStart: '8:30',
        timeEnd: '17:30',
        branch: 'VP Công ty',
        uptime: [true, false, false, true, true, false,true]

    },
    {
        id: 'CA_VAN_PHONG2',
        title: 'Ca Văn Phòng',
        timeStart: '8:30',
        timeEnd: '17:30',
        branch: 'VP Công ty',
        uptime: [false, false, true, false, true, false,true]
    },
];

function Item({ data, onSave }) {
    var time = `${data.timeStart}-${data.timeEnd}`
    return (
        <TouchableOpacity style={styles.txtContent}
            onPress={() => navigate('ShiftDetail', { data, onPress: data => onSave(data) })} >
            <Text >{data.title}</Text>
            <Text>{time}</Text>
        </TouchableOpacity>
    );
}

export default class Shift extends React.Component {

    onAddShift = data => {
        this.props.dispatch(postRequest('SHIFT_ADD', data))
        console.log('Add SAVE CALLBACK');
        console.log(data);
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item data={item}  onSave={(data) => this.onAddShift(data)} />}
                    keyExtractor={item => item.id}
                    style={{ borderBottomWidth: 1, paddingLeft: 10, }}
                />
            </SafeAreaView>
        )
    };
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    txtContent: {
        padding: 12,
        fontSize: 16,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
