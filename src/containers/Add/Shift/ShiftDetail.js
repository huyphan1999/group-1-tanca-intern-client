
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getUserData } from '../../selectors';

class ButtonSave extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ paddingRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18}}>Save</Text>
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
                <Text style={{ color: 'white', fontSize: 18}}>Thông tin cá nhân</Text>
            </View>
        ),
    };

    render() {
        var {params}=this.props.navigation.state
        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <Text style={{fontSize: 18, backgroundColor: '#e3e7eb', padding: 20,borderBottomWidth:0.5 }}>TẠO CA</Text>
                        <View style={styles.txtContent}>
                            <Text >Tên ca làm :</Text>
                            <Text style={{ color:'#9c9c9c',fontSize:16,textAlign:'auto',borderStyle:'solid'}}>{params.title}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Mã ca:</Text>
                            <Text>{params.id}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Mã ca:</Text>
                            <Text>{params.id}</Text>
                        </View>
                        <View style={styles.txtContent}>
                            <Text >Mã ca:</Text>
                            <Text>{params.id}</Text>
                        </View>
                        

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

const mapStateToProps = state => ({
  data: getUserData(state),
})

export default connect(mapStateToProps, null)(ThongTinCaNhan)
