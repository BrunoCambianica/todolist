import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/ynov.png')} style={{ width: 150, height: 70 }} />
        <Text> TodoList </Text>
        <Text> V 1.0 </Text>
        <Text> Bruno Cambianica </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
