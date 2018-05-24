import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class testProps extends Component {
  render () {
    return (
      <Text style={styles.text}>Hello {this.props.name}!</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red'
  }
})
