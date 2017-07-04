import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

/*Comento home.js ya que ahora el Home pasan a ser las distintas páginas del TabNavigator*/
// import HomeScreen from './screens/home';

import ChatScreen from './screens/chat';
import RecentChatsScreen from './screens/chat_RecentChats';
import AllContactsScreen from './screens/chat_AllContacts';
import UserInfoScreen from './screens/userInfo';
import ContactoScreen from './screens/contacto';

const HomeScreen = TabNavigator({
  RECIENTES: { screen: RecentChatsScreen },
  CONTACTOS: { screen: AllContactsScreen },
});

const SimpleApp = StackNavigator(
{
  // Index principal con Tabs
  Home: { screen: HomeScreen },
  // RECIENTES
  Chat: { screen: ChatScreen },
  UserInfo: {screen: UserInfoScreen },
  // CONTACTOS
  Contacto: {screen: ContactoScreen},
},

{
  // Config
  // mode: Platform.OS === 'ios' ? 'modal' : 'card',

}

);

AppRegistry.registerComponent('miMundo', () => SimpleApp);
