
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';


export default class ThongTinCaNhan extends Component {
    constructor(props) {
        super(props);
        this.state={
            MaNV:'XD000',
            HoVaTen:'Tanca Xay Dung',
            GioiTinh:'',


        }
    }
    static navigationOptions =
        {
            title: 'Thông tin cá nhân',
        };

    render() {

        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{flex: 1, backgroundColor: '#e3e7eb', alignItems: 'center',justifyContent: 'center'}}>
                        <TouchableOpacity>
                            <Image
                                style={styles.btnImage}
                                source={require('../image/admin.png')}

                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{fontSize: 18, backgroundColor: '#e3e7eb', padding: 20,borderBottomWidth:0.5 }}>THÔNG TIN CÁ NHÂN</Text>
                        <View style={styles.txtContent}>
                            <Text >Mã NV :</Text>
                            <Text style={{ color:'#9c9c9c',fontSize:16,textAlign:'auto',borderStyle:'solid'}}>{this.state.MaNV}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Họ và tên:</Text>
                            <Text>{this.state.HoVaTen}</Text>
                        </View>
                        
                        <Text style={styles.txtContent}>Giới tính:</Text>
                        <Text style={styles.txtContent}>Ngày sinh:</Text>
                        <Text style={styles.txtContent}>Địa chỉ:</Text>
                        <Text style={styles.txtContent}>Số điện thoại:</Text>

                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{fontSize: 18, backgroundColor: '#e3e7eb', padding: 20,paddingTop:40,borderTopWidth:0.5,borderBottomWidth:0.5 }}>CÔNG TY</Text>
                        <Text style={styles.txtContent}>Phòng ban:</Text>
                        <Text style={styles.txtContent}>Chức vụ:</Text>
                        <Text style={styles.txtContent}>Chi nhánh:</Text>
                        <Text style={styles.txtContent}>Vùng:</Text>
                        <Text style={styles.txtContent}>Lương/Giờ công:</Text>
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

    txtContent:{
        padding: 12, 
        fontSize: 16,
        borderBottomWidth:0.5,
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    

});