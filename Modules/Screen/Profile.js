import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Profile extends Component {
  render() {
      return (
      
        <View style={{textAlign:'center', margin:30}} >
          <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
            <Text>Hello Profile</Text>
            </TouchableOpacity>

        </View>
    );
  }
}

export default Profile