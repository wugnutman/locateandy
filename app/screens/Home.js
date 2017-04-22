import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Settings from './Settings'
import Album from './Album'

class Home extends React.Component {

  render() {

    let { navigator } = this.props

    return (
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
  }
})

export default Home;
