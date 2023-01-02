import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Routers />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;

