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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'VP Công Ty',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chi nhánh Phú Nhuận',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Chi nhánh Cần Thơ',
  },
];


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
