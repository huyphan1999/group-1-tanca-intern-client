/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import initStore from './store/store.config';

import {Provider} from 'react-redux';
import Login from './containers/Login/Login.container';
import Register from './containers/Register/Register.container';
import HomeApp from './containers/Home/Home.container';
const store = initStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
