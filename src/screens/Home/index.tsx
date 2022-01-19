import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container, SignUpButton, SignUpText } from "../../styles/styles";
import { handleSignOut } from "../../functions/functions";

const Home = (props: any) => {
    return (
        <Container>
            <StatusBar />
            <Text>HOME</Text>
            <SignUpButton
                onPress={() => {
                    handleSignOut(props)
                }
                }
            >
                <SignUpText >Sair</SignUpText>
            </SignUpButton>
        </Container>
    );
};

export default Home;