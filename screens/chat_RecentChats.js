import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { TabNavigator,StackNavigator } from "react-navigation";

export default class RecentChatsScreen extends React.Component {
  render() {
  	const { navigate } = this.props.navigation;
    return (
    	<View>
	    	<Text>Listado de chats recientes</Text>
		    <Button
		    onPress={() => navigate('Chat', { variable: 'variable_Pasada', user:'Mati' }) }
		   	title="Chat con Mati"
		    />
	    </View>
    );
  }
}