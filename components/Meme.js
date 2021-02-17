import React from 'react';
import {View, Text, ScrollView, FlatList, ActivityIndicator,Image, StyleSheet} from 'react-native';
import axios from 'axios';
import { create } from 'react-test-renderer';

export default class Meme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://api.imgflip.com/get_memes')
      .then((response) => {
        console.log(response);
        this.setState({memes: response.data.data.memes});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {memes} = this.state;
    console.log(memes);
    return (
      <View>
          {memes.length>0 ?
        <FlatList
          data={memes}
          renderItem ={({item}) => (
              <View>
                <Text>{item.name}</Text>
                <Image style = {styles.image} source={{uri: item.url}}></Image>
                </View>
          )
          }
          keyExtractor = {(meme) => meme.id}
        /> : <ActivityIndicator />
          }
        {/* <ScrollView>
                {
                    memes.length>0 &&
                    memes.map((meme) => <Text>{meme.name}</Text>)
                }
                </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    image: {
        width:100,
        height:100,
    },
});