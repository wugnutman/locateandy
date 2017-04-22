import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Home from './Home'
import ImageViewer from './ImageViewer'

class Album extends React.Component {

  render() {

    let { navigator } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>ALBUM</Text>
        <TouchableOpacity onPress={()=>navigator.push({component: Home})}>
          <Text style={styles.link}>Home >></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigator.push({component: ImageViewer})}>
          <Text style={styles.link}>ImageViewer >></Text>
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
  }
})

export default Album;
