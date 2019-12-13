import React, { Component } from 'react'
import { View, Modal,StyleSheet,Text, ScrollView } from 'react-native'
import { SearchBar, Button} from 'react-native-elements';
import DataTable from '../Component/DataTable';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SuccessfulRequest extends Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
   render() {
    const { search } = this.state;

      return (
         <ScrollView>
         <View style = {styles.container}>
                      
                <SearchBar
                round
                lightTheme
                showLoading
                searchIcon={{ color:'#6336',size: 24 }}
                placeholder="Type Here..."
                containerStyle={{ backgroundColor: "#F5F5F5", padding:5, margin:30 }}
                onChangeText={this.updateSearch}
                value={search}
                />
               <DataTable OpenModal={()=> this.props.navigation.navigate('RequestIdModalScreen')} />
               <TouchableOpacity
               style = {styles.submitButton}                                                                                                                                                                                                                                                                  
               onPress={() => this.props.navigation.navigate('AddRequestModalScreen')}
               >
               <Text style = {styles.submitButtonText} > + </Text>
            </TouchableOpacity> 
         </View>
    </ScrollView>
      )
   }
}
export default SuccessfulRequest

const styles = StyleSheet.create({
   container: {
       margin:5,   

   },

   submitButton: {
       color:'#663366',
   },

  submitButton: {
    borderRadius:70,
    backgroundColor: '#663366',
    padding: 20,
    marginHorizontal: 130,
    marginTop:150,
    marginBottom: 50,
    width:70,
    height:70,
    justifyContent:'center',
  },  
 submitButtonText:{
  fontWeight:'bold',
  color: 'white',
  textAlign: 'center',
  margin: -10,
  fontSize: 40,  

},
});