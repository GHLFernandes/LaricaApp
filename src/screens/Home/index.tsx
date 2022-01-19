import React from 'react';
import { Text, StatusBar } from 'react-native';
import firebase from '../../database/firebase';
import { Container, SignUpButton ,SignUpText } from "../../styles/styles";

const Home: React.FC = (props) => {
  const handleSignOut = async () => {
    firebase.auth
      .signOut()
      .then(() => {
        props.navigation.navigate('Login');
      })
      .catch(error => alert(error.message))
  };

  return (

    <Container>
      <StatusBar />
      <Text>HOME</Text>
      <SignUpButton
        onPress={handleSignOut}
      >
        <SignUpText >Sair</SignUpText>
      </SignUpButton>
    </Container>
  );
}

export default Home;