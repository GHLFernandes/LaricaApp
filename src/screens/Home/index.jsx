import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Container } from '../../components/Estilos/index';
import MyCarousel from '../../components/Carousel';
import Categorias from '../../components/Categorias';
import AppLoading from 'expo-app-loading';


const Home = () => {
    return (
        <Container>
            <StatusBar backgroundColor="black" barStyle='dark-content' />
            <ScrollView>
                <MyCarousel />
                <Categorias />

            </ScrollView >
        </Container>
    );
};

export default Home;