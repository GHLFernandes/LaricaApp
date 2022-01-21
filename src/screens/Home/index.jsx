import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '../../components/Container';
import MyCarousel from '../../components/Carousel';
import Categorias from '../../components/Categorias';
import AppLoading from 'expo-app-loading';


const Home = () => {
    return (
        <Container>
            <ScrollView>
                <MyCarousel />
                <Categorias />

            </ScrollView >
        </Container>
    );
};

export default Home;