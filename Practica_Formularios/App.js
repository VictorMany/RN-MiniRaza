import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomePage';
import RegisterPage from './src/pages/RegisterPage';


const Stack = createStackNavigator();

const myApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={RegisterPage} />
      </Stack.Navigator>



    </NavigationContainer>


  )
}

export default myApp