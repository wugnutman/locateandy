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
      <View style={styles.container}>
        <Camera

         style={styles.preview}
         aspect={Camera.constants.Aspect.fill}>
         <Text style={styles.capture} >[CAPTURE]</Text>
       </Camera>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>HOME</Text>
        <TouchableOpacity onPress={()=>navigator.push({component: Settings})}>
          <Text style={styles.link}>Settings >></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigator.push({component: Album})}>
          <Text style={styles.link}>Album >></Text>
        </TouchableOpacity>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  },
  link: {
    color: 'blue',
    fontSize: 18
  },
  preview: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
},
capture: {
  flex: 0,
  backgroundColor: '#fff',
  borderRadius: 5,
  color: '#000',
  padding: 10,
  margin: 40
}
})

export default Home;
