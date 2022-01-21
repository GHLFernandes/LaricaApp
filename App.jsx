import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from 'expo-app-loading';
import { Container } from './src/components/Container';

import Rotas from './src/Rotas';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratSemiBold": Montserrat_600SemiBold,
    "LobsterRegular": Lobster_400Regular,

  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (<>
    <StatusBar backgroundColor="white" barStyle='dark-content' />
    <Rotas />
  </>
  );
}
