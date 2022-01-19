import React, { useState } from "react";
import { Container, FormContainer, Input, SignUpButton, SignUpText, SubmitText, SubmitButton, MutedLink, Logo } from "../../styles/styles";
import { handleSignUp } from "../../functions/functions";

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

  handleSignUp(state);

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
      <SubmitButton
        onPress={() => {
          handleSignUp(state)
        }
      }
      >
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>
      <SignUpButton onPress={() => { props.navigation.navigate('Login') }}>
        <SignUpText>Login</SignUpText>
      </SignUpButton>
    </Container>
  );
}

export default SignUp;