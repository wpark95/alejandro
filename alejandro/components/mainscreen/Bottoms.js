import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Bottoms = item => (
  <View style={styles.bottomsContainer}>
    <Image source={item.imageUri} style={styles.bottomsImage} />
  </View>
);

const styles = StyleSheet.create({
  bottomsContainer: {
    flex: 2,
    width: 120,
    height: 130,
    marginLeft: 10,
    marginTop: 10,
  },
  bottomsImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default Bottoms;
