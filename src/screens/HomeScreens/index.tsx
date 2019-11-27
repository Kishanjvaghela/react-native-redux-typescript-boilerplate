import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './style';

interface OwnState {

}

class HomeScreen extends Component<OwnState> {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is title</Text>
            </View>
        );
    }
}


export default HomeScreen;