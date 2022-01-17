import React, { useState } from "react";
import { Container, FormContainer, Input, SignUpButton, SignUpText, ButtonLinks, MutedLink } from "../../styles/styles";
import firebase from "../../database/firebase";

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
      <FormContainer>
        <Input
          placeholder="Nome Completo:"
          onChangeText={value => handleChangeText('name', value)} />
        <Input
          keyboardType='email-address'
          placeholder="E-mail:"
          onChangeText={value => handleChangeText('email', value)} />
        <Input
          keyboardType='phone-pad'
          placeholder="Telefone:"
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
      <SignUpButton onPress={handleSignUp}>
        <SignUpText>Cadastrar</SignUpText>
      </SignUpButton>
      <ButtonLinks  onPress={() => { props.navigation.navigate('Login') } }>
        <MutedLink>Login</MutedLink>
      </ButtonLinks>
    </Container>
  );
}

export default SignUp;