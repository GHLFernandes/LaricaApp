import React, { useState } from "react";
import { Container, FormContainer, Input, SignUpButton, SignUpText, SubmitText, SubmitButton, MutedLink, Logo } from "../../styles/styles";
import firebase from "../../database/firebase";

import logo from '../../../assets/icon.png';

const SignUp: React.FC = (props) => {

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    pass: "",
    policy: false
  })

  const handleChangeText = (name: any, value: any) => {
    setState({ ...state, [name]: value });
  };

  const handleSignUp = async () => {
    //verifico se todos os campos são válidos minimamente
    if (state.name === '' || state.email === '' || state.phone === '' || state.pass === '') {
      alert("Todos os campos são obrigatórios");
    } else {        //caso seja, realizar a criação do usuário no bd e na autenticação 
      firebase.auth
        .createUserWithEmailAndPassword(state.email, state.pass)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log("Usuário '", user.email + "' registrado");
        })
        .catch(error => alert(error.message));

      await firebase.db.collection('users').add({
        name: state.name,
        email: state.email,
        phone: state.phone,
        pass: state.pass
      });
      alert("Usuário registrado com sucesso!");
    }
  };

  return (
    <Container>
      <Logo source={logo} />
      <FormContainer>
        <Input
          placeholder="Nome Completo:"
          autoComplete="name"
          onFocus={() => {
            
          }}
          onChangeText={value => handleChangeText('name', value)} />
        <Input
          keyboardType='email-address'
          placeholder="E-mail:"
          autoComplete="email"
          onChangeText={value => handleChangeText('email', value)} />
        <Input
          keyboardType='phone-pad'
          placeholder="Telefone:"
          autoComplete="tel-device"
          onChangeText={value => handleChangeText('phone', value)}
        />
        <Input
          onChangeText={value => handleChangeText('pass', value)}
          placeholder={'Senha: *********'}
          maxLength={14}
          minLength={8}
          secureTextEntry
        />
      </FormContainer>
      <SubmitButton onPress={handleSignUp}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>
      <SignUpButton onPress={() => { props.navigation.navigate('Login') }}>
        <SignUpText>Login</SignUpText>
      </SignUpButton>
    </Container>
  );
}

export default SignUp;