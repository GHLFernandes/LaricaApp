import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { corPrimaria, corPrimariaClaro } from '../../components/UI/variaveis';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// Área de Inputs --------------------------------------------
export const InputList = styled.TextInput.attrs({    
    backgroundColor: "transparent", 
    color: "#000"

})``

// Área de Containers ---------------------------------------

export const MainListContainer = styled.View.attrs({
    flex: 1,
    justifyContent: "center",
})``
export const InputListContainer = styled.View.attrs({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,    
    borderRadius: 2,
    borderWidth: 2,
    borderColor: corPrimaria,
    borderStyle: "solid",    
    width:"100%",
    height: 50
})``

export const TitleListContainer = styled.View.attrs({
    backgroundColor: corPrimariaClaro,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
    
})``


//Área de botões ------------------------------

export const ListAddBtn = styled.TouchableOpacity.attrs({
    width: '20%',
    alignItems: 'center',

})``

// Área de Textos ------------------------------

