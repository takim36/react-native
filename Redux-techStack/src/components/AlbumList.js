import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// Create component.
export default class AlbumList extends React.Component {

  state = { albums : []};

  componentWillMount(){

    const request =  axios.get('http://rallycoding.herokuapp.com/api/music_albums',{
      headers: {
        'Content-Type': 'application/json'
      }});

    request.then(res => this.setState({ albums: res.data }));
  };

renderAlbums(){
  return this.state.albums.map(album =>
    <AlbumDetail key = {album.title} album = {album} />);
}
  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}