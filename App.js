import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Header } from 'react-native-elements'
import { TabNavigator } from 'react-navigation'
import MyList from './components/MyList'
import About from './components/About'
import NewItem from './components/NewItem'
import ItemDetailPage from './components/ItemDetailPage'

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
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

const Tabs = TabNavigator({
  MyList: { screen: MyList },
  About: { screen: About },
  NewItem: { screen: NewItem },
  ItemDetailPage: { screen: ItemDetailPage }
})