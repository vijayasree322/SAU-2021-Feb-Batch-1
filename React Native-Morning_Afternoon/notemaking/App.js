import { StatusBar } from 'expo-status-bar';
import React from 'react';

import  { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import ViewNotes from "./components/ViewNotes";
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AddNote" component={AddNote} />
      <Stack.Screen name="ViewNotes" component={ViewNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
export default App;