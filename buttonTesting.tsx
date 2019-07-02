//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button'

// create a component
class MyClass extends Component {


    consleMe = () => {
        console.warn("I'm Pressed")
    }


    render() {
        return (
            <View>

                {/* this button is disabled*/}
                <View style={{ marginVertical: 10 }}>
                    <Button
                        onPress={this.consleMe}
                        style={{ backgroundColor: 'black' }}
                        textStyle={{}}
                        disabled={true}
                    >
                        Disabled
          </Button>
                </View>

                {/* button is disabled and no color is provided */}
                <View style={{ marginVertical: 10 }}>
                    <Button
                        onPress={this.consleMe}
                        style={{}}
                        textStyle={{ paddingHorizontal: 40 }}
                        disabled={true}
                        iconDetails={{ name: 'profile' }}
                    // iconSize={50}
                    // iconColor='red'
                    >
                        Disabled
          </Button>
                </View>

                {/* button is with default color */}
                <View style={{ marginVertical: 10 }}>
                    <Button
                        onPress={this.consleMe}
                        style={{}}
                        textStyle={{}}
                    >
                        Press Me
          </Button>
                </View>

                {/* button is with custom color */}
                <View style={{ marginVertical: 10 }}>
                    <Button
                        onPress={this.consleMe}
                        style={{ backgroundColor: 'red' }}
                        textStyle={{}}
                        iconDetails={{ name: 'home' }}
                    >
                        Home
          </Button>
                </View>

                {/* simple button without icon*/}
                <View style={{ marginVertical: 10 }}>

                    <Button>Simple</Button>

                </View>

                {/* simple button with icon*/}
                <View style={{ marginVertical: 10 }}>

                    <Button iconDetails={{ name: 'home' }}>Simple</Button>

                </View>


                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button iconDetails={{ name: 'home' }}>Test</Button>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button iconDetails={{}} onPress={this.consleMe}>Test</Button>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyClass;
