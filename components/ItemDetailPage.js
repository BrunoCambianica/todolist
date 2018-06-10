import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import axios from 'axios'

export default class ItemDetailPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            report: null,
            id:1333
        }
    }


    componentWillReceiveProps() {
        console.log('on est là')
        this.getItemWithID()
    }
    // componentDidMount() {
    //     this.getItemWithID()
    // }


    render() {
        if (this.state.isDone === true) {
            return (
                <View>
                    <Text>Text :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        value={this.state.text}
                        onChangeText={(text) => this.setText(text)}
                    />
                    <Text>Description :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        value={this.state.description}
                        onChangeText={(text) => this.setDescription(text)}
                    />
                    <Button
                        title='Update'
                        onPress={() => { this.put() }}
                    />
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Text :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        value={this.state.text}
                        onChangeText={(text) => this.setText(text)}
                    />
                    <Text>Description :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        value={this.state.description}
                        onChangeText={(text) => this.setDescription(text)}
                    />
                    <Button
                        title='Fait'
                        onPress={() => { this.done() }}
                    />
                    <Button
                        title='Update'
                        onPress={() => { this.put() }}
                    />
                </View>
            )
        }
    }

    getItemWithID() {
        console.log('dans get item with id')
        console.log( JSON.stringify(this.props.navigation))
        console.log(this.props.navigation.state.params.ID)
        axios.get(`http://formation-roomy.inow.fr/api/todoitems/${this.props.navigation.state.params.ID}`)
            .then((response) => {
                this.setState({ report: response.data })
                this.setState({
                    id: this.props.navigation.state.params.ID,
                    text: this.state.report.text,
                    createdDate: this.state.report.createdDate,
                    description: this.state.report.description,
                    isDone: this.state.report.isDone,
                    doneDate: this.state.report.doneDate,
                    priority: this.state.report.priority,
                })
                console.log('this.state.report Item ddetail page')
            })
            .catch((error) => {
                console.log(error);
            })

    }

    put() {
        axios.put(`http://formation-roomy.inow.fr/api/todoitems/${this.state.id}`, {
            id: this.state.id,
            text: this.state.text,
            createdDate: this.state.createdDate,
            description: this.state.description,
            isDone: this.state.isDone,
            doneDate: this.state.doneDate,
            priority: this.state.priority,
        })
            .then(function (response) {
                console.log('response item detail ppage')
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    setDescription(text) {
        this.setState({ description: text })
    }
    setText(text) {
        this.setState({ text: text })
    }

    done() {
        this.setState({
            isDone: true
        })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
