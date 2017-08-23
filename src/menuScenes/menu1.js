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
      active: false
    }
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
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      

      />
      </View>
    )
  }
}

const rightButtonConfig = {
  title: 'Info',
  tintColor: 'black',
  handler: () => alert('powered by React Native'),
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