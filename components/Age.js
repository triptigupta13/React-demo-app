import React from 'react';
import {View,Text,Button,Alert, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {navigation} from "react-navigation";


export default class Age extends React.Component{

    constructor(props){
        super(props);
          this.state={
            person: null
          }
      }
      
    componentDidMount(){
        axios.get('https://api.agify.io', {
            params: {
              name: this.props.navigation.getParam('name','No-name')
            }
          })
          .then((response) => {
            console.log(response);
            this.setState({person: response.data});
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render(){
        const {person} = this.state
        return(
            <View>
                {
                    person ?
                    <Text>{person.age}</Text> : <ActivityIndicator />
                }
            </View>
           
        )
    }
}
