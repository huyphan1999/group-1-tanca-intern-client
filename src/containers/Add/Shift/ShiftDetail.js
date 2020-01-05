
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { CheckBox, Divider } from 'react-native-elements'
import { connect } from 'react-redux';
import { navigate } from '../../../utils/navigate';
import { getParams, getParamsHeader } from '../../../utils/index';

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

class ShiftDetail extends Component {
    constructor(props) {
        super(props);
        var { data } = getParams(this.props);
        var { onPress } = getParams(this.props);
        console.log(onPress)
        this.state = data
    }

    componentDidMount = () => {
        this.props.navigation.setParams({ onPressHeader: this.onPressHeader });
    };

    onPressHeader = () => {
        console.log('onPressed Header')
        getParams(this.props).onPress(this.state)
    };


    static navigationOptions = ({ navigation }) => {
        const params = getParamsHeader(navigation);

        console.log(`Params: ${params}`);
        return {
            headerRight: (
                <TouchableOpacity
                    style={{ paddingRight: 15 }}
                    onPress={() => params.onPressHeader()}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Save</Text>
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>
                        Nhân viên
                    </Text>
                </View>
            ),
        };
    };
    handleCheck = id => {
        this.state.uptime[id] = !this.state.uptime[id]
        this.forceUpdate()
    }

    onSelectBranch = (selectedBranch) => {
        console.log('Callback success')
        this.setState({ branch: [...selectedBranch] })
    };

    render() {
    
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{ fontSize: 18, backgroundColor: '#e3e7eb', padding: 20, borderBottomWidth: 0.5 }}>TẠO CA</Text>
                        <View style={styles.txtContent}>
                            <Text >Tên ca làm :</Text>
                            <Text>{this.state.title}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Mã ca:</Text>
                            <Text >{this.state.id}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Bắt đầu lúc:</Text>
                            <Text>{this.state.timeStart}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Kết thúc :</Text>
                            <Text>{this.state.timeEnd}</Text>
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
                                style={{ flex: 1, maxWidth: 200 }}
                            >
                                <Text>{this.state.branch.toString()}</Text></TouchableOpacity>

                        </View>
                        <Text style={{ marginLeft: 10, borderWidth: 0.5, borderLeftWidth: 0 }}>Thời gian hoạt động của ca</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.uptime[0]}
                                onPress={() => this.handleCheck(0)}
                                title='Thứ hai'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}

                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.uptime[1]}
                                onPress={() => this.handleCheck(1)}
                                title='Thứ Ba'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: -2 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.uptime[2]}
                                onPress={() => this.handleCheck(2)}
                                title='Thứ tư'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: 1 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.uptime[3]}
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
                                checked={this.state.uptime[4]}
                                onPress={() => this.handleCheck(4)}
                                title='Thứ Sáu'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.uptime[5]}
                                onPress={() => this.handleCheck(5)}
                                title='Thứ Bảy'
                                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0, padding: 0, marginLeft: -5 }}
                                textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                            />
                            <CheckBox
                                center
                                size={24}
                                checked={this.state.uptime[6]}
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
