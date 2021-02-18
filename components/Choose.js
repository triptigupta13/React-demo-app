import React from 'react';
import {View,Text,Button,Alert, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Choose extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      name: '',
    }
  }

  componentDidMount = () => {
    AsyncStorage.getItem('name').then((value) => {if(value !== null){
      this.props.navigation.navigate("Age", {name: this.state.name});
    };
  })
  }

  setName = (value) => {
    AsyncStorage.setItem('name', value);
  }

  meme = () => {
    this.props.navigation.navigate("Meme")
  }

  age = () => {
    const {name} = this.state;
    if(name == ""){
      Alert.alert("Please enter the name");
    }
    else{
      this.setName(name);
      this.props.navigation.navigate("Age", {name: this.state.name})
    }
  }

  signout = () => {
    AsyncStorage.removeItem('number');
    this.props.navigation.navigate("Home");
  }

    render(){
    return(
      <View>
      <Text>Choose Screen: </Text>
      <TextInput placeholder="Enter the name here" onChangeText={name => this.setState({name})}></TextInput>
      <Button onPress = {this.age} title="Want to know your age?"></Button>
      <Button onPress = {this.meme} title="Want to see memes?"></Button>
      <Button onPress ={this.signout} title="Sign Out"></Button>
    </View>
    );
  }
  }