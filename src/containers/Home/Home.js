
import React from 'react';

import { Image } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Add_Activity from '../Add/Add';
import Input_Output_Activity from '../In_Out/In_Out';
import Calendar_Activity from '../Calendar/Calendar';
import TimeKeep_Activity from '../TimeKeep/TimeKeep';
import ThongTinCaNhan_Activity from '../Add/ThongTinCaNhan';
import Logout_Activity from '../Add/Logout';
import Shift from '../Add/Shift/Shift';
import ShiftDetail from '../Add/Shift/ShiftDetail';

import Company from '../Add/Company/Company';
import Region from '../Add/Company/Region';
import Position from '../Add/Company/Position';
import Department from '../Add/Company/Department';
import Branch from '../Add/Company/Branch';
import AddRegion from '../Add//Company/AddRegion';
import AddBranch from '../Add/Company/AddBranch';
const Input_OutputTab = createStackNavigator(
  {
    Input_Output: Input_Output_Activity

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Input_Output Tab',

    },
  }
);
const Calendar_Tab = createStackNavigator(
  {
    Calendar: Calendar_Activity

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Calendar Tab',

    },
  }
);
const TimeKeep_Tab = createStackNavigator(
  {
    TimeKeep: TimeKeep_Activity

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'TimeKeep Tab',

    },
  }
);


const Add_Tab = createStackNavigator(
  {
    Add: Add_Activity,
    ThongTinCaNhan: ThongTinCaNhan_Activity,
    Logout:Logout_Activity,
    Shift:Shift,
    ShiftDetail:ShiftDetail,
    Company:Company,
    Region:Region,
    Position:Position,
    Department:Department,
    Branch:Branch,
    AddRegion:AddRegion,
    AddBranch:AddBranch,

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Add Tab',
    },
  }
);

const Home = createBottomTabNavigator(
  {

    Input_Output: Input_OutputTab,
    Calendar: Calendar_Tab,
    TimeKeep: TimeKeep_Tab,
    Add: Add_Tab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Input_Output') {

          return (
            <Image
              source={require('../image/in_output.png')}
              style={{ width: 20, height: 20, }} />
          );

        }
        if (routeName === 'Calendar') {

          return (
            <Image
              source={require('../image/calendar.png')}
              style={{ width: 20, height: 20, }} />
          );

        }
        if (routeName === 'TimeKeep') {

          return (
            <Image
              source={require('../image/time_keep.png')}
              style={{ width: 20, height: 20, }} />
          );

        }
        if (routeName === 'Add') {
          return (
            <Image
              source={require('../image/add.png')}
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);

export default createAppContainer(Home);