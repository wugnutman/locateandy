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

  state = {
    isVideoMode: true,
    isCompassMode: true,
    camera: {
      aspect: Camera.constants.Aspect.fill,
      captureTarget: Camera.constants.CaptureTarget.cameraRoll,
      type: Camera.constants.Type.back,
      orientation: Camera.constants.Orientation.auto,
      flashMode: Camera.constants.FlashMode.auto,
    },
    isRecording: false
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
  }

  startRecordingVideo = () => {
    if (this.camera) {
      this.camera.capture({mode: Camera.constants.CaptureMode.video})
          .then((data) => console.log(data))
          .catch(err => console.error(err));


      this.setState({
        isRecording: true
      });
    }
  }

  stopRecordingVideo = () => {
    if (this.camera) {
      this.camera.stopCapture();
      this.setState({
        isRecording: false
      });
    }
  }

  onPressAlbumButton(){
    let { navigator } = this.props
    navigator.push({
      component: Album,
      passProps: {}
    })
  }

  toggleCameraMode(){
    const { isVideoMode } = this.state
    this.setState({
      isVideoMode: !isVideoMode
    })
  }

  toggleCompassMode(){
    const { isCompassMode } = this.state
    this.setState({
      isCompassMode: !isCompassMode
    })
  }

  render() {

    let { navigator } = this.props

    return (
      <Camera
        style={styles.container}
        aspect={Camera.constants.Aspect.fill}
        ref={(cam) => {
          this.camera = cam;
        }}>

        {
          this.state.isRecording ? (
            <TouchableOpacity onPress={this.stopRecordingVideo}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.stopRecordingbtn} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={ this.state.isVideoMode ? this.startRecordingVideo : this.takePicture}>
              <View style={{flexDirection: 'row'}}>
                <View style={ this.state.isRecording ? styles.stopRecordingbtn : styles.captureButton} />
              </View>
            </TouchableOpacity>
          )
        }

        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={this.onPressAlbumButton.bind(this)}>
            <Image
              source={require('../assets/user.jpg')}
              style={styles.albumButton}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.toggleCameraMode.bind(this)}>
          {
            this.state.isVideoMode ?
              <Icon name="video-camera" style={styles.iconButton} /> :
              <Icon name="camera" style={styles.iconButton} />
          }
          </TouchableOpacity>


          <TouchableOpacity onPress={this.toggleCompassMode.bind(this)}>
          {
            this.state.isCompassMode ?
              <Icon name="compass" style={styles.iconButton} /> :
              <Icon name="building" style={styles.iconButton} />
          }
          </TouchableOpacity>

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
  menuContainer: {
    flexDirection: 'row',
    alignSelf: "stretch",
    justifyContent:
    "space-between",
    margin: 10
  },
  iconButton: {
    fontSize: 32,
    color: "#fff",
    alignItems: "center"
  },
  captureButton: {
    height: 48,
    width: 48,
    borderRadius: 48,
    backgroundColor: "#fff",
    margin: 10
  },
  stopRecordingbtn: {
    height: 40,
    width: 40,
    backgroundColor: "green",
    margin: 10
  },
  albumButton: {
    height: 42,
    width: 42,
    borderRadius: 42
  }
})

export default Home;
