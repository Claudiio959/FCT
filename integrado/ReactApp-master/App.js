/**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     * @flow
     */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import Registro from './screens/Registro';
import Anyadir from './screens/Anyadir';
import Actualizar from './screens/Actualizar';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export const ListaScreens = createStackNavigator({
  Login: { screen: Login },
  Inicio: { screen: Inicio },
  Registro: {screen: Registro},
  Anyadir: {screen: Anyadir},
  Actualizar: {screen: Actualizar}
},
  { initialRoutename: 'Login' },
)

const AppContainer = createAppContainer(ListaScreens);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

