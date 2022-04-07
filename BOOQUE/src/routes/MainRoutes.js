import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//screens
import Home from '../screens/Home'
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Success from '../screens/Success';
import Detail from '../screens/Details';



export default function MainRoutes() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}