import React, { useEffect, useState } from "react";
import { Container, FormContainer, MutedLink, ButtonLinks, Input, SubmitButton, SubmitText, SignUpButton, SignUpText, Logo } from "../../styles/styles";
import firebase from '../../database/firebase';
import { handleLogin } from "../../functions/functions";

import logo from '../../../assets/icon.png';

const Login: React.FC = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        props.navigation.replace("Home");
      } 
    })

    return unsubscribe;
  }, []);

  return (
    <Container>
      <Logo source={logo} />
      <FormContainer>
        <Input
          keyboardType='email-address'
          placeholder="E-mail:"
          autoComplete="email"

          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Senha: '}
          maxLength={14}
          minLength={8}
          secureTextEntry={true}
        />
        <ButtonLinks>
          <MutedLink>Esqueceu sua Senha?</MutedLink>
        </ButtonLinks>
      </FormContainer>

      <SubmitButton onPress={() => {
        handleLogin(email, password);
      }} >
        <SubmitText>Entrar</SubmitText>
      </SubmitButton>
      <SignUpButton onPress={() => { props.navigation.navigate('SignUp') }}>
        <SignUpText >Cadastrar</SignUpText>
      </SignUpButton>
      <ButtonLinks onPress={() => { props.navigation.navigate('PaginaInicial', { screen: 'Home' }) }}>
        <MutedLink>Entrar como convidado</MutedLink>
      </ButtonLinks>
    </Container >
  );
}

export default Login;
