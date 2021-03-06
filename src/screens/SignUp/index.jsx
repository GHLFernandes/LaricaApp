import React, { useState } from "react";
import { handleSignUp } from "../../functions";
import { Container, Logo, Form, Input, SubmitBtn,  ActionBtn, ActionBtnTxt, SubmitBtnTxt } from '../../components/Estilos';



import logo from '../../../assets/icon.png';

const SignUp = (props) => {

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    pass: "",
    policy: false
  })

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  handleSignUp(state);

  return (
    <Container>
      <Logo source={logo} />
      <Form>
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
      </Form>
      <SubmitBtn
        onPress={() => {
          handleSignUp(state)
        }
      }
      >
        <SubmitBtnTxt>Cadastrar</SubmitBtnTxt>
      </SubmitBtn>
      <ActionBtn onPress={() => { props.navigation.navigate('Login') }}>
        <ActionBtnTxt>Login</ActionBtnTxt>
      </ActionBtn>
    </Container>
  );
}

export default SignUp;