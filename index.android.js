import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component { 
  
  static navigationOptions = {
   title: 'Welcome',
  }; 

  render() {

    return (
      <View>
          <Text>Hello, Navigation!</Text>
      </View>
      );
  } 
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
/*  Chat: { screen: ChatScreen },*/
});

AppRegistry.registerComponent('miMundo', () => SimpleApp);
