import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

import Settings from './Settings'
import Album from './Album'
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends React.Component {

  render() {

    let { navigator } = this.props

    return (
      <Camera style={styles.container} aspect={Camera.constants.Aspect.fill}>
        <View style={{flexDirection: 'row'}}>

          <View style={{
            height: 48,
            width: 48,
            borderRadius: 48,
            backgroundColor: "#fff",
            margin: 10
          }} />

        </View>
        <View style={{flexDirection: 'row', alignSelf: "stretch", justifyContent: "space-between", margin: 10}}>
          <Image
            source={require('../assets/user.jpg')}
            style={{
              height: 42,
              width: 42,
              borderRadius: 42
            }}
          />
          <Icon name="camera" style={{fontSize: 32, color: "#fff", alignItems: "center"}} />
          <Icon name="video-camera" style={{fontSize: 32, color: "#fff", alignItems: "center"}} />
          <Icon name="building" style={{fontSize: 32, color: "#fff", alignItems: "center"}} />
          <Icon name="compass" style={{fontSize: 32, color: "#fff", alignItems: "center"}} />
        </View>
      </Camera>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0 ,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 10,
    width: 80,
    height: 40,
  },
  album: {
    flex: 0 ,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 10,
    width: 80,
    height: 40,
  },
  got: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 10,
    width: 90,
    height: 40,
  }
})

export default Home;
