import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  render() {
    console.log('Auth loading render')
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}