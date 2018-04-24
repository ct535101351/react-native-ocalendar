/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import MinimalismCalendar from 'react-native-minimalism-calendar';
export default class App extends Component {
  constructor(props){
     super(props)
     this.state={
        data:"未传值"
     }
     this.DateTransfer=this.DateTransfer.bind(this)
  }
  DateTransfer(cont){
    // Alert.alert(cont)
     this.setState({
        data:cont[0]+'-'+cont[1]+'-'+cont[2]
     })
  }
  
  render() {

    return (
      <View style={styles.container}>
          <TouchableOpacity
            style={{paddingVertical:15,
              paddingHorizontal:30,borderRadius:3,alignItems:'center',justifyContent:'center'}}
              onPress={()=>{}}>
              <Text style={{fontSize:15,color:'black'}}>{this.state.data}</Text>
          </TouchableOpacity>
         <MinimalismCalendar DateTransfer={this.DateTransfer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30
  }
});
