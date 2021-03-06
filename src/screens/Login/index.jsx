import React, { useEffect, useState } from "react";
import firebase from '../../database/firebase';
import { handleLogin } from "../../functions";
import { Container, Logo, Form, Input,SubmitBtn, BtnLink, SubmitBtnTxt, ActionBtn, ActionBtnTxt, MutedLink } from '../../components/Estilos';



import logo from '../../../assets/icon.png';

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('PaginaInicial');
      } 
    })

    return unsubscribe;
  }, []);

  return (
    <Container>
      <Logo source={logo} />
      <Form>
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
        <BtnLink>
          <MutedLink>Esqueceu sua Senha?</MutedLink>
        </BtnLink>
      </Form>

      <SubmitBtn onPress={() => {
        handleLogin(email, password);
      }} >
        <SubmitBtnTxt>Entrar</SubmitBtnTxt>
      </SubmitBtn>
      <ActionBtn onPress={() => { props.navigation.navigate('SignUp') }}>
        <ActionBtnTxt >Cadastrar</ActionBtnTxt>
      </ActionBtn>
      <BtnLink onPress={() => { props.navigation.navigate('PaginaInicial', { screen: 'Home' }) }}>
        <MutedLink>Entrar como convidado</MutedLink>
      </BtnLink>
    </Container >
  );
}

export default Login;
