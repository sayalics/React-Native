import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Request ID', 'Quantity', 'Date', 'Delete'],
      TableWrapper:[60,60,60,60],
      tableData: [
        [(<TouchableOpacity onPress={this.props.OpenModal}>
          <Text>6-2019-0002</Text>
        </TouchableOpacity>), '5 kg', '24/06/2019',''],
        ['6-2019-0001', '15kg', '24/06/2019','']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        
        <Table>
          <Row data={state.tableHead} flexArr={[1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Rows data={state.tableData} flexArr={[1,1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
        
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { padding:10, paddingTop: 30,alignSelf:'center', backgroundColor: '#fff', marginHorizontal: 20, width:350 },
  head: {  height: 60,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  row: {  height: 40  },
  text: { textAlign: 'center' }
});