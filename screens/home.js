import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class HomeScreen extends React.Component { 
  
  static navigationOptions = {
   title: 'BIENVENIDO',
  }; 

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <Text>Cuerpo de la Página</Text>
          <Button
          onPress={() => navigate('Chat', { variable: 'Mati' })}
          title="Chat"
          />
      </View>
      );
  } 
}