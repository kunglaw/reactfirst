import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Post from './Post';
//import PushedScreen from './PushedScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Home', () => Home); // example adalah namespace
  Navigation.registerComponent('example.Post', () => Post);
  //Navigation.registerComponent('example.PushedScreen', () => Post);
}
