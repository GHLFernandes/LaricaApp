import { FontAwesome } from '@expo/vector-icons';
import logo from '../../../assets/icon.png';
import { corPrimaria, corPrimariaClaro } from '../../components/UI/variaveis';
import {HeaderContainer, MiddleHeader, LogoHeader, LogoTxt, RightBtnHeader, LeftBtnHeader} from '../../components/Estilos';


const Header = () => {
    return (
        <HeaderContainer>
            <LeftBtnHeader onPress={() => { }}>
                <FontAwesome name="navicon" size={30} color={corPrimaria} />
            </LeftBtnHeader>
            <MiddleHeader >
                <LogoHeader source={logo} />
                <LogoTxt>Larica App</LogoTxt>
            </MiddleHeader>
            <RightBtnHeader onPress={() => { }}>
                <FontAwesome name="gears" size={30} color={corPrimaria} />
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