import * as React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
}

export default class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    };
  }

  onIncrement = () =>
    this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1});
  onDecrement = () =>
    this.setState({enthusiasmLevel: this.state.enthusiasmLevel - 1});
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{' '}
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}
