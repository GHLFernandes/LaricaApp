import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from '../../components/Container';
import { NewProduct } from '../../components/Botões'
import { FontAwesome } from '@expo/vector-icons';
const Lista = () => {
    return (
        <Container>
            <StatusBar />
            <Text>LISTA DE COMPRAS</Text>
            <NewProduct>
            <FontAwesome
                name='plus'
                style={{
                    marginHorizontal: 20
                }}
                size={15}
                color={'#fff'}
                onPress={() => console.log('hello')} />

            </NewProduct>
        </Container>
    );
};

export default Lista;