import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Perfil from './screens/Perfil';
import Home from './screens/Home';
import Dispensa from './screens/Dispensa';
import Lista from './screens/Lista/';
import Receitas from './screens/Receitas';
import { Header, HeaderTitle } from './components/Header';

const Stack = createNativeStackNavigator();

const Rotas = () => {
    const Tab = createBottomTabNavigator();

    const PaginaInicial = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
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
                        }

                        size = 28;

                        // You can return any component that you like here!
                        return <FontAwesome name={iconName} size={size} color={color} />;
                    },
                    header: (props) => (
                        <Header {...props} />
                    ),
                    tabBarItemStyle:{
                        backgroundColor: 'white'
                    },
                    tabBarActiveTintColor: '#E19046',
                    tabBarInactiveTintColor: '#E8C7AB',
                    tabBarStyle: {
                        height: 58,
                        width: '100%',
                        paddingTop:1,
                        backgroundColor: '#E8C7AB',
                    },
                    tabBarLabelStyle: {
                        width: '100%',
                        fontWeight: 'bold',
                        fontSize: 12,
                        lineHeight: 13,
                        marginBottom: 5,
                        
                        borderLeftWidth: .5,
                        borderLeftColor: '#E8C7AB',
                    },
                    tabBarIconStyle: {
                        flex:1,
                        borderLeftWidth: .5,
                        borderLeftColor: '#E8C7AB', 
                        marginTop: 5,
                        width: '100%', 
                        textAlign: 'center', 
                        justifyContent: 'center',

                    },

                }
                )}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Receitas" component={Receitas} />
                <Tab.Screen name="Lista" component={Lista} />
                <Tab.Screen name="Dispensa"
                    component={Dispensa} />
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