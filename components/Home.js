import React from 'react';
import {View,Text,TextInput,Button,Alert,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      number: '',
      inputNumber: '',
    }
  }

    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount = () => {
      AsyncStorage.getItem('number').then((value) => {if(value !== null){
        this.props.navigation.navigate("Choose");
      };
    })
    }
  
    setNumber = (value) => {
      AsyncStorage.setItem('number', value);
    }
  
    myValidate = () => {
      const{inputNumber} = this.state;
      if(inputNumber == ""){
        Alert.alert("Please enter the number");
      }
      else{
        this.setNumber(inputNumber);
        this.props.navigation.navigate("Choose")
      }
    }
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Welcome!</Text>
          <Text>Enter phone Number</Text>
          <TextInput style={styles.input} onChangeText={inputNumber => this.setState({inputNumber})} keyboardType='numeric' maxLength={10}></TextInput>
          <Button onPress ={this.myValidate} title="Save My Number"></Button>  
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    input:{
      borderWidth: 1,
      borderColor: "#575DD9",
      alignSelf: "stretch",
      margin: 32,
      height: 64,
      borderRadius: 6,
      paddingHorizontal: 16,
      fontSize: 24,
      fontWeight: "300"
    },
  })