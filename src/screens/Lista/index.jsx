
import React, { useState } from 'react';
<<<<<<< HEAD
import { FlatList, StatusBar} from 'react-native';
import { corPrimaria} from '../../components/UI/variaveis';
import {InputList, MainListContainer, InputListContainer, TitleListContainer, ListAddBtn, ItemsContainer, Title, ItemBtn, DelBtn, ItemChecked} from '../../components/Estilos/index';
import { FontAwesome } from '@expo/vector-icons';
import useToDoList from '../../hooks/useListaHook';
import { isTryStatement } from 'typescript';
=======
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StatusBar, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useToDoList from '../../hooks/useListaHook';
>>>>>>> 6f8a9be... feat: desenvolvimento da Lista de Compras

const Lista = () => {
    const [produto, setProduto] = useState('');
    const [state, add, check, del] = useToDoList();
<<<<<<< HEAD
    return (
        <MainListContainer>
            <StatusBar
                barStyle='dark-content'
            />
            <TitleListContainer><Title>LISTA DE COMPRAS</Title></TitleListContainer>            
            <InputListContainer >                
                <InputList
                   placeholder="Adicionar Produto"
                   placeholderTextColor={'black'}
                   value={produto}
                   onChangeText={text => setProduto(text)}
                 />
                <ListAddBtn
=======

    return (
        <SafeAreaView style={estilo.container}>
            <StatusBar
                barStyle='dark-content'
            />
            <Text>LISTA DE COMPRAS</Text>
            <View style={estilo.inputContainer}>
                <TextInput style={estilo.input}
                    placeholder="Adicionar Produto"
                    placeholderTextColor={'black'}
                    value={produto}
                    onChangeText={text => setProduto(text)}
                />
                <TouchableOpacity style={estilo.addBtn}
>>>>>>> 6f8a9be... feat: desenvolvimento da Lista de Compras
                    onPress={() => {
                        add(produto);
                        setProduto('');
                    }} >
<<<<<<< HEAD
                    <FontAwesome name="plus" size={30} color={corPrimaria} />
                </ListAddBtn>
            </InputListContainer>
=======
                    <Text style={estilo.addBtnTxt}>+</Text>
                </TouchableOpacity>
            </View>
>>>>>>> 6f8a9be... feat: desenvolvimento da Lista de Compras

            <FlatList
                data={state}
                renderItem={({ item }) => (
<<<<<<< HEAD
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

=======
                    <View style={estilo.itemsContainer}>
                        <TouchableOpacity style={estilo.itemBtn}
                            onPress={() => { check(item.id) }}>
                            <Text style={[estilo.listItem, item.check ? estilo.listItemChecked : '']} >{item.title}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.delBtn}
                            onPress={() => { del(item.id) }}>
                            <FontAwesome name="trash-o" size={25} color="red" />
                        </TouchableOpacity>
                    </View>
                )
                } />
        </SafeAreaView >
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    input: {
        flex: 1,
        width: '80%',
        fontSize: 25,
        color: 'black'
    },
    addBtn: {
        width: '20%',
        marginHorizontal: 2,
        alignItems: 'center',
        alignSelf: 'center'
    },
    addBtnTxt: {
        alignItems: 'center',
        alignSelf: 'center',
        color: 'green',
        fontSize: 50
    },
    itemsContainer: {
        flexDirection: 'row',
    },
    itemBtn: {
        flex: 1,
    },
    listItem: {
        fontSize: 22,
        color: "black",
        marginVertical: 3,
        marginHorizontal: 7,
        padding: 10,
    },
    listItemChecked: {
        textDecorationLine: 'line-through'
    },
    delBtn: {
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15
    },
})
>>>>>>> 6f8a9be... feat: desenvolvimento da Lista de Compras
export default Lista;
