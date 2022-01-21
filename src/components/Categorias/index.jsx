import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { corPrimaria, corPrimariaClaro } from '../UI/variaveis';

export default () => {
    const size = 30;
    return (
        <View
            style={{
                flexGrow: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: 50,
                width: '100%',
                borderTopWidth: 2,
                borderBottomWidth: 2,
                borderColor: `${corPrimariaClaro}`
            }}
        >

            <FontAwesome
                name='home'
                style={{
                    marginHorizontal: 20
                }}
                size={size}
                color={corPrimariaClaro}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='leanpub'
                style={{
                    marginHorizontal: 20
                }}
                size={size}
                color={corPrimariaClaro}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='list-ul'
                style={{
                    marginHorizontal: 20
                }}
                size={size}
                color={corPrimariaClaro}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='th-large'
                style={{
                    marginHorizontal: 20
                }}
                size={size}
                color={corPrimariaClaro}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='user'
                style={{
                    marginHorizontal: 20
                }}
                size={size}
<<<<<<< HEAD
                color={corPrimariaClaro}
                onPress={() => console.log('hello')} />
=======
                color={corPrimaria}
                onPress={() => console.log('hello')} />

>>>>>>> af5b7a7... atualização ícones categoria

        </View>
    );
};