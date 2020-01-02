
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { CheckBox, Divider } from 'react-native-elements'
import { connect } from 'react-redux';
import { navigate } from '../../../utils/navigate';
import { getParams } from '../../../utils/index';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'VP Công Ty',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Chi nhánh Phú Nhuận',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Chi nhánh Cần Thơ',
    },
];

class ButtonSave extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ paddingRight: 16 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Save</Text>
            </TouchableOpacity >
        );
    }
}
class ShiftDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: [1, 0, 1, 0, 1, 1, 0], branch: [] }
    }
    static navigationOptions = {
        headerRight: () => <ButtonSave />,
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Thông tin cá nhân</Text>
            </View>
        ),
    };
    handleCheck = id => {
        this.state.checked[id] = !this.state.checked[id]
        this.forceUpdate()
    }

    onSelectBranch = (selectedBranch) => {
        console.log('Callback success')
        this.setState({ branch: [...selectedBranch] })
    };

    render() {
        console.log(`Shift Detail: ${this.state.branch}`);
        var params = this.props.navigation;
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
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{ fontSize: 18, backgroundColor: '#e3e7eb', padding: 20, borderBottomWidth: 0.8 }}>PHÂN CA</Text>
                        <View style={{
                            padding: 12,
                            fontSize: 16,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text > Chi nhánh :</Text>
                            <TouchableOpacity
                                onPress={() => navigate('MultiSelect', {
                                    onSelection: (selectedBranch) => this.onSelectBranch(selectedBranch),
                                    options: DATA
                                })}
                                style={{flex:1,maxWidth:200}}
                                >
                                <Text>{this.state.branch.toString()}</Text></TouchableOpacity>

                        </View>
                        <Text style={{ marginLeft: 10, borderWidth: 0.5, borderLeftWidth: 0 }}>Thời gian hoạt động của ca</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.checked[0]}
                                onPress={() => this.handleCheck(0)}
                                title='Thứ hai'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}

                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.checked[1]}
                                onPress={() => this.handleCheck(1)}
                                title='Thứ Ba'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: -2 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.checked[2]}
                                onPress={() => this.handleCheck(2)}
                                title='Thứ tư'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: 1 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.checked[3]}
                                onPress={() => this.handleCheck(3)}
                                title='Thứ năm'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: 0, marginLeft: -8, }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.checked[4]}
                                onPress={() => this.handleCheck(4)}
                                title='Thứ Sáu'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.checked[5]}
                                onPress={() => this.handleCheck(5)}
                                title='Thứ Bảy'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: -5 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.checked[6]}
                                onPress={() => this.handleCheck(6)}
                                title='Chủ nhật'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: -5 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
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
