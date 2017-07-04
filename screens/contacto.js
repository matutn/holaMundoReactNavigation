import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class ContactoScreen extends React.Component {
  static navigationOptions = {
   title: 'MATI',
  }; 
	 render() {
	    const { params } = this.props.navigation.state;
	    const { goBack } = this.props.navigation;
	    return (
	      <View>
	        <Text>Cuerpo...</Text>
	        <Button
		   		title="VOLVER"
		    	onPress={() => goBack() }
		    /> 
	      </View>
    );
  }
}