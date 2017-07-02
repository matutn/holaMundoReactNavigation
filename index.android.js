import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component { 
  
  static navigationOptions = {
   title: 'Welcome',
  }; 

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <Text>Hello, Chat App!</Text>
          <Button
          onPress={() => navigate('Chat')}
          title="Chat"
          />
      </View>
      );
  } 
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
  };
  render() {
    return (
      <View>
        <Text>Chat</Text>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('miMundo', () => SimpleApp);
