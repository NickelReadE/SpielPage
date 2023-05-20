/*import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableHighlight, Alert } from 'react-native';
import { SparklesIcon } from "react-native-heroicons/solid";


export default function App() {
  return (
    <View style={styles.container}>
      <SparklesIcon fill = "white" stroke = "black"/>
      <Text>All Categories</Text>
      <StatusBar style="auto" />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


import * as React from 'react';
import MainContainer from './navigation/MainContainer';

function App() {
  return (
    <MainContainer/>
  );
}

export default App;