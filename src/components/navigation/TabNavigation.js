import * as React from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

import LogNavigationScreen from './screen/LogNavigationScreen' ;
import ToDoNavigationScreen from './screen/ToDoNavigationScreen';


const TabNavigation = (props) => {
    const {data} = props
    // console.log('tab', data)
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'white',
                
                    labelStyle: 'white',
                    style: { borderTopWidth: 0,backgroundColor:'lightblue', borderRadius: 50, width:'90%', height: 50, position:'absolute', left:'5%', bottom:'1%' }
                }}
            >
                <Tab.Screen name="Home">
                    {/* <Image style={{width:20, height:20}} source={require('../../assets/img/movie.gif')} /> */}
                    {() => <LogNavigationScreen data={data} />}
                </Tab.Screen>
                <Tab.Screen name="ToDo">
                    {() => <ToDoNavigationScreen data={data}/>}
                </Tab.Screen> 
                 {/* <Tab.Screen name="Profil">

                </Tab.Screen> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    
})
export default TabNavigation;