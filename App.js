import React, { Component } from 'react';
import {createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './Modules/Screen/Login';
import Registration from './Modules/Screen/Registration';
import ForgotPassword from './Modules/Screen/ForgotPassword';
import SuccessfulRequest from './Modules/Screen/SuccessfulRequest';
import RequestIdModal from './Modules/Screen/RequestIdModal';
import AddRequestModal from './Modules/Screen/AddRequestModal';
import AuthLoading from './Modules/Screen/AuthLoading';
import Location from './Modules/Screen/Location';
import { MyApp } from './Modules/Screen/Drawer';

const AuthStack = createStackNavigator({
  LoginScreen:Login,
  RegistrationScreen:Registration,
  ForgotPasswordScreen:ForgotPassword,
 },{headerMode: 'none'},
 {
   initialRouteName: 'LoginScreen'
 });
// const DashboardStack = createStackNavigator({ 
//   SuccessfulRequestScreen:SuccessfulRequest,
//   RequestIdModalScreen:RequestIdModal,
//   AddRequestModalScreen:AddRequestModal,
//  },
//  {
//    initialRouteName:'SuccessfulRequestScreen'
//  });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen: AuthLoading,
    Auth: AuthStack,
    Dashboard: MyApp,
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  }
  
));



/*class App extends Component {
  render() {
      return (
      
        <Location/>
    );
  }
}

export default App */