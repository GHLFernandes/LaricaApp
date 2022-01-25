import React from 'react';
import { Text, StatusBar } from 'react-native';


import { handleSignOut } from "../../functions";
import { Container, ActionBtn, ActionBtnTxt } from '../../components/Estilos';

const Perfil = (props) => {
    return (
        <Container>
            <StatusBar />
            <Text>PERFIL</Text>
            <ActionBtn
                onPress={() => {
                    handleSignOut(props)
                }
                }
            >
                <ActionBtnTxt >Sair</ActionBtnTxt>
            </ActionBtn>
        </Container>
    );
};

export default Perfil;