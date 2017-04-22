import React, { Component } from 'react'
import {
  Navigator,
  ActivityIndicator,
  View
} from 'react-native'

import Home from './screens/Home'

export default class App extends Component {

  renderScene(route, navigator) {
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.passProps} />
  }

  configureScene(route) {
    return {
      ...Navigator.SceneConfigs.PushFromRight
    };
  }

  render() {
    const initialRoute = {
      component: Home,
      passProps: {
        title: 'Home',
      }
    }

    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={this.renderScene}
      />
    );
  }
}
