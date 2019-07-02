// components/Todo.tsx
import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

export interface Props {
    id: number;
    textt: string;
    deleteIt: (id:number) => void;
    // clickFunction: () => void;
}

interface State {
    textt: string;
    id: number;
    flag: boolean;
}

export default class Todo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);


        this.state = {
            id: this.props.id || 10000,
            textt: this.props.textt || "Didn't Receive any Text",
            flag: false
        };
    }


    render() {
        console.warn(this.state.id + ': child')
        return (
            <View style={{ borderWidth: 1, borderColor: 'yellow', marginTop: 3 }}>
                <Text>{this.state.id}</Text>
                <Text>{this.state.textt}</Text>
                {
                    !this.state.flag ?
                        <Button
                            title="enable editing"
                            onPress={() => this.setState({ flag: !this.state.flag })}
                        />
                        :
                        <Button
                            title="disable editing"
                            onPress={() => this.setState({ flag: !this.state.flag })}
                        />
                }

                <Button
                    title="Delete It"
                    onPress={()=>this.props.deleteIt(this.state.id)}
                />



                {
                    this.state.flag ?
                        <View>
                            <TextInput onChangeText={(textt) => this.setState({ textt })} value={this.state.textt} />
                        </View>
                        :
                        null

                }

            </View>
        );
    }
}
