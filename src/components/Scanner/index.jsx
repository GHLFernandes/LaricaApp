import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Container } from '../Container';



const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalZonesVisible, setModalZonesVisible] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(type);
    console.log('****************************************************************************');
    console.log('|                                                                           |');
    console.log('|                                                                           |');
    console.log('|                                                                           |');
    console.log('****************************************************************************');
    console.log(data);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a Camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à Camera</Text>;
  }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      width: '68%',
      paddingVertical: 20,
    }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Scanear de novo'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

export default Scanner;
