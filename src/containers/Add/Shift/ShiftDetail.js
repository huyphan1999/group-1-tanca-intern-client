
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class ButtonSave extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ paddingRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Save</Text>
            </TouchableOpacity >
        );
    }
}
class ShiftDetail extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerRight: () => <ButtonSave />,
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Thông tin cá nhân</Text>
            </View>
        ),
    };

    render() {
        var { params } = this.props.navigation.state
        var timeStart = `${params.timeStartHour}:${params.timeStartMinute}`
        var timeEnd = `${params.timeEndHour}:${params.timeEndMinute}`
        console.log(params)
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{ fontSize: 18, backgroundColor: '#e3e7eb', padding: 20, borderBottomWidth: 0.5 }}>TẠO CA</Text>
                        <View style={styles.txtContent}>
                            <Text >Tên ca làm :</Text>
                            <Text>{params.title}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Mã ca:</Text>
                            <Text >{params.id}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Bắt đầu lúc:</Text>
                            <Text>{timeStart}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Kết thúc :</Text>
                            <Text>{timeEnd}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    btnImage: {

        width: 120,
        height: 120,
    },

    txtContent: {
        padding: 12,
        fontSize: 16,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },



});


export default connect()(ShiftDetail)
