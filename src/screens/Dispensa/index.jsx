import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Modal, View } from 'react-native';
import { Container } from '../../components/Estilos';
import Scanner from '../../components/Scanner';
import { FontAwesome } from '@expo/vector-icons';

const Dispensa = () => {
    const [modalZonesVisible, setModalZonesVisible] = useState(false);

    return (
        <Container>
            <Text>DISPENSA</Text>
            <TouchableOpacity
                onPress={() => setModalZonesVisible(true)}>
                <Text>Abrir QRCode</Text><FontAwesome name="plus" size={30} color="#fff" />
            </TouchableOpacity>
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
        </Container>
    );
};

export default Dispensa;