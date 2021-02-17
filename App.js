/// In App.js in a new project

import React from "react";
import { View, TexStyleSheet,Button} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from "react-navigation";


import Home from './components/Home';
import Choose from './components/Choose';
import Meme from './components/Meme';
import Age from './components/Age';


const Navigator = createStackNavigator({
  Age: {
    screen: Age
  },
  Meme: {
    screen: Meme
  },
});

const SwitchNavigator = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Choose: {
    screen: Choose
  },
  navigator: Navigator
})

const App = createAppContainer(SwitchNavigator)

export default App;