import React from 'react';
import {  StyleSheet,Text, View, Image, Linking } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
// Create component.
export default class AlbumDetail extends React.Component {

  render() {

    const {title, artist, thumbnail_image, image, url} = this.props.album;

    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainer}>
            <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style ={ styles.textContainer }>
            <Text style={ styles.textStyle}>{ title }</Text>
            <Text>{ artist }</Text>
          </View>
        </CardSection>

        <CardSection>
            <Image style={styles.imageStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
          <Button  buttonText ='Buy Now'  onPress={() => Linking.openURL(url) } />
        </CardSection>

      </Card>
    );
  }
}

const styles = StyleSheet.create({

  textContainer: {
    flexDirection:'column',
    justifyContent:'space-around',
    marginLeft: 10
  },
  textStyle: {
    fontSize :18
  },
  thumbnailContainer : {
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnailStyle : {
    height : 50,
    width : 50
  },
  imageStyle : {
    height : 300,
    width : null,
    flex : 1
  },

});