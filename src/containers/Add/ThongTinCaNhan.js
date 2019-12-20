
import React, { Component } from 'react'
<<<<<<< HEAD
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Text, Platform ,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {RadioGroup} from 'react-native-btr';
import DateTimePicker from '@react-native-community/datetimepicker';
=======
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getUserData } from '../../selectors';

>>>>>>> 7ee6b580aca8b06f579a3624ccb142472bbcc494
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
<<<<<<< HEAD
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
                    size: 6

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
=======
>>>>>>> 7ee6b580aca8b06f579a3624ccb142472bbcc494
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
        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{ flex: 1, backgroundColor: '#e3e7eb', alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
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
<<<<<<< HEAD
                            <Text style={styles.txtInfo}>{this.state.Id}</Text>
=======
                            <Text style={{ color:'#9c9c9c',fontSize:16,textAlign:'auto',borderStyle:'solid'}}>{this.props.phone}</Text>
>>>>>>> 7ee6b580aca8b06f579a3624ccb142472bbcc494
                        </View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', paddingLeft:10,paddingRight:10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'}}>
                            <Text >Họ và tên:</Text>
<<<<<<< HEAD
                           <TextInput
                                style={{ height: 40, fontSize: 14,justifyContent:'center',alignItems:'center'}}
                                placeholder="Type Họ và Tên!"
                                onChangeText={(FullName) => this.setState({ FullName })}
                                value={this.state.FullName}
                           />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'}}>
                            <Text>Giới tính:</Text>
                            <RadioGroup
                                color='#0277BD'
                                labelStyle={{ fontSize: 14}}
                                radioButtons={this.state.radioButtons}
                                onPress={radioButtons => this.setState({ radioButtons })}
                                style={{ flexDirection:'row', backgroundColor: 'yellow',height:30,width:40}}
                                
                              
                            />
                        </View>
                        
                        
                        <View style={styles.txtContent}>
                            <Text >Ngày sinh:</Text>
                            <View>
                                <Button onPress={this.datepicker} title="Show date picker!" />
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
=======
                            <Text>{this.props.data.name}</Text>
>>>>>>> 7ee6b580aca8b06f579a3624ccb142472bbcc494
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
    btnImage: {
     
        width: 120,
        height: 120,
    },

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
