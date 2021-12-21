import React, {Component} from 'react';
import {Header} from 'react-native-elements';

class TopBar extends Component {
  render() {
    return (
      <Header
        statusBarProps={{barStyle: 'light-content', backgroundColor: 'black'}}
        rightComponent={{icon: 'menu', color: 'white'}}
        rightContainerStyle={{flex: 1}}
        placement="left"
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

export default TopBar;
