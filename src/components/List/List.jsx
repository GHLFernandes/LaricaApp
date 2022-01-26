import React, { useState } from 'react';
import { FlatList, StatusBar} from 'react-native';
import { corPrimaria} from '../../components/UI/variaveis';
import {InputList, MainListContainer, InputListContainer, TitleListContainer, ListAddBtn, ItemsContainer, Title, ItemBtn, DelBtn, ItemChecked} from '../../components/Estilos/index';
import { FontAwesome } from '@expo/vector-icons';
import useToDoList from '../../hooks/useListaHook';
import { isTryStatement } from 'typescript';

const List = () => {
    const [produto, setProduto] = useState('');
    const [state, add, check, del] = useToDoList();
    return (
        <MainListContainer>                
            <InputListContainer >                
                <InputList
                   placeholder="Adicionar Produto"
                   placeholderTextColor={'black'}
                   value={produto}
                   onChangeText={text => setProduto(text)}
                 />
                <ListAddBtn
                    onPress={() => {
                        add(produto);
                        setProduto('');
                    }} >
                    <FontAwesome name="plus" size={30} color={corPrimaria} />
                </ListAddBtn>
            </InputListContainer>

            <FlatList
                data={state}
                renderItem={({ item }) => (
                    <ItemsContainer>
                        <ItemBtn
                            onPress={() => { check(item.id) }}>
                            <ItemChecked check={item.check}>{item.title}</ItemChecked>
                        </ItemBtn>

                        <DelBtn 
                            onPress={() => { del(item.id) }}>
                            <FontAwesome name="trash-o" size={25} color="red" />
                        </DelBtn>
                    </ItemsContainer>
                )
                } />
        </MainListContainer>
    )
}

export default List;
