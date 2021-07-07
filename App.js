import 'react-native-gesture-handler';
import React, {useReducer, useMemo} from 'react';
import {reducer} from './src/redux/reducers/reducer';
import {getActions} from './src/redux/actions/authActions';
import { AuthContext } from './src/redux/contexts/AuthContext';
import { getApp } from './src/database/realmApp';

//-------------------- Personal components ---------------
import TabNavigation from './src/components/navigation/TabNavigation';
import NavigationRoot from './src/components/navigation/NavigationRoot'
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
        <NavigationRoot userId={state.userId}/>
      </AuthContext.Provider>
    );
};


export default App;