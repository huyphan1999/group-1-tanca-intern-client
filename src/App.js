/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import initStore from './store/store.config';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import Navigation from './navigation/index';
const store = initStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
