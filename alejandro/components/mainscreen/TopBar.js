/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';

class TopBar extends Component {
  render() {
    return (
      <Header
        statusBarProps={{barStyle: 'light-content', backgroundColor: 'black'}}
        rightComponent={
          <View style={styles.headerRight}>
            <Icon
              name="menu"
              color="white"
              // onPress={() => this.menuPressHandler()} Todo: Create Navigation Menu
            />
          </View>
        }
        placement="left" // Todo: Improve Readability Of Left And/Or Center Components
        centerComponent={{
          text: 'ALEJANDRO',
          style: {color: '#fff', fontSize: 24, fontWeight: '700'},
        }}
        containerStyle={{
          backgroundColor: 'black',
          justifyContent: 'space-around',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  headerRight: {
    flex: 1,
    marginRight: 5,
    marginTop: 3,
  },
});

export default TopBar;
