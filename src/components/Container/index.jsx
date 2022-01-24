import styled from 'styled-components';
import { corPrimaria, corPrimariaClaro } from '../../components/UI/variaveis';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView.attrs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})
``;

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