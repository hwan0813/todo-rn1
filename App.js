import React from 'react';
import { StyleSheet, Text, View, StatusBar,Dimensions,TextInput } from 'react-native';

const {height, width } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barstyle="Light-content"/>
        <Text style={styles.title}>kawai todo!</Text>
        <View style={styles.card}>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title:{
    color: "white",
    fontSize: 30,
    marginTop: 40,
    fontWeight:"200",
    marginBottom: 30,
   },
   card:{
     backgroundColor:"white",
     flex:1,
     width:width-25,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
      
    },
   input:{},
});
