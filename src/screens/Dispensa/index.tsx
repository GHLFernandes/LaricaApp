import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container, SignUpButton, SignUpText } from "../../styles/styles";
import { handleSignOut } from "../../functions/functions";

const Dispensa = (props) => {
    return (
        <Container>
            <StatusBar />
            <Text>DISPENSA</Text>
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

export default Dispensa;