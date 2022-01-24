import styled from 'styled-components';
import { corPrimaria, corPrimariaClaro } from '../../components/UI/variaveis';
export const Logo = styled.Image `
  width: 180px;
  height: 180px;
`;

export const LogoHeader = styled.Image `
    width: 40px;
    height: 40px;
`;

export const LogoTxt = styled.Text `
    font-family: LobsterRegular;
    font-size: 20px;
    line-height: 20px;
    color: ${corPrimaria};
    margin-left: 10px;
    text-shadow: 0 0 2px #381a00;
`;