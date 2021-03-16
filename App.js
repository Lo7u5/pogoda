import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo world</Text>
      <View style={styles.abzac}>
        <Text style={styles.text}>opa opa opa</Text>
      </View>
      <View style={styles.abzac}>
        <Text style={styles.text}>opa opa opa</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  abzac : {
    marginTop: 50,
  },
  text: {
    fontSize: 26,
    color:  '#bada55',
    fontWeight: 'bold',
  }
});
