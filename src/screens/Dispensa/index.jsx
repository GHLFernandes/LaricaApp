import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Modal, View, FlatList } from 'react-native';
import { Container, TitleContainer, DispensaContainer,InputList, MainListContainer,Title, InputListContainer,ListAddBtn, ItemsContainer, ItemBtn, DelBtn, ItemChecked } from '../../components/Estilos';
import Scanner from '../../components/Scanner';
import { FontAwesome } from '@expo/vector-icons';
import useToDoList from '../../hooks/useListaHook';
import { corPrimaria} from '../../components/UI/variaveis';
const Dispensa = () => {
    const [modalZonesVisible, setModalZonesVisible] = useState(false);
    const [produto, setProduto] = useState('');
    const [state, add, check, del] = useToDoList();
    return (
        <Container>
            <DispensaContainer>
            <TitleContainer>
            <Title>DISPENSA</Title>
            </TitleContainer> 
            <MainListContainer> 
            <InputListContainer style={{paddingHorizontal: 15}} >                
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
                    <FontAwesome name="plus" size={30} color={corPrimaria} style={{marginLeft: Platform.OS === 'ios' ? 20:30}} />
                </ListAddBtn>
                <TouchableOpacity
                    onPress={() => setModalZonesVisible(true)}>
                    <FontAwesome name="qrcode" size={30} color="#000" style={{marginLeft: Platform.OS === 'ios' ? 10: 15}} />
                 </TouchableOpacity>
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
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalZonesVisible}
                onRequestClose={() => {
                    setModalZonesVisible(!modalZonesVisible);
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22,
                }}>
                    <View style={{
                        margin: 20,
                        width: '90%',
                        height: 700,
                        paddingVertical: 20,
                        backgroundColor: "white",
                        borderRadius: 20,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <Text>Ler QR Code da Nota Fiscal</Text>
                        <Scanner />
                        <TouchableOpacity

                            onPress={() => {
                                setModalZonesVisible(!modalZonesVisible)
                            }
                            }
                        >
                            <Text >Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
            </DispensaContainer> 
        </Container>
    );
};

export default Dispensa;