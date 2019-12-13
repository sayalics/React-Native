import React, { Component } from 'react'
import { ScrollView,Alert, KeyboardAvoidingView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Logo from '../Component/Logo';

class Login extends Component {

   // state = {
   //    email: '',
   //    password: ''
   // }

   // Login() {
   //    const { email } = this.state;
  
   //    Alert.alert('Successfully Log', `${email}`);
   //  }
  
   // handleEmail = (text) => {
   //    this.setState({ email: text })
   // }
   // handlePassword = (text) => {
   //    this.setState({ password: text })
   // }
   // login = (email, pass) => {
   //    alert('email: ' + email + ' password: ' + pass)
   // }

   render() {
      return (
         <ScrollView>
         <KeyboardAvoidingView style = {styles.container}  behavior='padding' keyboardVerticalOffset={100}>           
         <Logo ht={100} wdth={100} margin={20} bwdth={2} bradius={100}/>
            <Text style={{textAlign: 'center',color: '#663366' ,fontSize:50, height:100}}>
               Login</Text>            
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(email) => this.setState({ email })}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#6336"
               autoCapitalize = "none"
               // onChangeText={(password) => this.setState({ password })}
               />

            <TouchableOpacity
               style = {styles.submitButton}
               
               // onPress={this.Login.bind(this)}
               onPress={() => this.props.navigation.navigate('SuccessfulRequestScreen')}
               >
               <Text style = {styles.submitButtonText} > Sign In </Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center' ,fontSize:16, textDecorationLine:'underline', color:'#663366'} }
            onPress={() =>
               this.props.navigation.navigate('ForgotPasswordScreen')}> Forgot password? </Text>
            <Text style={{textAlign: 'center' ,textDecorationLine:'underline',fontSize:18, padding:10 ,color:'#663366'}}
            onPress={() =>
               this.props.navigation.navigate('RegistrationScreen')}>
                Create new account
            </Text>
         </KeyboardAvoidingView>
         </ScrollView>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      flex:1,
marginTop: 100   },
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