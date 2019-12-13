import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';


export default class RequestIdModal extends Component {
  state = {
    visibleModal: true,
  };

  

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={styles.TextContent}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ 
      fontSize: 20,  
      fontWeight: 'bold',  
      textAlign: 'center',
      color:'#663366',  
      marginLeft:60,
      }}>Request ID: 6-2019-0002!</Text>
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SuccessfulRequestScreen')}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:20, color:'#000'}} > X </Text>
        </TouchableOpacity> */}
      </View> 
            <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginHorizontal:40}}></View>

     
                  <View style={{alignSelf:'center', margin:20, fontSize:22}}>
                    <Text > Date : 24/06/2019 </Text>
                    <Text > Time : 10:53:15 </Text>
                    <Text > Address: Apartment, flatno, landmark, sector, wardname, mumbai-pin </Text>
                    <Text > Description: Details about Compost</Text>
                    <Text > Quantity : 15kg</Text>
                    <Text > Status : Inprogress</Text>
                    <Text > Remarks : Normal</Text>
                    <Text > Vechicle no: MN 43 xx 0000</Text>
                    </View>
                    
                    <TouchableOpacity
               style = {styles.submitButton}                                                                                                                                                                                                                                                                  
               onPress={() => this.props.navigation.navigate('SuccessfulRequestScreen')}
               >
               <Text style = {styles.submitButtonText} > OK </Text>
            </TouchableOpacity>
                   </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height:400,
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
 },
});