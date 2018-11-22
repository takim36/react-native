import React from 'react';
import {  StyleSheet,Text, View, TextInput } from 'react-native';

class Input extends React.Component {

  render() {

    const  {label, onChangeText, value, autoCorrect, placeholder, secureTextEntry} = this.props;

    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
      <View style = {containerStyle}>
          <Text style = {labelStyle}>{ label }</Text>
          <TextInput style = {inputStyle} value={ value } autoCorrect = {autoCorrect} placeholder = { placeholder } onChangeText = { onChangeText } secureTextEntry = {secureTextEntry} />
      </View>
    );
  }

}

const styles = StyleSheet.create({

  inputStyle: {
    color: '#000',
    fontSize: 18,
    flex: 2,
    paddingRight: 10,
    paddingLeft: 10,
    lineHeight:23

  },
  labelStyle: {
    fontSize :18,
    paddingLeft: 20,
    flex : 1
  },
  containerStyle : {
    height: 40,
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center'
  }

});


export { Input } ;