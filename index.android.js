import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home Label',
      screen: 'example.Home', // this is a registered name for a screen
      icon: require('./assets/img/home.png'),
      //selectedIcon: require('../assets/img/one_selected.png'), // iOS only
      title: 'Home Title'
    },
    {
      label: 'Post',
      screen: 'example.Post',
      icon: require('./assets/img/post.png'),
      //selectedIcon: require('../assets/img/two_selected.png'), // iOS only
      title: 'Post'
    }
  ]
});
