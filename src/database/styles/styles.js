import styled from 'styled-components';

export const Container = styled.View.attrs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  })``;
  
export const FormContainer = styled.View`
  width: 70%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.1);
`
export const MutedLink = styled.Text`
font-size: 11px;
color: rgba(150, 150, 150, 0.9);
font-weight: 500;
text-decoration: none;
`

export const ButtonLinks = styled.TouchableOpacity`
  
`

export const Input = styled.TextInput`
  width: 100%;
  height: 42px;
  border: 1px solid rgba(200, 200, 200, 0.9);
  border-radius: 12px;
  margin-bottom: 5px;
  padding: 0px 10px;
  font-size: 12px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 70%;
  height: 38px;
  background-color: #ae2012;
  justify-content: center;
  align-items: center;
  color: #ccc;
  margin-top: 10px;
  border-radius: 8px;

`;
export const SignUpButton = styled.TouchableOpacity`
  width: 70%;
  height: 38px;
  border: 1px solid #ae2012;;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 8px;

`;
export const SubmitText = styled.Text`
 font-size: 14px;
 font-weight: 500;
 color: #f1faee;
`
export const SignUpText = styled.Text`
 font-size: 14px;
 font-weight: 500;
 color: #ae2012;
`