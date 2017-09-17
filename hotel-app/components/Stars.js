import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class MyComponent extends Component {
  renderStars() {
    const { stars } = this.props;
    const arrStars = new Array(stars).fill(1);

    return arrStars.map((v, i) => (
      <Icon name='star' key={i} color='#FFCC1D' type='font-awesome' />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderStars()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
};
