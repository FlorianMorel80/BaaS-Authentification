import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ************Components ********************
import RegisterScreen from '../../../screen/RegisterScreen';
import LogInScreen from '../../../screen/LogInScreen';
// ******************************************
const Stack = createStackNavigator();

const LogNavigationScreen = (props, { navigation, route}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LogInScreen"
                options={{
                    header: ()=> null,
                }} 
                component={LogInScreen}/>

            <Stack.Screen
            name="RegisterScreen"
            options={{
                title:'Retourner à la page de connexion'
            }} 
            component={RegisterScreen} />
        </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        
    }

})

export default LogNavigationScreen;