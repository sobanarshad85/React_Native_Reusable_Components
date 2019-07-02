//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

export interface Props {
    style?: any;
    cStyle?: any;
}

//   const style ={color:'red'}

// create a component
class testing extends React.Component<Props> {

    render() {
        const { style, cStyle,...rest } = this.props

        return (
            <View style={styles.container}>
                <View style={{...cStyle}}>
               <TextInput 
               style={{padding:50,...style}}
               {...rest}
               />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default testing;
