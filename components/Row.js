import React from 'react'
import moment from 'moment'
import 'moment/locale/fr'
import { View, Text, StyleSheet, Image, Dimensions, AsyncStorage, TouchableHighlight } from 'react-native'
import { createStackNavigator, StackNavigator } from 'react-navigation'
import ItemDetailPage from './ItemDetailPage'

export default class Row extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            datas: this.props.datas,
            navigate: this.props.nav
        }
    }

    render() {
        const { navigate } = this.props.navigation
        if (this.props.datas.isDone === true) {
            return (
                <TouchableHighlight onPress={() => this.redirect()}>
                    <View style={styles.container}>
                        <Text>
                            {this.props.datas.text}
                        </Text>
                        <Text>
                            {this.props.datas.description}
                        </Text>
                        {this.date()}
                        <Image source={require('../images/check.png')} style={{ width: 35, height: 35, marginLeft: '45%' }} />

                    </View>
                </TouchableHighlight>

            )
        } else {
            return (

                    <View style={styles.container}>
                        <Text>
                            {this.props.datas.text}
                        </Text>
                        <Text>
                            {this.props.datas.description}
                        </Text>
                    </View>
            )
        }
    }

    date() {
        let day = moment(this.props.datas.createdDate).format('YYYY-MM-DD HH:mm')
        return (
            <Text>
                {day}
            </Text>
        )
    }

    redirect() {
        // const { navigate } = this.props.navigation
        console.log('dans Row')
        console.log(JSON.stringify(this.props.navigation))
        this.props.navigation.navigate('ItemDetailPage', { ID: this.props.datas.id })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 15,
        borderBottomColor: 'skyblue',
        borderBottomWidth: 1
    },
})

const App = StackNavigator({
    Row: { screen: Row },
    ItemDetailPage: { screen: ItemDetailPage },
})