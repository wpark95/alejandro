import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Mannequin = item => (
  <Image source={item.imageUri} style={styles.mannequin} />
);

const styles = StyleSheet.create({
  mannequin: {
    width: 150,
    height: 300,
  },
});

export default Mannequin;
