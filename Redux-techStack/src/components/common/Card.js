import React from 'react';
import {  StyleSheet,Text, View } from 'react-native';

// Create component.
class Card extends React.Component {
  render() {
    return (
       <View style ={styles.containerStyle}>
         { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
   borderWidth: 1,
    borderRadius:2,
    borderColor: '#ddd',
    marginTop: 15,
    marginRight: 5,
    marginLeft: 5

  }
});

export { Card }