import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";

export default class AllContactsScreen extends React.Component {
  render() {
  	const { navigate } = this.props.navigation;
    return (
       	<View>
	    	<Text>Listado de Contactos</Text>
		    <Button
		    onPress={() => navigate('Contacto', {user:'Mati' }) }
		   	title="MATI"
		    />
	    </View>
    );
  }
}
