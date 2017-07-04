import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class ChatScreen extends React.Component {

  static navigationOptions= ({ navigation }) => {
    // title: `Chat con ${navigation.state.params.variable}`,
    // headerRight: <Button title="Info" />,
    const { navigate } = navigation;
    const {state, setParams} = navigation;
    // const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      // title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      title: `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          // title={isInfo ? 'Done' : `${user}'s info`}
          title= {`${user}'s info`}
          // onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
          onPress = { () => navigate('UserInfo') }
        />
      ),
    };

  };

  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Cuerpo de la Página. Variable pasada {params.variable}</Text> 
      </View>
    );
  }
}