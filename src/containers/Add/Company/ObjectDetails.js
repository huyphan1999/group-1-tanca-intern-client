import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { connect } from 'react-redux';
import { getParams, getParamsHeader } from '../../../utils/index';
 class ObjectDetails extends Component {
    constructor(props) {
        super(props);
    }
   
     static navigationOptions = ({ navigation }) => {
         const params = getParamsHeader(navigation);

         return {

             headerRight: (
                 <TouchableOpacity
                     style={{ paddingRight: 15 }}
                     onPress={() =>
                         Alert.alert("Lưu thành công!!")
                     }
                 >
                     <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>Lưu</Text>
                 </TouchableOpacity >
             ),
             headerTitle: () => (
                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>{params.name}</Text>
                 </View>

             ),
         }
     };
    render() {
        var { params } =this.props.navigation.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#e3e7eb' }}>

                <View style={{
                    backgroundColor: 'white',padding:15,
                    flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 15, paddingRight: 10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'
                }}>
                    <View style={{ paddingRight: 10 }}>
                        <Icon
                            name='rectangle'
                            size={5}
                            color='red'

                        />
                    </View>
                    <Text style={{paddingRight:20}}>Tên:</Text>
                    <Text>{params.title}</Text>
                  

                  
                </View>
                <View style={{
                    backgroundColor: 'white',padding:15,
                flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, paddingBottom: 80, paddingRight: 10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'
            }}>
                    <Text style={{ paddingRight: 20 }} >Ghi chú:</Text>
                    <Text>{params.note}</Text>

                  
                </View>
                <View style={{ flex: 1, backgroundColor: '#e6e6e6', paddingTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => Alert.alert(
                            'Thông báo',
                            'Bạn chắc chắn muốn xóa ?',
                            [
                                { text: 'Hủy', onPress: () => console.log('Cancel Pressed!') },
                                { text: 'Đồng ý', onPress: this.ProcessDelete },
                            ],
                            { cancelable: false }
                        )}>

                        <Text
                            style={{ color: '#db3b3b', borderBottomWidth: 0.4, borderTopWidth: 0.4, backgroundColor: '#fcfcfc', padding: 20 }}
                        >
                            Xóa
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default connect()(ObjectDetails)
