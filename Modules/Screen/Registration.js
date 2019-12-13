import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Logo from '../Component/Logo';

class Registration extends Component {
   
   // state = {
   //    name: '',
   //    mobile: '',
   //    email: '',
   //    password: '',
   //    conformpass:''
   // }
   // handleName = (text) => {
   //    this.setState({ name: text })
   // }

   // handleEmail = (text) => {
   //    this.setState({ email: text })
   // }
   // handleMobile = (text) => {
   //    this.setState({ mobile: text })
   // }
   // handleLocation = (text) => {
   //    this.setState({ location: text })
   // }
   // handlePassword = (text) => {
   //    this.setState({ password: text })
   // }
   // handleConfirmpass = (text) => {
   //    this.setState({ confirmpass: text })
   // }
   // Register = (name, mobile,email, pass, conformpass) => {
   //    alert('name: ' + name + 'mobile: ' +mobile + 'email: ' + email + ' password: ' + pass+ 'conformpass: ' +conformpass)
   // }
   render() {
      return (
      <ScrollView>
         <KeyboardAvoidingView style = {styles.container}  behavior='padding' keyboardVerticalOffset={10}>
            <Logo ht={100} wdth={100} margin={20} bwdth={2} bradius={100}/>
            <Text style={{alignSelf: 'center',color: '#663366' ,fontSize:40 , margin:5}}>
               Registration Form</Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(name) => this.setState({ name })}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(email) => this.setState({ email })}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Mobile"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(password) => this.setState({ password })}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Location"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(location) => this.setState({ location })}
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(password) => this.setState({ password })}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Confirm Password"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(confirmpass) => this.setState({ confirmpass })}
               />

            <TouchableOpacity
               style = {styles.submitButton} 
               // onPress = {
               //    () => this.Register(this.state.name,
               //     this.state.email,
               //      this.state.mobile,
               //       this.state.location, 
               //       this.state.password,
               //        this.state.conformpass)}
               onPress={()=>this.props.navigation.navigate('LoginScreen')}>
               <Text style = {styles.submitButtonText}> Sign Up </Text>
            </TouchableOpacity>
         </KeyboardAvoidingView>
         </ScrollView>
      )
   }
}
export default Registration

const styles = StyleSheet.create({
   container: {
      marginTop:50
   },
   input: {
      borderRadius: 30,
      padding:10,
      marginHorizontal: 30,
      margin:10,
      height: 40,
      borderColor: '#663366',
      borderWidth: 1
   },
   submitButton: {
      borderRadius:70,
      backgroundColor: '#663366',
      padding: 20,
      marginHorizontal: 70,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      fontWeight:'bold',
      color: 'white',
      textAlign: 'center',
      margin: -10


   }
})