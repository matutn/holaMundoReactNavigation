import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class ChatScreen extends React.Component {

  static navigationOptions= ({ navigation }) => ({
    title: `Chat con ${navigation.state.params.variable}`,
  });

  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Cuerpo de la Página</Text> 
      </View>
    );
  }
}