import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import signupRequest from '../../actions/signup.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            email:null,
            password:null
        };
    }
    render() {
        return (
            <View>
                <View style={styles.textHeader}>
                    <Text style={styles.txtSign}>Sign up</Text>
                </View>
                <View style={styles.textContent}>
                    <Text style={{ fontSize: 20 }}>Please enter the email And</Text>
                    <Text style={{ fontSize: 20 }}>Phone number</Text>
                </View>
                <View style={styles.textInput}>
                    <View style={styles.textInputContainer} >
                        <TextInput
                            style={styles.textInput}
                            textContentType='emailAddress'
                            placeholder='email'
                            onChangeText={(text) => this.setState({ email:text })}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.textInputContainer} >
                        <TextInput
                            style={styles.textInput}
                            textContentType='telephoneNumber'
                            placeholder='Your phone number'
                            onChangeText={(text) => this.setState({ password:text })}
                            value={this.state.password}
                        />
                    </View>
                    <View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity
                            style={styles.loginBtn}
                            /*onPress={this.props.signupRequest(this.state.email,this.state.password)}*/
                        >
                            <Text>SIGN UP</Text>

                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        justifyContent: 'center', alignItems: 'center', paddingTop: 40
                    }}>
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
const mapStateToProps = state => ({
    login: state.login,
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({signupRequest}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)


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

