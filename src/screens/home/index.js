import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({navigation}) {
  // const [state, setState] = useState("")
  // const [error, setError] = useState("")

  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  //process.env.API_URL = localhost:8098/api/change
  //process.env.API_URL = wwww.APIHandler.com/api/change
  // const handleChange = () => {
  //   fetch(`${process.env.API_URL}/api/change`, {
  //     method: 'GET'
  //   })
  //   .then(res => {
  //     if(res.status != 200){
  //       alert("Get request Failed")
  //       throw Error("Could not Fetch")
  //     }

  //     return res.json();
  //   })
  //   .then(res => {
  //     color1 = res["info"];
  //     color2 = res["info2"];

  //   })
  //   .catch(error => {
  //     console.log(error)
  //     setError(error)
  //   })
  // }

  const handleDeviceConfiguration = () => {
    //fetch current device information
    console.log('button pressed')
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
      <View style={styles.innerContainer} />
      <View style={styles.navBarBase}>
        <Text style={styles.navBarText}>Presets</Text>
        <Text style={styles.navBarText}>Color Selection</Text>
        <Text style={styles.navBarText}>Presets</Text>
      </View>
      {/* <Text style={styles.text}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.textButton}>Logout</Text>
      </TouchableOpacity> */}
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
    flex:8
  },
  checkDeviceButton: {
    padding: 10,
    margin: 10
  }
});