import React,{Component} from "react";
import {View} from "react-native";
import {Text,Container,Content} from "native-base";

export default class PushedScreen extends Component
{
  render()
  {
    return(
      <Container>
        <Content>
          <Text> Pushed Screen </Text>
        </Content>
      </Container>
    );
  }
}
