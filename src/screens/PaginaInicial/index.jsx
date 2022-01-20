import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../../components/Header';

import Home from '../Home';
import Dispensa from '../Dispensa';
import Lista from '../Lista/';
import Receitas from '../Receitas';
import MinhasReceitas from '../MinhasReceitas';

const Tab = createBottomTabNavigator();

const PaginaInicial = () => {
    return (
        <Tab.Navigator screenOptions={{
            header: (props)  => (
                <Header {...props} />
            )
        }} >
            <Tab.Screen name="Dispensa"
                component={Dispensa} />
            <Tab.Screen name="Lista" component={Lista} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Receitas" component={Receitas} />
            <Tab.Screen name="MinhasReceitas" component={MinhasReceitas} />
        </Tab.Navigator>
    );
};

export default PaginaInicial;