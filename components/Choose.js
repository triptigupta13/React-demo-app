import React from 'react';
import {View,Text,Button} from 'react-native';

export default class Choose extends React.Component{

  meme = () => {
    this.props.navigation.navigate("Meme")
  }

  age = () => {
    this.props.navigation.navigate("Age")
  }

    render(){
    return(
      <View>
      <Text>Choose Screen: </Text>
      <Button  onPress = {this.age} title="Want to know your age?"></Button>
      <Button onPress = {this.meme} title="Want to see memes?">
      </Button>
    </View>
    );
  }
  }