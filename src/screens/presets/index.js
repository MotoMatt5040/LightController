import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Presets({navigation}) {

  const handleDeviceConfiguration = () => {
    //fetch current device information
    navigation.navigate('DeviceConfiguration');
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBarBase}>
        <TouchableOpacity onPress={handleDeviceConfiguration}>
          <View style={styles.checkDeviceButton}>
            <Text style={styles.text}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          This is the presets screen
        </Text>
      </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'orange',
  },
  navBarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
  },
  navBarBase: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 5,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 5
  },
  innerContainer: {
    flex: 7
  },
  checkDeviceButton: {
    padding: 10,
    margin: 10
  }
});