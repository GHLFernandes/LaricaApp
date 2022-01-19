import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Home from './src/screens/Home';
import Dispensa from './src/screens/Dispensa/index';
import Lista from './src/screens/Lista/index';
import Receitas from './src/screens/Receitas/index';
import MinhasReceitas from './src/screens/MinhasReceitas/index';
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PaginaInicial = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dispensa" component={Dispensa} />
      <Tab.Screen name="Lista" component={Lista} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Receitas" component={Receitas} />
      <Tab.Screen name="MinhasReceitas" component={MinhasReceitas} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PaginaInicial"
          component={PaginaInicial}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

