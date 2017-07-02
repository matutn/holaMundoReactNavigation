import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

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

class ChatScreen extends React.Component {

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


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('miMundo', () => SimpleApp);
