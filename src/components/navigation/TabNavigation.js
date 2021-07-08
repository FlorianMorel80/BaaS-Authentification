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

            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#FFF',
                    inactiveTintColor: '#FFF',
                
                    labelStyle: 'white',
                    style: { borderTopWidth: 0,backgroundColor:'#4746C3', borderRadius: 50, width:'90%', height: 50, position:'absolute', left:'5%', bottom:'1%' }
                }}
            >
                {/* <Image 
                source={require('../../../assets/img/splash.png')}/> */}
                <Tab.Screen name="Vos Tâches"
                option={{
                 tabBarIcon: ({size,focused,color}) => {
                    return (
                        <Image style={{width:20, height:20}} source={require('../../../assets/img/splash.png')} />
                    );
                  }}}
                  >
                   
                    {() => <ToDoNavigationScreen data={data} />}
                </Tab.Screen>
                <Tab.Screen name="Profil">
                    {() => <ProfilNavigationScreen data={data}/>}
                </Tab.Screen> 
                 {/* <Tab.Screen name="Profil">

                </Tab.Screen> */}
            </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    
})
export default TabNavigation;