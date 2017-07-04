import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class UserInfoScreen extends React.Component {
  static navigationOptions = {
   title: 'Información de Usuario',
  }; 
	 render() {
	    const { params } = this.props.navigation.state;
	    const { goBack } = this.props.navigation;
	    return (
	      <View>
	        <Text>Información de Usuario</Text> 
	        <Button
		   		title="VOLVER"
		    	onPress={() => goBack() }
		    /> 
	      </View>
    );
  }
}