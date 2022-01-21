import React from 'react';
import { Text, StatusBar } from 'react-native';
import { ActionBtn } from '../../components/ActionBtn';
import { ActionBtnTxt } from '../../components/ActionBtnTxt';
import { handleSignOut } from "../../functions";
import { Container } from '../../components/Container';

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