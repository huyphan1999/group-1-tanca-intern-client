import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { loginRequest } from '../../actions/login.action';
import { navigate } from '../../utils/navigate';

import { getUserToken } from '../../selectors/index';
class Login extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            checked: false,
            email: null,
            password: null
        }
    }
    componentDidUpdate() {
        if(this.props.isLogin)  this.props.navigation.navigate('Home');
    };
    render() {
        let { email, password } = this.state;
        return (
            <View>
                <View style={styles.textHeader}>
                    <Text style={styles.txtSign}>Sign in</Text>
                </View>
                <View style={styles.textContent}>
                    <Text style={{ fontSize: 20 }}>Please enter the email And</Text>
                    <Text style={{ fontSize: 20 }}>Phone number</Text>
                </View>
                <View style={styles.textInput}>
                    <View style={styles.textInputContainer} >
                        <TextInput
                            style={styles.textInput}
                            placeholder='Email'
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.textInputContainer} >
                        <TextInput
                            style={styles.textInput}
                            placeholder='Password'
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                        />
                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={() => this.props.loginRequest({ email, password })}
                        >
                            <Text>SIGN IN</Text>

                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        justifyContent: 'center', alignItems: 'center', paddingTop: 40
                    }}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        <Text style={{ color: '#39e394', fontSize: 16 }}> FREE TRIAL</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.checked}
                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={{ marginTop: 5 }}> Accept the term of use of the application</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        textHeader: {
            height: 80,
            backgroundColor: '#39e394',
            justifyContent: 'center',
            alignItems: 'center'
        },
        txtSign: {
            color: '#ffffff',
            fontSize: 20,
            marginTop: 10,

        },
        textInput: {
            justifyContent: 'flex-start',
            backgroundColor: '#f2fcf8',
            alignItems: 'center'
        },
        textContent: {
            height: 80,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'

        },
        textInputContainer: {
            width: 390,
            marginTop: 20,
            backgroundColor: '#ffffff',
            height: 60,
            paddingHorizontal: 10,
            borderRadius: 6,
        },
        textInput: {
            fontSize: 20,
        },
        loginBtn: {

            width: 390,
            height: 45,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#39e394',
            fontSize: 16,
        },
        checkBox: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 80
        }
    });

function mapDispatchToProps(dispatch) {
    return {
        loginRequest: ({ email, password }) => dispatch(loginRequest({ email, password }))
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.login.successful,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
