/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import initStore from './store/store.config';

import {Provider} from 'react-redux';
import Login from './containers/Login/Login.container';
const store = initStore();

class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  )
}
}

const styles = StyleSheet.create({});

export default App;
