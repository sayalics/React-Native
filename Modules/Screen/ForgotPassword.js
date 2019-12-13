import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet , ScrollView, KeyboardAvoidingView} from 'react-native'
import Logo from '../Component/Logo';

class ForgotPassword extends Component {
   // state = {
   //    email: '',
   //    OTP: ''
   // }
   // handleEmail = (text) => {
   //    this.setState({ email: text })
   // }
   // handleOTP = (text) => {
   //    this.setState({ OTP: text })
   // }
   // Register = (email, OTP) => {
   //    alert('email: ' + email + ' OTP: ' + OTP)
   // }
  
   render() {
      return (
          <ScrollView>
         <KeyboardAvoidingView style = {styles.container} behavior='padding' keyboardVerticalOffset={100}>
         <Logo ht={100} wdth={100} margin={20} bwdth={2} bradius={100}/>
            <Text style={{textAlign: 'center',color: '#663366' ,fontSize:30, height:50}}>
               Forgot Password</Text> 

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(email) => this.setState({ email })}
               />

            <TouchableOpacity
               style = {styles.submitButton}
               // onPress = {
               //    () => this.Register(this.state.mobile)
               // }
               >
               <Text style = {styles.submitButtonText}> Send OTP </Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center',color: '#663366', margin:10}}>Enter OTP received on registered mobile number.</Text>

            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter OTP"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(OTP) => this.setState({ OTP })}
               />
            
            <TouchableOpacity
               style = {styles.submitButton}
               // onPress = {
               //    () => this.Register(this.login)
               // }
               onPress={()=> this.props.navigation.navigate('LoginScreen')}>
               <Text style = {styles.submitButtonText} > Go To Login </Text>
            </TouchableOpacity>

         </KeyboardAvoidingView>
         </ScrollView>
      )
   }
}
export default ForgotPassword

const styles = StyleSheet.create({
   container: {
   marginTop: 100
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