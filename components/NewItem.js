import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import axios from 'axios'

export default class NewItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description: "Holy moly",
            text: "Create incoming",
            doneDate: '2017-03-16T21:36:50.473',
            isDone: false
        }
    }


    render() {
        return (
            <View >
                <TextInput
                    underlineColorAndroid='transparent'
                    value={this.state.description}
                    onChangeText={(text) => this.setDescription(text)}
                />
                <TextInput
                    underlineColorAndroid='transparent'
                    value={this.state.text}
                    onChangeText={(text) => this.setText(text)}
                />
                    <Button
                    title='create'
                    onPress={() => { this.post() }}
                />
            </View>
        )
    }

    post(){
      axios.post('http://formation-roomy.inow.fr/api/todoitems', {
        text: this.state.text,
        description: this.state.description,
        doneDate:'2017-03-16T21:36:50.473',
        createdDate: '2018-06-10T11:36:09.793'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    setDescription(text) {
        this.setState({ description: text })
    }
    setText(text) {
        this.setState({ text: text })
    }


}