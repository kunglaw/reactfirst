import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Card,CardItem,Body,Text,Button} from "native-base";

export default class CardBox extends Component{

  constructor()
  {
    super();
  }

  render()
  {

    let props = this.props;

    return(

      <Card>
          <CardItem header>
            <Text>{props.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {props.tab}
              </Text>
              {props.button}
            </Body>
          </CardItem>

       </Card>
    )

  }
}

const cardStyle = StyleSheet.create({

  footer:{
      "fontSize":12
  }

});
