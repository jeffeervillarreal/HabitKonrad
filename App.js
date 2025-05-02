import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAll();

const App = () => {
  return <AppNavigator />;
};

export default App;