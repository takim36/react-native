import React from 'react';
import { FlatList,View,Text } from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

// Create component.
class LibrariesList extends React.Component {

  render() {

    return (
      <FlatList data = {this.props.libraries}
                renderItem={({ item}) => (
                  <ListItem library = {item} />
                )} keyExtractor = {library => library.id.toString()}
                />
    );
  }
}

const mapStateToProps = state => {

  return {
    libraries : state.libraries
  }
};

export default connect(mapStateToProps)(LibrariesList);