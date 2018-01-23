import React from 'react';

import {
    Navigator,
    AppRegistry,
    Text
} from 'react-native';

import OpentourAPP from './app/OpentourAPP';


class Opentour extends React.Component {
    render () {
        //Transicao entre menus
        return (
            <OpentourAPP sceneTransition={Navigator.SceneConfigs.FloatFromBottomAndroid} />
        );
    }
}

AppRegistry.registerComponent('opentour2017', () => Opentour);