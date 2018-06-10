import React from 'react';
import { Text, StyleSheet, ActivityIndicator, ListView, View, RefreshControl } from 'react-native'
import { createStackNavigator, StackNavigator } from 'react-navigation'
import PTRView from 'react-native-pull-to-refresh'
import axios from 'axios'
import Row from './Row'
import ItemDetailPage from './ItemDetailPage'


export default class MyList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            report: null
        }
        this.fetchAPI()
    }
    // static navigationOptions = {
    //     title: 'Ma TodoList'
    // }


    _onRefresh() {
        this.setState({ refreshing: true })
        axios.get(`http://formation-roomy.inow.fr/api/todoitems`)
            .then((response) => {
                this.setState({ report: response.data })
            }).then(() => {
                this.setState({ refreshing: false })
            })
    }

    fetchAPI() {
        axios.get(`http://formation-roomy.inow.fr/api/todoitems`)
            .then((response) => {
                this.setState({ report: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator size="large" color='skyblue' />
            )
        }
        else {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

            return (
                <View>
                    <ListView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                        dataSource={ds.cloneWithRows(this.state.report)}
                        renderRow={(row, j, k) => <Row datas={row} navigation= {this.props.navigation}/>}

                    />

                </View>

            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const App = StackNavigator({
    MyList: { screen: MyList },
    Row: {screen: Row},
    ItemDetailPage: { screen: ItemDetailPage },
})