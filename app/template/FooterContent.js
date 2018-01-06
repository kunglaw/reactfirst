import React,{Component} from "react";
import {View,Alert} from "react-native";
import {Footer,FooterTab,Button,Text} from "native-base";

export default class FooterContent extends Component{

  onPressEvent()
  {
    Alert.alert(" visit Yudhistira.id for more detail ");
  }

  render()
  {
    return(
      <Footer>
        <FooterTab>
          <Button full onPress={this.onPressEvent} >
            <Text> PT Yudhistira Barokah </Text>
          </Button>
        </FooterTab>
      </Footer>

    )
  }

}
