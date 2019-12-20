
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

export default class Input_OutPut_Activity extends Component {

    static navigationOptions =
        {
            title: 'Vào/Ra ca',
        };
    constructor(props) {
        super(props);
        this.state = {
            isIn: true,
        }
       
    }

    render() {
        console.log(this.state)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    this.state.isIn ?
                        <TouchableOpacity style={{ alignItems: 'center'   }} onPress={() => this.setState({ isIn: !this.state.isIn })}>
                            <Icon
                                name='user-lock'
                                size={100}
                                color='#40ff00'                               
                            />
                            <Text style={{marginTop: 10, }}>Vào ca</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ alignItems: 'center'  }} onPress={() => this.setState({ isIn: !this.state.isIn })}>
                            <Icon
                                name='user-clock'
                                size={100}
                                color='#ff4000'
                            />
                            <Text style={{marginTop: 10, }}>Ra ca</Text>
                        </TouchableOpacity>
                }

            </View>

        );
    }
}