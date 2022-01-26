import styled from 'styled-components';
import { corPrimaria } from '../../components/UI/variaveis';

export const ActionBtn = styled.TouchableOpacity `
  width: 70%;
  height: 38px;
  border: 1px solid ${corPrimaria};
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-radius: 8px;
`;

export const ActionBtnTxt = styled.Text `
 font-size: 14px;
 font-family: MontserratRegular;
 line-height: 20px;
 color: ${corPrimaria};
`;
export const BtnLink = styled.TouchableOpacity `
  
`;

export const SubmitBtn = styled.TouchableOpacity `
  width: 70%;
  height: 38px;
  background-color: ${corPrimaria};
  justify-content: center;
  align-items: center;
  color: #ccc;
  margin-top: 0px;
  border-radius: 8px;
`;
export const SubmitBtnTxt = styled.Text `
 font-size: 14px;
 line-height: 20px;
 color: #f1faee;
 font-family: MontserratBold;
`;

export const LeftBtnHeader = styled.TouchableOpacity.attrs({
  width: '10%',
})
``;
export const RightBtnHeader = styled.TouchableOpacity.attrs({
  width: '10%',
})
``;

