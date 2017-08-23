import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import Hamburger from 'react-native-hamburger';
import MapView from 'react-native-maps';

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
      <StatusBar
      backgroundColor="white"
      barStyle="light-content"
      animated={true}
      />
      <View style={styles.sideBar}>
      <Hamburger 
      style={styles.sideBar}
      active={this.state.active} 
      type="spinArrow" 
      onPress= {
        () => this.setState({active: !this.state.active}),
        () => this.props.handleMenu()
      } />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1abc9c'
  },
  sideBar: {
    flex: 1,
    top: 20,
    left: 10  
  },
  mapView: {
    flex: 10
  }
})