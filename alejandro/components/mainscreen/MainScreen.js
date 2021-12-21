import React from 'react';

import {StyleSheet, FlatList, View, Text} from 'react-native';

import TopBar from './TopBar';
import Tops from './Tops';
import Bottoms from './Bottoms';
import Mannequin from './Mannequin';

const MainScreen = () => {
  return (
    <>
      <TopBar />
      <Text style={styles.UserGreetings}>Hello, userName</Text>
      <View style={styles.mainContainer}>
        <View style={styles.tops}>
          <FlatList
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Tops
              imageUri={require('../../clothes_pics/jackets/black_long_coat.png')}
            />
            <Tops
              imageUri={require('../../clothes_pics/jackets/black_biker_jacket.png')}
            />
            <Tops
              imageUri={require('../../clothes_pics/jackets/black_leather_jacket.png')}
            />
            <Tops
              imageUri={require('../../clothes_pics/jackets/black_outdoor_jacket.png')}
            />
          </FlatList>
        </View>

        <View style={styles.mannequin}>
          <Mannequin
            imageUri={require('../../clothes_pics/mannequin/Alejandra.jpg')}
          />
        </View>

        <View style={styles.bottoms}>
          <View>
            <FlatList
              scrollEventThrottle={16}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Bottoms
                imageUri={require('../../clothes_pics/bottoms/jeans_01.jpg')}
              />
              <Bottoms
                imageUri={require('../../clothes_pics/bottoms/jeans_02.jpg')}
              />
              <Bottoms
                imageUri={require('../../clothes_pics/bottoms/jeans_03.jpg')}
              />
              <Bottoms
                imageUri={require('../../clothes_pics/bottoms/jeans_04.png')}
              />
            </FlatList>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  UserGreetings: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 24,
    textAlign: 'left',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  tops: {
    height: 150,
  },
  mannequin: {
    width: 150,
    height: 330,
    paddingTop: 5,
    paddingLeft: 30,
  },
  bottoms: {
    height: 150,
  },
});

export default MainScreen;
