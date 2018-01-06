import React, {Component} from "react";
import {View} from "react-native";
import {Container,Text,Content} from "native-base";

export default class Post extends Component{

  render()
  {
    /*this.props.navigator.push({
      screen: 'example.PushedScreen',
      title: 'Pushed Screen'
    });*/

    return(
        <Container>
          <Content>
              <Text> Second Tab Screen </Text>
          </Content>
        </Container>
    );
  }

}
