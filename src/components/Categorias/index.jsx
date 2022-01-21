import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { corPrimaria, corPrimariaClaro } from '../UI/variaveis';

export default () => {
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
                name='heartbeat'
                type='font-awesome'
                color={corPrimaria}
                onPress={() => console.log('hello')} />

        </View>
    );
};