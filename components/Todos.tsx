// components/Todos.tsx
import React, { Fragment } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import Todo from './Todo';
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import Testing from './rButton'


export interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

export interface Object {
  id: number;
  text: string;
}

interface State {
  text: string;
  idCounter: number;
  todoArray: Array<Object>
}

export default class Todos extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);


    this.state = {
      text: '',
      idCounter: 0,
      todoArray: []
    };
  }


  addTodo = () => {
    if (this.state.text !== '') {
      this.setState({
        todoArray: [...this.state.todoArray, { id: (this.state.idCounter + 1), text: (this.state.text) }],
        text: '',
        idCounter: this.state.idCounter + 1
      })
    }
    else {
      console.warn('text is empty')
    }
  }

  deleteIt = (id: number) => {
    console.warn('this is id: ' + id)
    let updatedArray = this.state.todoArray;
    delete updatedArray[id - 1]
    this.setState({
      todoArray: updatedArray,
      idCounter: this.state.idCounter - 1
    })
  }


  render() {
    console.warn('parent')
    return (
      <ScrollView>
        <View style={styles.root}>
          <View style={{ borderWidth: 1, borderColor: 'red' }}>
            <TextInput
              placeholder='Add Todo'
              value={this.state.text}
              style={{}}
              onChangeText={(text) => this.setState({ text })}
            />
            <Button onPress={this.addTodo} title='Add Todo' />
          </View>

          <View style={{ margin: 20 }}>
            <Testing style={{ borderWidth:1,borderColor:'gray',width:'100%',padding:20 }}
             cStyle={{ margin:10}}
             placeholder="I'm placeholder"
             />
             
          </View>
          <Testing 
          placeholder='Hi Baby'
          />
          {/* mapping of todosArray */}
          {
            this.state.todoArray.map((item, index) => {
              return (
                <View key={index} style={{ marginTop: 5, borderWidth: 1 }}>
                  <Todo id={item.id} textt={item.text} deleteIt={this.deleteIt} />
                </View>
              )
            })

          }
        </View>
        <View style={{ marginTop: 90 }}>
          <Formik
            initialValues={{ name: '', fatherName: '' }}
            validationSchema={yup.object().shape({
              name: yup
                .string()
                .email()
                .required(),
              fatherName: yup
                .string()
                .min(6)
                .required(),
            })}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values));
              setTimeout(() => {
                actions.setSubmitting(false)
              }, 1000);

            }}
          >
            {
              formikProps => (
                <View>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 10,
                      marginBottom: 3
                    }}
                    onChangeText={formikProps.handleChange('name')}
                  />
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 10,
                      marginBottom: 3
                    }}
                    onChangeText={formikProps.handleChange('fatherName')}
                  />
                  {
                    formikProps.isSubmitting ?
                      <ActivityIndicator />
                      :

                      <Button title='Submit' onPress={formikProps.handleSubmit} />
                  }
                </View>
              )
            }
          </Formik>
        </View>

        <Text>start testing with formik</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup
              .string()
              .min(6)
              .required(),
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <Fragment>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
              />
              {touched.email && errors.email &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
              }
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={true}
              />
              {touched.password && errors.password &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
              }
              <Button
                title='Sign In'
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </Fragment>
          )}
        </Formik>

      </ScrollView>
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