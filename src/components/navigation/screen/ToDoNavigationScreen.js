import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ************Components ********************
import TasksContainer from '../../TasksEpic/TasksContainer';
// ******************************************
const Stack = createStackNavigator();

const ToDoNavigationScreen = (props, { navigation, route}) => {

    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="TasksContainer"
                    options={{
                        header: ()=> null,
                    }} 
                    component={TasksContainer}/>

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