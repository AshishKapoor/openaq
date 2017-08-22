/**
 * openaq - React Native App
 * https://github.com/facebook/react-native
 * https://github.com/AshishKapoor/open-aq
 * Open Air Quality application.
 * Developed by Ashish Kapoor.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class openaq extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
         YO YO
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('openaq', () => openaq);
