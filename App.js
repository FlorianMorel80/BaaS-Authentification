import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"

//-------------------- Personal components ---------------
import TabNavigation from './src/components/navigation/TabNavigation';

import openRealm from './src/database/openRealm';
// --------------------------------------------------------

const App = () => {

  useEffect(() => {
    const bootstrapSync = async () => {
      const realm = await openRealm();

      console.log('ok');
    };

    bootstrapSync();
  }, []);

    return (
			<View style={styles.container}>
        <TabNavigation/>
			</View>


    );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5F5F5',
 
  },
});

export default App;