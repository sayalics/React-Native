import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import SuccessfulRequest from './SuccessfulRequest';
import RequestIdModal from './RequestIdModal';
import AddRequestModal from './AddRequestModal';
import Notification from './Notification';
import Profile from './Profile';
import {Ionicons} from '@expo/vector-icons';
import {Image, View, SafeAreaView, TouchableOpacity, Text, Alert, AsyncStorage} from 'react-native';
import {DrawerItems} from 'react-navigation';

const DashboardStack = createStackNavigator({ 
  SuccessfulRequestScreen:SuccessfulRequest,
  RequestIdModalScreen:RequestIdModal,
  AddRequestModalScreen:AddRequestModal,
 },
 {
      initialRouteName:'SuccessfulRequestScreen',
      defaultNavigationOptions:({navigation})=> {
        return{ 
      headerLeft: <Ionicons name="md-menu" size={32} color="#ffffff" style={{marginLeft:10}} 
      onPress={() =>navigation.toggleDrawer()} />,
      headerTitle:(<Image 
        style={{ width: 200, height: 200, justifyContent:'center',marginLeft:20,resizeMode:'contain' }}
        source={require('../../assets/navi_mumbai_logo.png')}/>),
      headerStyle: {
        backgroundColor: '#663366',
      },

      headerTintColor: '#fff',
      headerTitleStyle: {
    },
  }
  },
}
 );

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: DashboardStack,
          },

    Profile : {
        screen: Profile,
    },
    Notification: {
        screen : Notification,
    
    },
  },

  {
    drawerBackgroundColor:"#663366",
    drawerType:'slide',
    drawerWidth:300,
    contentOptions:{
      inactiveTintColor:'white',
      activeBackgroundColor:'white',
      activeTintColor:"black"
    },
    contentComponent:(props) => (
      <View style={{flex:1}}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <TouchableOpacity onPress={()=>
              Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.navigate('LoginScreen')
                  }},
                ],
                { cancelable: false }
              )  
            }>
              <Text style={{margin: 16,fontWeight: 'bold', color:'white'}}>Logout</Text>
            </TouchableOpacity>
          </SafeAreaView>
      </View>
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  },
  );
  
export const MyApp = createAppContainer(MyDrawerNavigator);