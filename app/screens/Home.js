import React, {Component} from "react";
import {View} from "react-native";
import {Container,Text,Content} from "native-base";

export default class Home extends Component{
  


  render()
  {
    this.props.navigator.toggleDrawer({
      side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      animated: true, // does the toggle have transition animation or does it happen immediately (optional)
      to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
    });

    return(
        <Container>
          <Content>
              <Text> First Tab Screen </Text>
          </Content>
        </Container>
    );
  }

}
