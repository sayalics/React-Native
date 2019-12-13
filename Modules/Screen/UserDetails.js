import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native'
import Logo from '../Component/Logo';
import { Button } from 'react-native-elements';

class UserDetails extends Component {
   render() {
      return (
         <ScrollView>
         <View style = {styles.container}>
         <Logo ht={100} wdth={100} margin={20} bwdth={2} bradius={100}/>
            <Text style={{margin:1,textAlign: 'center',color: '#663366' ,fontSize:30}}>
               User Details</Text>  
               <TouchableOpacity
               style = {styles.submitButton}>
                   <Text style = {styles.submitButtonText}
                   onPress={() =>
                     this.props.navigation.navigate('SuccessfulRequest')}> Successful Request </Text>
               </TouchableOpacity>
               <TouchableOpacity
               style = {styles.submitButton}>
                   <Text style = {styles.submitButtonText}> Pending Request </Text>
               </TouchableOpacity>
               <TouchableOpacity
               style = {styles.submitButton}>
                   <Text style = {styles.submitButtonText}> Cancelled Request </Text>
               </TouchableOpacity>
               <TouchableOpacity
               style = {styles.submitText}>
                  <Text style={{fontStyle:'normal',color:'#ffffff', fontSize:50, alignSelf:'center', }}
                  onPress={() =>
                     this.props.navigation.navigate('AddRequestModal')}>+</Text>
               </TouchableOpacity>        
               </View>
         </ScrollView>
         
      )
   }
}
export default UserDetails

const styles = StyleSheet.create({
   container: {
      margin:10
   }, 

   submitButton: {
    borderRadius: 5,
    backgroundColor: '#663366',
    marginHorizontal: 69,
    margin: 20,
    height: 50,
   },
  
   submitButtonText:{
       textAlign:'center',
       color:'white',
       marginVertical:10,
        fontSize: 20
   },

   submitText:{ 
   backgroundColor: '#663366',    
   alignSelf:'center',
   width:80,
   height:80,
   borderRadius: 50

   }

})