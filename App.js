import React from 'react';

import {
    SafeAreaView,
    StatusBar,
} from 'react-native';

import MainScreen from './components/mainscreen/MainScreen';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <MainScreen />
            </SafeAreaView>
        </>
    );
};


export default App;
