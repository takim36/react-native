import React from 'react';
import {  StyleSheet,Text, View } from 'react-native';

// Create component.
class CardSection extends React.Component {
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
    padding: 15,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'relative',
  }
});