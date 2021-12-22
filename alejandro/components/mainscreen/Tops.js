import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Tops = item => {
  return (
    <View style={styles.topsContainer}>
      <Image source={item.imageUri} style={styles.topsImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  topsContainer: {
    flex: 2,
    width: 130,
    height: 130,
    marginLeft: 10,
    marginTop: 10,
  },
  topsImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default Tops;
