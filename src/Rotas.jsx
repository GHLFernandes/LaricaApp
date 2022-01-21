import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { corPrimaria, corPrimariaClaro } from './components/UI/variaveis';
import { Dimensions } from 'react-native';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Perfil from './screens/Perfil';
import Home from './screens/Home';
import Dispensa from './screens/Dispensa';
import Lista from './screens/Lista/';
import Receitas from './screens/Receitas';
import { Header, HeaderTitle } from './components/Header';

const Stack = createNativeStackNavigator();
const { width: screenWidth } = Dimensions.get('window');

const Rotas = () => {
    const Tab = createBottomTabNavigator();

    const PaginaInicial = () => {
        return (
            <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={({ route }) => ({
                    header: (props) => (
                        <Header {...props} />
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Receitas') {
                            iconName = focused ? 'leanpub' : 'book';
                        } else if (route.name === 'Lista') {
                            iconName = focused ? 'list-ul' : 'list-ul';
                        } else if (route.name === 'Dispensa') {
                            iconName = focused ? 'th-large' : 'th-large';
                        } else if (route.name === 'Perfil') {
                            iconName = focused ? 'user' : 'user';
                        }

                        size = 25;

                        // You can return any component that you like here!
                        return <FontAwesome name={iconName} size={size} color={color} />;
                    },
                    tabBarItemStyle: {
                        backgroundColor: 'white'
                    },
                    tabBarActiveTintColor: `${corPrimaria}`,
                    tabBarInactiveTintColor: `${corPrimariaClaro}`,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        height: screenWidth - 200,
                        width: '100%',
                        paddingTop: 1,
                        backgroundColor: `${corPrimaria}`,
                    },
                    tabBarLabelStyle: {
                        width: '100%',
                        fontWeight: 'bold',
                        fontSize: 10,
                        lineHeight: 13,
                        marginBottom: 5,
                        borderLeftWidth: .5,
                        borderLeftColor: `${corPrimariaClaro}`,
                    },
                    tabBarIconStyle: {
                        flex: 1,
                        borderLeftWidth: .5,
                        borderLeftColor: `${corPrimariaClaro}`,
                        marginTop: 5,
                        width: '100%',
                        textAlign: 'center',
                        justifyContent: 'center',

                    },

                }
                )}
            >
                <Tab.Screen name="Lista" component={Lista} />
                <Tab.Screen name="Receitas" component={Receitas} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Dispensa" component={Dispensa} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="PaginaInicial" component={PaginaInicial} options={{ headerShown: false }} />
                <Stack.Screen name="Perfil"
                    component={Perfil}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <HeaderTitle {...props} />,
                    })}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;