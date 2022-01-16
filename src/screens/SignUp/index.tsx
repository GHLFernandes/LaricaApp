import React from "react";
import { Container, FormContainer,Input,SignUpButton, SignUpText } from "../../database/styles/styles";

export default function SignUp() {
    return (
      <Container>
          <FormContainer>
              <Input placeholder="Nome" />
              <Input placeholder="Email"  />
              <Input placeholder="Telefone"  />
          </FormContainer>
          <SignUpButton>
            <SignUpText>Cadastrar</SignUpText>    
          </SignUpButton>         
      </Container>
    );
  }