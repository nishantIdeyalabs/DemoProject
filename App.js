import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import page1 from './Source/Functionalities/page1';
import MainPage from './Source/MainPage';
import Fingerprint from './Source/Functionalities/Fingerprint';
import ScrollToDown from './Source/Functionalities/ScrollToDown';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{title: 'MainPage', headerShown: false}}
        />
        <Stack.Screen
          name="page1"
          component={page1}
          options={{title: 'page1', headerShown: false}}
        />
        <Stack.Screen
          name="Fingerprint"
          component={Fingerprint}
          options={{title: 'Fingerprint', headerShown: false}}
        />
        <Stack.Screen
          name="ScrollToDown"
          component={ScrollToDown}
          options={{title: 'ScrollToDown', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
