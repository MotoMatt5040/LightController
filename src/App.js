import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRouters from './routers/StackRouters';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackRouters />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;

