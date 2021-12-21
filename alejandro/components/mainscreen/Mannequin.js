import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

class Mannequin extends Component {
  render() {
    return <Image source={this.props.imageUri} style={styles.mannequin} />;
  }
}

const styles = StyleSheet.create({
  mannequin: {
    width: 150,
    height: 300,
  },
});

export default Mannequin;
