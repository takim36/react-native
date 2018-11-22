import React from 'react';
import {  StyleSheet,Text, View } from 'react-native';

// Create component.
export default class Header extends React.Component {

  render() {
    return (
      <View style={ styles.headerStyle }><Text style={ styles.textStyle }>{this.props.headerText}</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {width:2 , height:2},
    shadowOpacity:.5

  },
  textStyle: {
    fontSize :30
  }
});