import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export interface Props {
  title: string;
  description?: number;
}

export default class EmptyView extends React.Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
