import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image,FlatList, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/AntDesign';



class TitleHeader extends Component{
    render(){
        return(
           
                <TouchableOpacity 
                style={{flexDirection:'row'}}
                onPress={() => { Alert.alert("Hiện chi tiết") }}>
                    <Text>{this.props.name}</Text>
                    <Icon
                        name='downcircleo'
                        size={16}
                        color={this.props.color}
                        style={{paddingLeft:10,paddingRight:10 }}

                    />

                </TouchableOpacity>
          

        )
    }
}
export default class Employee extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:'',
            item:'',
            index:'',
           
        };  
    }
   
    static navigationOptions = ({ navigate, navigation }) => ({

        headerRight: (
            <TouchableOpacity
                style={{ paddingRight: 15 }}
                onPress={() =>
                    navigation.navigate('AddEmployee')
                }
            >
                <Image
                    source={require('../../image/add_object.png')}
                    style={{ width: 20, height: 20 }}
                    tintColor='white'

                />
            </TouchableOpacity >
        ),
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, paddingLeft: 30 }}>Danh sách nhân viên</Text>
            </View>

        ),
    });
    updateSearch = search => {
        this.setState({ search:search });
    };
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            onPress={()=>{
                Alert.alert("Hiện thông tin cá nhân!!")
            }}
            subtitle={item.subtitle}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron

        />
    )
    
    render() {
        var {search}=this.state;
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]
           

        return (
            <View style={{flex:1}}>
                <View>
                    <SearchBar
                        round
                        placeholder="Tìm kiếm"
                        onChangeText={this.updateSearch}
                        value={search}
                        searchIcon={{ size: 30 }}
                        inputStyle={{ backgroundColor: '#CBCAC9', color: '#2D2D2D' }}
                        containerStyle={{ backgroundColor: 'white', padding: 10, justifyContent: 'center' }}
                        inputContainerStyle={{ backgroundColor: '#CBCAC9' }}
                    />
                </View>
                <View style={{ height: 50, backgroundColor: '#D5D5D5',borderBottomWidth:0.6,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center' }}>
                   
                        

                       
                    <TitleHeader name='Tất cả' color='#33FF4E' />
                    <TitleHeader name='Chi nhánh' color='#E6E6E6' />
                    <TitleHeader name='Phòng ban' color='#E6E6E6' />
                    <TitleHeader name='Chức vụ' color='#E6E6E6' />
           
                 
                    
                    
                </View>
                <View>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />

                </View>
            </View>
         
        )
    }
}
