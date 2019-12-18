
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class Choose extends Component {
    render() {
       
        return (

            <TouchableOpacity 
            style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15,borderBottomWidth:0.4  }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Icon
                            name={this.props.iconName1}
                            size={16}
                            color='#27f591'
                            style={styles.btnIcon}
                        />
                    </View>
                    <View style={{ paddingLeft: 10, fontFamily: 'Open Sans' }}>
                        <Text>{this.props.txtName}</Text>
                    </View> 
                </View>
               
                    <Icon
                        name={this.props.iconName2}
                        size={16}
                        color='#aaafb3'
                        style={{paddingRight:20}}
                    />
               
                
            </TouchableOpacity>



        )
    }
}
export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconName1: '',
            iconName2: '',
            txtName: ''

        }
    }

    static navigationOptions =
        {
            title: 'Quản lý tài khoản',
        };

    render() {

        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: '#f5fcff'
                }}>

                    <View style={{
                        flex: 2, backgroundColor: '#e3e7eb', alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.push('ThongTinCaNhan')
                            }
                        >
                            <Image
                                style={styles.btnImage}
                                source={require('../image/admin.png')}

                            />
                        </TouchableOpacity>
                        <Text style={{ paddingTop: 10, fontSize: 18 }}>Tanca Xây Dựng</Text>
                        <Text style={{ color: '#aaafb3', fontSize: 16 }}>Quản lý- +84112233444</Text>

                    </View>
                    <View style={{ flex: 3, backgroundColor: '#ffffff' }}>
                        <Text style={{ color: '#aaafb3', fontSize: 18, backgroundColor: '#e3e7eb', padding: 10,borderBottomWidth:0.4 }}>CÔNG CỤ QUẢN LÝ</Text>
                        <Choose iconName1="store-alt" iconName2="chevron-right" txtName="Công ty" />
                        <Choose iconName1="address-book" iconName2="chevron-right" txtName="Ca làm" />
                        <Choose iconName1="user-friends" iconName2="chevron-right" txtName="Nhân viên" />
                        <Choose iconName1="calendar-check" iconName2="chevron-right" txtName="Sắp xếp lịch công" />
                        <Choose iconName1="clipboard-list" iconName2="chevron-right" txtName="Chấm công nhanh" />
                        <Choose iconName1="tools" iconName2="chevron-right" txtName="Chỉnh sửa giờ công" />
                        <Choose iconName1="laptop" iconName2="chevron-right" txtName="Web admin" />
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{ color: '#aaafb3', fontSize: 18, backgroundColor: '#e3e7eb', padding: 10,borderBottomWidth:0.4,borderTopWidth:0.4 }}>ỨNG DỤNG</Text>
                    <Choose iconName1="globe" iconName2="chevron-right" txtName="Ngôn ngữ" />
                    <Choose iconName1="exclamation-circle" iconName2="chevron-right" txtName="Giới thiệu Tanca" />
                    <Choose iconName1="exclamation-triangle" iconName2="chevron-right" txtName="Báo lỗi" />
                    <Choose iconName1="ello" iconName2="chevron-right" txtName="Làm mới ứng dựng" />
                    </View>
                </View>

            </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({

   

    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },

    text: {

        color: '#fff'
    },
    btnImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,


    }

});