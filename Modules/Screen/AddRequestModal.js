import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ScrollView, Picker, TextInput } from 'react-native';
import Modal from 'react-native-modal';


export default class AddRequestModal extends Component {
  state = {
    visibleModal: true,
  };

  

  _renderModalContent = () => (
    <View style={styles.modalContent}>
       <ScrollView style = {styles.container} >
          
                <Text style={styles.textStyle}> Add Request for Compost Collection</Text> 
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginHorizontal:5}}></View>
 
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.WardName}  
                       onValueChange={(itemValue, itemPosition) =>  
                        this.setState({WardName: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Ward Name" value="Ward Name" />  
                    <Picker.Item label="Airoli" value="1" />  
                    <Picker.Item label="Belapur" value="2" /> 
                    <Picker.Item label="Koparkhairame" value="3" />
                    <Picker.Item label="Neral" value="3" />  
                    <Picker.Item label="Turbhe" value="3" /> 
                    <Picker.Item label="Vashi" value="3" />  
 

  
 
                </Picker> 


                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.Sector}  
                       onValueChange={(itemValue, itemPosition) =>  
                        this.setState({Sector: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Sector" value="Sector" />  
                    <Picker.Item label="Sector No 1" value="1" />  
                    <Picker.Item label="Sector No 2" value="2" /> 
                    <Picker.Item label="Sector No 3" value="3" />  
 
                </Picker>  

                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.Landmark}  
                       onValueChange={(itemValue, itemPosition) =>  
                        this.setState({Landmark: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Landmark" value="Landmark" />  
                    <Picker.Item label="Landmark No 1" value="1" />  
                    <Picker.Item label="Landmark No 2" value="2" /> 
                    <Picker.Item label="Landmark No 3" value="3" />  
 
                </Picker> 

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "#344953"
               autoCapitalize = "none"/> 

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Discription"
               placeholderTextColor = "#344953"
               autoCapitalize = "none"/>  

               <TextInput style = {{
               margin:10,
               padding:10,
               height: 40,
               borderWidth:1,}}
               underlineColorAndroid = "transparent"
               placeholder = "Quantity (Kg)"
               placeholderTextColor = "#344953"
               autoCapitalize = "none"/>  

               <TextInput style = {{
               margin:10,
               padding:10,
               height: 40,
               borderWidth:1,}}
               underlineColorAndroid = "transparent"
               placeholder = "Mobile No."
               placeholderTextColor = "#344953"
               autoCapitalize = "none"/>  

               <View style={{flexDirection:'row'}}>
               <TouchableOpacity
               style = {{ selfAlign:'left', backgroundColor:'#663366', borderRadius:100, height:50, width:100,marginRight:80}} 
               onPress={() =>
                  this.props.navigation.navigate('')}>
               <Text style={{fontWeight:'bold', textAlign:'center',fontSize:20,margin:10,  color:'#ffffff'}} > Submit </Text>
               </TouchableOpacity>
               <TouchableOpacity
               style = {{ selfAlign:'left', backgroundColor:'#663366', borderRadius:100, height:50, width:100}} 
               onPress={() =>
                  this.props.navigation.navigate('SuccessfulRequestScreen')}>
               <Text style={{fontWeight:'bold', textAlign:'center',fontSize:20,margin:10,  color:'#ffffff'}} > Cancle </Text>
               </TouchableOpacity>
               </View>
                
        </ScrollView>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </View>
  );

  render() {
    return (
      <View style={styles.container}>                                                                                                                                                             
        
        <Modal
          isVisible={this.state.visibleModal}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
        >
          {this._renderModalContent()}
        </Modal>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:300,
  },
  modalContent: {
    height:500,
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  TextContent:{
    textAlign:'center',
    marginTop:270,
    
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  submitButton: {
    borderRadius:70,
    backgroundColor: '#663366',
    padding: 20,
    marginHorizontal: 150,
    marginTop:10,
    marginBottom: 300,
    width:80,
    height:50,
    justifyContent:'center',
 },
 submitButtonText:{
    fontWeight:'bold',
    color: 'white',
    textAlign: 'center',
    margin: -10
 },input: {
  padding:10,
  margin:10,
  height: 50,
  borderWidth:1,
},
textStyle:{ 
   margin:5, 
   fontSize: 16,  
   fontWeight: 'bold',  
   textAlign: 'center',
   color:'#663366'  
},  
pickerStyle:{ 
 padding:10, 
 margin:10,
   height: 30,  
   width: "80%",  
   color: '#344953',  
   justifyContent: 'center'
}  
});  

