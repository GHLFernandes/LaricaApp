import React from 'react';
import { View } from 'react-native';
<<<<<<< HEAD
import { FontAwesome } from '@expo/vector-icons';
import { corPrimaria, corPrimariaClaro } from '../UI/variaveis';

export default () => {
    const size = 40;
=======
import { Icon } from 'react-native-elements';
import { corPrimaria, corPrimariaClaro } from '../UI/variaveis';

export default () => {
>>>>>>> 9fa29b6dc6f88a8f5b58bc1a5ae8792de9d3b118
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

<<<<<<< HEAD
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
=======
            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

            <Icon
                raised
                reverseColor={corPrimaria}
>>>>>>> 9fa29b6dc6f88a8f5b58bc1a5ae8792de9d3b118
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

        </View>
    );
};