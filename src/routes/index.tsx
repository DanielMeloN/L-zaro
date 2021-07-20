import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNavigator from './homeStack.routes';



const Routes = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

export default Routes;