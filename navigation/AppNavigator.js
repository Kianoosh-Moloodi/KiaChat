import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './MainNavigator';
import { AuthScreen } from '../screens/AuthScreen';

export const AppNavigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};
