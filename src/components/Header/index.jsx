import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../../../assets/icon.png';
import { acessaPerfil } from '../../functions';

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
    width: '87%',
    alignItems: 'center',
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
                <FontAwesome name="navicon" size={30} color="#E19046"/>
            </LeftBtnHeader>
            <MiddleHeader >
                <LogoHeader source={logo} />
            </MiddleHeader>
            <RightBtnHeader onPress={({navigation}) => {navigation.navigate('Perfil')}}>
                <FontAwesome name="user" size={30} color="#E19046"/>
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