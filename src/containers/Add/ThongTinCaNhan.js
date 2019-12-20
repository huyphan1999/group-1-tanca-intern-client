
import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Text, Platform ,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {RadioGroup} from 'react-native-btr';
import DateTimePicker from '@react-native-community/datetimepicker';

import { connect } from 'react-redux';
import { getUserData } from '../../selectors';
import Avatar, { Sizes, IconTypes} from 'rn-avatar';
class ButtonSave extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ paddingRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18}}>Save</Text>
            </TouchableOpacity >
        );
    }
}

class ThongTinCaNhan extends Component {
    constructor(props) {
        super(props);

        this.state={
            Id:'XD000',
            FullName:'Tanca Xây Dựng',
            radioButtons: [
                {
                    label: 'Nam',
                    value: 'Nam',
                    checked: true,
                    color: 'black',
                    disabled: false,
                    flexDirection: 'row',
                    size: 6,
                },

                {
                    label: 'Nữ',
                    value: 'Nữ',
                    checked: false,
                    color: 'black',
                    disabled: false,
                    flexDirection: 'row',
                    size: 6
                },

                

            ],
            Address:'Hoàng Diệu 2, Thủ Đức',
            Phone:'+84112233444',
            Department:'Văn phòng',
            Position:'Nhân sự',
            Branch:'VP Công ty',
            Region:'HCM',
            Salary:'1000',
            date: new Date('2020-06-12T14:42:42'),
            mode: 'date',
            show: false,
        };

    }
    static navigationOptions = {
        headerRight: () => <ButtonSave />,
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18}}>Thông tin cá nhân</Text>
            </View>
        ),
    };
    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }

    timepicker = () => {
        this.show('time');
    }

    render() {
        const { show, date, mode } = this.state;
        let selectedItem = this.state.radioButtons.find(e => e.checked == true);
        selectedItem = selectedItem ? selectedItem.value : this.state.radioButtons[0].value;
       
        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{ flex: 1, backgroundColor: '#e3e7eb', alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
                        <Avatar
                            rounded
                            showEditButton
                            size={Sizes.EXTRA_LARGE}
                            source={require('../image/admin.png')}
                            containerStyle={{ margin: 10 }}
                            title='Admin'
                            onPress={() => this.props.navigation.navigate('ThongTinCaNhan')}
                            containerStyle={{ margin: 10 }}
                            editButton={{
                                name: 'edit',
                                type: IconTypes.Entypo,
                                color: '#ffffff',
                                underlayColor: '#000',
                            }}

                        />
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{fontSize: 18, backgroundColor: '#e3e7eb', padding: 20,borderBottomWidth:0.5 }}>THÔNG TIN CÁ NHÂN</Text>
                        <View style={styles.txtContent}>
                            <Text >Mã NV :</Text>
                            <Text style={styles.txtInfo}>{this.state.Id}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', paddingLeft:10,paddingRight:10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'}}>
                            <Text >Họ và tên:</Text>

                           <TextInput
                                style={{ height: 40, fontSize: 14,justifyContent:'center',alignItems:'center'}}
                                placeholder="Type Họ và Tên!"
                                onChangeText={(FullName) => this.setState({ FullName })}
                                value={this.state.FullName}
                           />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'space-around', padding: 10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'}}>
                            <Text style={{paddingRight:200}}>Giới tính:</Text>
                            <RadioGroup
                                color='#0277BD'
                                labelStyle={{ fontSize: 14}}
                                radioButtons={this.state.radioButtons}
                                onPress={radioButtons => this.setState({ radioButtons })}
                                style={{ flexDirection:'row',height:25}}
                                
                            />
                         
                        </View>
                        <Text style={{justifyContent: 'center', padding: 10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center' }}>Selected Item: {selectedItem}</Text>
                        
                        <View style={styles.txtContent}>
                            <Text >Ngày sinh:</Text>
                            <View>
                                <TouchableOpacity
                                    onPress={this.datepicker} 
                                >
                                  <Text>{this.state.date.toDateString()}</Text>
                                </TouchableOpacity>
                            
                            </View>
                            {show && <DateTimePicker value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={this.setDate} />
                            }
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Địa chỉ:</Text>
                            <Text style={styles.txtInfo}>{this.state.Address}</Text>

                        </View>
                        
                        <View style={styles.txtContent}>
                            <Text >Số điện thoại :</Text>
                            <Text style={styles.txtInfo}>{this.state.Phone}</Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{fontSize: 18, backgroundColor: '#e3e7eb', padding: 20,paddingTop:40,borderTopWidth:0.5,borderBottomWidth:0.5 }}>CÔNG TY</Text>
                        <View style={styles.txtContent}>
                            <Text >Phòng ban :</Text>
                            <Text style={styles.txtInfo}>{this.state.Department}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Chức vụ :</Text>
                            <Text style={styles.txtInfo}>{this.state.Position}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Chi nhánh :</Text>
                            <Text style={styles.txtInfo}>{this.state.Branch}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Vùng :</Text>
                            <Text style={styles.txtInfo}>{this.state.Region}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Lương/Giờ công :</Text>
                            <Text style={styles.txtInfo}>{this.state.Salary}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
   

    txtContent:{
        padding: 10, 
        fontSize: 16,
        borderBottomWidth:0.5,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    MainContainer: {
        flex: 1,
        backgroundColor: '#FFF8E1',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        

    },
    txtInfo:{
        color: '#9c9c9c',
        fontSize: 16,
        textAlign: 'auto', 
        borderStyle: 'solid'

    }

    

});

const mapStateToProps = state => ({
  data: getUserData(state),
})

export default connect(mapStateToProps, null)(ThongTinCaNhan)
