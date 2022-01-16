import React from "react";
import { Container, FormContainer,MutedLink,ButtonLinks,Input,SubmitButton,SubmitText, SignUpButton, SignUpText } from "../../database/styles/styles";

export default function Login() {
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
          <SignUpButton>
            <SignUpText>Cadastrar</SignUpText>    
          </SignUpButton>         
      </Container>
    );
  }