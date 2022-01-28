import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { corPrimaria, corPrimariaClaro, fundoClaro, fundoEscuro } from '../../components/UI/variaveis';
import { Platform } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// Área de Inputs --------------------------------------------
export const InputList = styled.TextInput.attrs({    
    backgroundColor: "transparent", 
    width: "74%",
    height: 45,
    color: "#000"

})``

export const Input = styled.TextInput `
width: 100%;
line-height: 20px;
height: 42px;
border: 1px solid rgba(200, 200, 200, 0.9);
border-radius: 12px;
margin-top: 10px;
padding: 5px;
font-size: 12px;
font-family: MontserratRegular;
border-color: ${corPrimariaClaro};
`;


// Área de Containers ---------------------------------------

export const Container = styled.SafeAreaView.attrs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})
``;
export const TitleContainer = styled.View.attrs({
  backgroundColor: fundoEscuro,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  
})``

export const DispensaContainer = styled.View.attrs({
   alignItems: 'center',
   width: '100%',
   flex: 1
})``

export const HeaderContainer = styled.View.attrs({
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: `${corPrimariaClaro}`,
    marginTop: Platform.OS === 'ios' ? 40 : 0
})
``;

export const MiddleHeader = styled.View.attrs({
    flexDirection: 'row',
    flex: 1,
    width: '87%',
    alignItems: 'center',
    justifyContent: 'center'
})
``;

export const MainListContainer = styled.View.attrs({
    flex: 1,
    justifyContent: "center",
})``
export const InputListContainer = styled.View.attrs({
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingHorizontal: Platform.OS === 'ios' ? 5 : 20,    
    borderRadius: 2,
    borderWidth: 2,
    borderColor: corPrimaria,
    borderStyle: "solid",    
    width:"100%",
    height: 50
})``


export const TitleListContainer = styled.View.attrs({
    backgroundColor: fundoEscuro,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    
})``

export const ItemsContainer = styled.View.attrs({
    flexDirection: 'row',
    height: 50,
    backgroundColor: fundoClaro,
    marginVertical: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
})``

//Área de botões ------------------------------

export const ItemBtn = styled.TouchableOpacity.attrs({
    flex: 1
})``

export const ListAddBtn = styled.TouchableOpacity.attrs({
    width: '20%',
    alignItems: 'center',

})``

export const DelBtn = styled.TouchableOpacity`
    padding-right: 15px;
    padding-left: 15px;
`

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

export const NewProduct = styled.TouchableOpacity`
width: 60px;
height: 60px;
position: absolute;
bottom: 30px;
right: 20px;
background-color: ${corPrimaria};
border-radius: 50px;
justify-content: center;
align-items: center;
`

// Área de Textos ------------------------------

export const Title = styled.Text`
    font-size: 20px;
    color: white;
`
export const LogoTxt = styled.Text `
    font-family: LobsterRegular;
    font-size: 20px;
    line-height: 20px;
    color: ${corPrimaria};
    margin-left: 10px;
    text-shadow: 0 0 2px #381a00;
`;
export const ItemChecked = styled.Text`
  text-decoration: ${props => props.check ? "line-through" : "none"};
  font-size: 20px;
  color: white;
`

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

// Área de Formulários
export const Form = styled.View `
  width: 70%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.1);
`;

// Área de Imagens
export const Logo = styled.Image `
  width: 180px;
  height: 180px;
`;

export const LogoHeader = styled.Image `
    width: 40px;
    height: 40px;
`;


