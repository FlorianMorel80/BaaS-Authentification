import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ************Components ********************
import ListScreen from '../../../screen/ListScreen';

// ******************************************
const Stack = createStackNavigator();

const ToDoNavigationScreen = (props, { navigation, route}) => {

    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="ListScreen"
                    options={{
                        header: ()=> null,
                    }} 
                    component={ListScreen}/>

                {/* <Stack.Screen
                name="RegisterScreen"
                options={{
                    title:'Retourner à la page de connexion'
                }} 
                component={RegisterScreen} /> */}
            </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        
    }

})

export default ToDoNavigationScreen;