import React from 'react'
import { SectionList, FlatList, ScrollView, Alert, StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import api from './api/index'

class TestProps extends React.Component {
  render () {
    return (
      <Text>Hello {this.props.name}!</Text>
    )
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowText: false,
      text: '',
      data: {}
    }
    setInterval(() => {
      this.setState((previousState) => {
        return { isShowText: !previousState.isShowText };
      })
    }, 1000)
  }
  _onPressButton () {
    this.getMovies()
    //Alert.alert('You tapped the button!')
  }
  async getMovies () {
    let res = await api.getMovies()
    this.setState({
      data: res.data
    })
  }
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>{this.state.data.title}</Text>
          <Text style={[styles.text, styles.font]}>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Image source={pic} style={{width: '100%', height: 110}}/>
          <TestProps name='gagagag'/>
          <TestProps name='aa'/>
          <View style={{width: '100%', height: 200, flexDirection: 'row', backgroundColor: 'powderblue'}}>
            <View style={{flex: 1, height: 200, backgroundColor: 'red'}}></View>
            <View style={{flex: 1, height: 200, backgroundColor: 'black'}}></View>
            <View style={{flex: 1, height: 200, backgroundColor: 'green'}}></View>
          </View>
          <TextInput style={{height: 40, width: '100%'}} onChangeText={(text) => this.setState({text})}/>
          <Text>{this.state.text.split(' ').map((text) => text && '🍕').join(' ')}</Text>
          <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="white">
            <View style={styles.button}>
              <Text>aaa</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      // <View>
      //   <FlatList data={[
      //     {key: 'Devin'},
      //     {key: 'Jackson'},
      //     {key: 'James'},
      //     {key: 'Joel'},
      //     {key: 'John'},
      //     {key: 'Jillian'},
      //     {key: 'Jimmy'},
      //     {key: 'Julie'},
      //   ]}
      //   renderItem={({item}) => (
      //     <Text style={styles.item}>{item.key}</Text>
      //   )}
      //   >
      //   </FlatList>
      // </View>
      // <View style={styles.container}>
      //   <SectionList sections={[
      //     {title: 'D', data: ['Devin']},
      //     {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      //   ]}
      //   renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      //   renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      //   keyExtractor={(item, index) => index}
      //   >
      //   </SectionList>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  text: {
    color: 'red'
  },
  font: {
    fontSize: 20
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
