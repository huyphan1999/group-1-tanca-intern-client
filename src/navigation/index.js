
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


//Screens
import LoginScreen from '../containers/Login/Login.container';
import SignupScreen from '../containers/Signup/Signup.container';
import HomeScreen from '../containers/Home/Home';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
  });

export default createAppContainer(
    createSwitchNavigator(
      {
        Login:LoginScreen,
        SignUp:SignupScreen,
        Home:HomeScreen
      },
      {
        initialRouteName: 'Login',
      }
    )
  );