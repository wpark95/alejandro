import React from 'react';

import {StyleSheet, FlatList, View, Text} from 'react-native';

import TopBar from './TopBar';
import Tops from './Tops';
import Bottoms from './Bottoms';
import Mannequin from './Mannequin';

const MainScreen = () => {
  const topsData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      imageUri: require('../../clothes_pics/jackets/black_long_coat.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      imageUri: require('../../clothes_pics/jackets/black_biker_jacket.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      imageUri: require('../../clothes_pics/jackets/black_leather_jacket.png'),
    },
    {
      id: '58694a0f-8rj4-29sd-sj25-12323534534a',
      imageUri: require('../../clothes_pics/jackets/black_outdoor_jacket.png'),
    },
  ];

  const bottomsData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      imageUri: require('../../clothes_pics/bottoms/jeans_01.jpg'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      imageUri: require('../../clothes_pics/bottoms/jeans_02.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      imageUri: require('../../clothes_pics/bottoms/jeans_03.jpg'),
    },
    {
      id: '58694a0f-3da1-988x-bd96-145571e29d72',
      imageUri: require('../../clothes_pics/bottoms/jeans_04.png'),
    },
  ];

  const renderTops = ({item}) => <Tops imageUri={item.imageUri} />;
  const renderBottoms = ({item}) => <Bottoms imageUri={item.imageUri} />;

  return (
    <>
      <TopBar />
      <Text style={styles.UserGreetings}>Hello, userName</Text>
      <View style={styles.mainContainer}>
        <View style={styles.tops}>
          <FlatList
            horizontal={true}
            data={topsData}
            renderItem={renderTops}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.mannequin}>
          <Mannequin
            imageUri={require('../../clothes_pics/mannequin/Alejandra.jpg')}
          />
        </View>
        <View style={styles.bottoms}>
          <View>
            <FlatList
              horizontal={true}
              data={bottomsData}
              renderItem={renderBottoms}
              keyExtractor={item => item.id}
            />
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
