import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './src/routes/MainRoutes'
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store'

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainRoutes />
        </NavigationContainer>
      </PersistGate>
    </Provider>

  )
}