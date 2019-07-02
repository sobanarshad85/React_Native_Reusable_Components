// components/Hello.tsx
import React from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
  stateNum:number;
  flag:boolean
}

export default class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // if ((props.enthusiasmLevel || 0) <= 0) {
    //   throw new Error('You could be a little more enthusiastic. :D');
    // }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
        stateNum:1,
        flag:false,
    };
  }

  onIncrement = () =>
    this.setState({
        enthusiasmLevel: this.state.enthusiasmLevel + 1,
        flag:true
    });
  onDecrement = () =>
    this.setState({
        enthusiasmLevel: this.state.enthusiasmLevel - 1,
        flag:true
    });
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{' '}
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>
<Text>{this.state.stateNum}</Text>
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

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});