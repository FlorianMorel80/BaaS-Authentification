import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import LogNavigationScreen from './screen/LogNavigationScreen';
import ProfilNavigationScreen from './screen/ProfilNavigationScreen';


export default function NavigationRoot({userId}) {
  return (
    <NavigationContainer>
      {userId === null ? <LogNavigationScreen /> : <ProfilNavigationScreen/>}
    </NavigationContainer>
  );
}
