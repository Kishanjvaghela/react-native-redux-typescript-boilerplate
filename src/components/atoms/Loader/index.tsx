import * as React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import styles from './styles';

export default class Loader extends React.Component<ActivityIndicatorProps> {
  render() {
    return (
      <View style={styles.root}>
        <ActivityIndicator />
        <Text style={styles.loaderTitle}>Please wait ...</Text>
      </View>
    );
  }
}
