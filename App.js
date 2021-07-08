import 'react-native-gesture-handler';
import React, {useReducer, useMemo} from 'react';
import {reducer} from './src/redux/reducers/reducer';
import {getActions} from './src/redux/actions/authActions';
import { getApp } from './src/database/realmApp';
import {StatusBar} from 'react-native'

//-------------------- Personal components ---------------
// import TabNavigation from './src/components/navigation/TabNavigation';
import { AuthContext } from './src/redux/contexts/AuthContext.js';
import NavigationRoot from './src/components/navigation/NavigationRoot';

// --------------------------------------------------------

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignout: false,
    userId: null,
  });

  const authContext = useMemo(() => {
    const app = getApp();
    return getActions(app, dispatch);
  }, []);

    return (
      <AuthContext.Provider value={authContext}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
      />
        <NavigationRoot userId={state.userId}/>
      </AuthContext.Provider>
    );
};


export default App;