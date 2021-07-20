import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Cadastro , Inicio} from '../pages';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;