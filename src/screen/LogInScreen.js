import React from 'react';
import {View} from 'react-native';

import LoginForm from '../components/form/LoginForm'

const LogInScreen = ({navigation}) => {
    return(
        <View>
            <LoginForm navigation = {navigation}/>
        </View>
    );
}

export default LogInScreen;