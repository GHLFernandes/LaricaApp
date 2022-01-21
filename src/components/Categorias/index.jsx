import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { corPrimaria, corPrimariaClaro } from '../UI/variaveis';

export default () => {
    const size = 40;
    return (
        <View
            style={{
                flexGrow: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                height: 70,
                width: '100%',
                borderTopWidth: 2,
                borderBottomWidth: 2,
                borderColor: `${corPrimariaClaro}`
            }}
        >

            <FontAwesome
                name='home'
                style={style.icon}
                size={size}
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='leanpub'
                size={size}
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='list-ul'
                size={size}
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='th-large'
                size={size}
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <FontAwesome
                name='user'
                size={size}
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <FontAwesome
                size={size}
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

        </View>
    );
};