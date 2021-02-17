import React from 'react';
import {View,Text,Button, ActivityIndicator} from 'react-native';
import axios from 'axios';


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
              name: "abcd"
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
