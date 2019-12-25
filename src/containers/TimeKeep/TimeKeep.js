
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    TouchableOpacity
} from 'react-native';


const DATA = [
    {
        date: 'Thứ 7, 14-12-2019',
        data: [{ name: 'Phan Phú Huy', time: '13:30', activity: 'Vào ca-Ca thực tập chiều(13:30-17:30)'}
        ,{ name: 'Phan Phú Huy', time: '13:30', activity: 'Vào ca-Ca thực tập chiều(13:30-17:30)'}],
    },
    {
        date: 'Thứ Hai, 14-12-2019',
        data: [{ name: 'Phan Phú Huy', time: '13:30', activity: 'Vào ca-Ca thực tập chiều(13:30-17:30)' }],
    },
    {
        
        data: [{ name: 'Phan Phú Huy', time: '13:30', activity: 'Vào ca-Ca thực tập chiều(13:30-17:30)' }],
    },

];

function Item({ data }) {
    return (

        <TouchableOpacity
            style={styles.item}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderRightWidth:0.5}}>
                <Text style={styles.data}>{data.time}</Text>

                <Icon
                    name='desktop'
                    size={20}
                    color='#aaafb3'
                    style={{ marginHorizontal: 10, }}
                />

            </View>
            <View style={{paddingLeft:15}}>

                <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>

                <Text>{data.activity}</Text>

            </View>



        </TouchableOpacity>
    );

}

export default class Calendar_Activity extends Component {

    static navigationOptions =
        {
            title: 'Lịch sử chấm công'
        }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item data={item} />}
                    renderSectionHeader={({ section: { date } }) => (
                        <Text style={styles.header}>{date}</Text>
                    )}
                    stickySectionHeadersEnabled={true}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Open Sans'
    },
    item: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 0.4,
        marginLeft:10
    },
    header: {
        fontSize: 20,
        backgroundColor: '#5af542',
        color: 'white',
        padding: 10,
        paddingLeft: 20,
    },
    data: {
        fontSize: 16,
    },
});

