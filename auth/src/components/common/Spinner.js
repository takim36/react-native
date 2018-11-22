import React from 'react';
import {  StyleSheet, View, ActivityIndicator } from 'react-native';

class Spinner extends React.Component {

  render() {

    const {size} = this.props;
    return (
      <View style ={styles.spinnerStyle}>
      <ActivityIndicator size = {size || 'large'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  spinnerStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'

  }

});


export { Spinner }