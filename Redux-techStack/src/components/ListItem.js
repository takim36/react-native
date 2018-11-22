import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import { CardSection } from './common'
import  * as actions from '../actions';
import { connect } from 'react-redux';
// Create component.

class ListItem extends React.Component {

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription(){
    const {library,expanded} = this.props;

    if(expanded){

      return (
        <CardSection>
          <Text style ={{ flex : 1 }}>{ library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const {titleStyle} = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback  onPress = {() => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style={titleStyle}>{ title }</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18
  }
});



const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedId === ownProps.library.id;
  return {
    expanded
  }
};


export default connect(mapStateToProps,actions)(ListItem);