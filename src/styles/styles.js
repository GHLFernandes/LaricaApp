import styled from 'styled-components';

export const Container = styled.View.attrs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})
``;

export const FormContainer = styled.View `
  width: 70%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.1);
`;

export const MutedLink = styled.Text `
position: relative;
line-height: 15px;
margin: 10px 0;
font-size: 11px;
color: rgba(150, 150, 150, 0.9);
font-weight: 500;
text-decoration: none;
font-family: MontserratRegular;
`;

export const ButtonLinks = styled.TouchableOpacity `
  
`;

export const Input = styled.TextInput `
  width: 100%;
  line-height: 20px;
  height: 42px;
  border: 1px solid rgba(200, 200, 200, 0.9);
  border-radius: 12px;
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 12px;
  font-family: MontserratRegular;
  border-color: #e8c7ab;
`;

export const SubmitButton = styled.TouchableOpacity `
  width: 70%;
  height: 38px;
  background-color: #E19046;
  justify-content: center;
  align-items: center;
  color: #ccc;
  margin-top: 0px;
  border-radius: 8px;
`;

export const SignUpButton = styled.TouchableOpacity `
  width: 70%;
  height: 38px;
  border: 1px solid #E19046;;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-radius: 8px;
`;

export const SubmitText = styled.Text `
 font-size: 14px;
 line-height: 20px;
 color: #f1faee;
 font-family: MontserratBold;
`;

export const SignUpText = styled.Text `
 font-size: 14px;
 font-family: MontserratRegular;
 line-height: 20px;
 color: #E19046;
`;

export const Logo = styled.Image `
  width: 180px;
  height: 180px;
`;