import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../../../assets/icon.png';
import { corPrimaria } from '../../components/UI/variaveis';

export const LogoTxt = styled.Text `
    font-family: LobsterRegular;
    font-size: 20px;
    line-height: 20px;
    color: ${corPrimaria};
    margin-left: 10px;
    text-shadow: 0 0 2px #381a00;
`;

const HeaderContainer = styled.View.attrs({
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
})
``;

const LeftBtnHeader = styled.TouchableOpacity.attrs({
    width: '10%',
})
``;
const MiddleHeader = styled.View.attrs({
    flexDirection: 'row',
    flex: 1,
    width: '87%',
    alignItems: 'center',
    justifyContent: 'center'
})
``;

const LogoHeader = styled.Image `
    width: 40px;
    height: 40px;
`;

const RightBtnHeader = styled.TouchableOpacity.attrs({
    width: '10%',
})
``;

const Header = () => {
    return (
        <HeaderContainer>
            <LeftBtnHeader onPress={() => {  }}> 
                <FontAwesome name="navicon" size={30} color={corPrimaria}/>
            </LeftBtnHeader>
            <MiddleHeader >
                <LogoHeader source={logo} />
                <LogoTxt>Larica App</LogoTxt>
            </MiddleHeader>
            <RightBtnHeader onPress={() => {} }>
                <FontAwesome name="gears" size={30} color={corPrimaria}/>
            </RightBtnHeader>
        </HeaderContainer>
    );
};

const HeaderTitle = () => {
    return (
        <HeaderContainer>
            <MiddleHeader >
                <LogoHeader source={logo} />
            </MiddleHeader>
        </HeaderContainer>
    );
};
export { Header, HeaderTitle };