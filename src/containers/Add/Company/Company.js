import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class Choose extends Component {
    render() {
        return (

            <TouchableOpacity
                style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 0.4 }}
                onPress={() => this.props.navigation.navigate(`${this.props.name}`)}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Icon
                            name={this.props.iconName1}
                            size={20}
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
                    style={{ paddingRight: 20 }}
                />


            </TouchableOpacity>



        )
    }
}
export default class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }
    }
    static navigationOptions = () => ({
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18}}>Công ty</Text>
            </View>

        ),
    });

    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <Choose iconName1="globe-asia" iconName2="chevron-right" txtName="Vùng" navigation={this.props.navigation} name="Region" />
                <Choose iconName1="code-branch" iconName2="chevron-right" txtName="Chi nhánh" navigation={this.props.navigation} name="Branch" />
                <Choose iconName1="user-tie" iconName2="chevron-right" txtName="Chức vụ" navigation={this.props.navigation} name="Position" />
                <Choose iconName1="home" iconName2="chevron-right" txtName="Phòng ban" navigation={this.props.navigation} name="Department" />
                
            </View>
        )
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


});
