import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'

import Settings from './Settings'
import Album from './Album'
import Camera from 'react-native-camera';

class Home extends React.Component {

  render() {

    let { navigator } = this.props

    return (

        <Camera
         style={styles.preview}
         aspect={Camera.constants.Aspect.fill}>
         <Text style={ styles.capture} >[RECORD]</Text>
         <Text style={ styles.got} >[CAPTURE]</Text>
         <Text style={ styles.album} >[ALBUM]</Text>
       </Camera>

    );
    }
}

const styles = StyleSheet.create({

  preview: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  flexDirection: 'row',

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
