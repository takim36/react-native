import React from 'react';
import {  StyleSheet, Text } from 'react-native';
import  {Button, CardSection, Card, Input, Spinner} from "./common";
import firebase from 'firebase';

export default class LoginForm extends React.Component {

  state = { email : '', pass : '', error : '',loading: false};

  onButtonPress (){
    const {email, pass} = this.state;
    this.setState({error : '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, pass).then(
      this.onLoginSuccess.bind(this))
      .catch(
      () => {
      firebase.auth().createUserWithEmailAndPassword(email, pass).then(
        this.onLoginSuccess.bind(this))
        .catch(
          this.onLoginFail.bind(this)
      )
    });

  }

  onLoginFail(error){
    this.setState({
      error : error.message,
      loading: false,
      email:'',
      pass : ''
    });
  }

  onLoginSuccess(){
    this.setState({
      error : '',
      loading: false,
      email:'',
      pass : ''
    });
  }

  renderButton(){

    if(this.state.loading){
      return <Spinner size = 'small'/>;
    }

    return <Button  buttonText ='Log in' onPress = {this.onButtonPress.bind(this)}/>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label = 'Email' autoCorrect = {false} placeholder="user@gmail.com" value={ this.state.email } onChangeText = { email => this.setState({ email })}/>
        </CardSection>

        <CardSection>
          <Input label = 'Password' secureTextEntry
                 autoCorrect = {false}
                 placeholder="password"
                 value={ this.state.pass }
                 onChangeText = { pass => this.setState({ pass })}/>

        </CardSection>

        <CardSection>
          <Text style={styles.errorTextStyle}>{ this.state.error }</Text>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }

}

const styles = StyleSheet.create({

  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'

  }

});
