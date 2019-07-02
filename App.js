/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import Hello from './components/Hello';
import Todos from './components/Todos'
import Button from './Button'
import ButtonTesting from './buttonTesting'
import FormikTest from './Formik'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {



  render() {
    return (


      <ScrollView>
        <View >

          <Text style={styles.welcome}>React Native Test Drive</Text>
          {/* <Hello name="soban" enthusiasmLevel={1}/> */}


          {/* This is Formik Testing */}
          {/* <View style={{ marginVertical: 10, }}>
            <FormikTest />
          </View> */}








          {/* Button Examples with different use cases */}
          <View>
            <ButtonTesting />
          </View>






          {/* uncomment to see whole work */}
          {/* <Todos /> */}

          {/* <Text style={styles.instructions}>{instructions}</Text> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
