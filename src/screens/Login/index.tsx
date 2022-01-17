import React, { useEffect, useState } from "react";
import { Container, FormContainer, MutedLink, ButtonLinks, Input, SubmitButton, SubmitText, SignUpButton, SignUpText } from "../../styles/styles";
import firebase from '../../database/firebase';

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

  const handleLogin = () => {
    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logado como:', user.email);
      })
      .catch(error => alert("Faça seu cadastro, safad@"))
  };

  return (
    <Container>
      <FormContainer>
        <Input
          keyboardType='email-address'
          placeholder="E-mail:"
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
      </FormContainer>
      <ButtonLinks>
        <MutedLink>Esqueceu sua Senha?</MutedLink>
      </ButtonLinks>
      <SubmitButton onPress={handleLogin}>
        <SubmitText>Entrar</SubmitText>
      </SubmitButton>
      <SignUpButton onPress={() => { props.navigation.navigate('SignUp') } }>
        <SignUpText >Cadastrar</SignUpText>
      </SignUpButton>
    </Container>
  );
}

export default Login;