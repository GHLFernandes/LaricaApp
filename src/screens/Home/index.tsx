import React from 'react';
import { SafeAreaView, Text, StatusBar, TouchableOpacity } from 'react-native';
import firebase from '../../database/firebase';
import { Container, MutedLink } from "../../styles/styles";


// import { Container } from './styles';

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
      <MutedLink
        onPress={handleSignOut}
      >
        <Text >Sair</Text>
      </MutedLink>
    </Container>
  );
}

export default Home;