import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import LogNavigationScreen from './screen/LogNavigationScreen';
// import TabNavigation from './TabNavigation';


export default function NavigationRoot({userId}) {
  return (
    <NavigationContainer>
      {userId === null ? <LogNavigationScreen /> : <LogNavigationScreen/>}
    </NavigationContainer>
  );
}
