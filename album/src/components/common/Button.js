import React from 'react';
import {  StyleSheet,Text, TouchableOpacity } from 'react-native';

// Create component.
class Button extends React.Component {

  render() {
    const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity style={buttonStyle} onPress={ this.props.onPress}>
        <Text style={textStyle}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  textStyle : {
    alignSelf: 'center',
    color:'#007aff',
    fontWeight: '600',
    paddingTop : 10 ,
    paddingBottom:10,
    fontSize: 15
  },
 buttonStyle : {
   flex : 1,
   alignSelf: 'stretch',
   backgroundColor:'#fff',
   borderWidth : 1,
   borderRadius: 5
 }
});

export { Button }