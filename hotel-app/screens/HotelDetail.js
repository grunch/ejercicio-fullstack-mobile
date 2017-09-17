import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HotelDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>detail</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
