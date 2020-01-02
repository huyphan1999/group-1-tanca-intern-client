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
import NavigationService from './navigation/NavigationService';
import Navigation from './navigation/index';
import MultipleChoice from './containers/MultiSelect';
import Home from './containers/Home/Home';



const store = initStore();


class App extends Component {
  /* constructor(props) {
     super(props)
 
     this.state = {
       branch: []
     }
   }
 
   <MultipleChoice options={DATA} onSelection={(selectedOptions)=>this.onSelectBracnh(selectedOptions)} />
 
   onSelectBracnh = (selectedOptions) => {
     this.setState({ branch: [...selectedOptions] })
   }
   */
  render() {
    return (
      <Provider store={store}>
        <Home ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    );
  }
}



export default App;
