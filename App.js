import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'

import AuthProvider from './src/contexts/auth'
import Routes from './src/routes'

import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular, 
    Archivo_700Bold,
    Poppins_400Regular, 
    Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
    <NavigationContainer>
      <StatusBar style='light' backgroundColor="#03758F" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
}

