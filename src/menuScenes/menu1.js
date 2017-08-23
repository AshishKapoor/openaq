/**
* Air Quality Now.
* By Ashish Kapoor.
* All rights reserved.
*/

import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import MapView from 'react-native-maps';
import NavigationBar from 'react-native-navbar';

export default class Menu1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      coordinate: {
        latitude: 28.7041,
        longitude: 77.1025,
      }
    }
  
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({position: {longitude: position.longitude, latitude: position.latitude}});
    }, (error) => {
      alert(JSON.stringify(error))
    }, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    });
  }

  getInitialState() {
    return {
      coordinate: {
        latitude: 28.7041,
        longitude: 77.1025,
      },
    };
  }
  
  render() {
    return(
      <View style={styles.container}>      
      <NavigationBar
      title={titleConfig}
      leftButton={
        <TouchableOpacity 
        style={styles.sideBar}
        onPress={ () => this.props.handleMenu() }>
        <Text style={styles.btnText}>{'Home'}</Text>
        </TouchableOpacity>
      }
      rightButton={ rightButtonConfig }
      />
      
      <MapView
      style= {styles.mapView}
      >
      
      <MapView.Marker
        coordinate={this.state.coordinate}
        title="title"
        description="description"
      />
      
      </MapView>
      </View>
    )
  }
}

const rightButtonConfig = {
  title: 'Info',
  tintColor: 'black',
  handler: () => alert('powered by React Native')
};

const titleConfig = {
  title: 'Air Quality Now',
  tintColor: 'black'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1abc9c'
  },
  btnText: {
    fontSize: 16,
    top: 13,
    left: 7
  },
  sideBar: {
    flex: 1,
    flexDirection: 'row',
    
  },
  mapView: {
    flex: 10,
    flexDirection: 'row'
  }
})