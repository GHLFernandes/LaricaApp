import React from "react";
import { Container, FormContainer,MutedLink,ButtonLinks,Input,SubmitButton,SubmitText, SignUpButton, SignUpText } from "../../database/styles/styles";
import {useNavigation} from '@react-navigation/native';



export default function Login() {
    const navigation: void | any = useNavigation();
    const handleRegister = () => {
        navigation.navigate('SignUp');
      };
    return (
      <Container>
          <FormContainer>
              <Input placeholder="E-mail" />
              <Input placeholder="Senha"  />
          </FormContainer>
          <ButtonLinks>
              <MutedLink>Esqueceu sua Senha?</MutedLink>
          </ButtonLinks>
          <SubmitButton>
              <SubmitText>Entrar</SubmitText>
          </SubmitButton> 
          <SignUpButton onPress={handleRegister}>
            <SignUpText >Cadastrar</SignUpText>     
         </SignUpButton>         
      </Container>
    );
  }