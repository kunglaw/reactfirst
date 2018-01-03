import React,{Component} from "react";
import {View,Text} from "react-native";
import style1 from "../assets/css/css1";

export default class Index extends Component{

  render()
  {
    return(
      <View style={style1.view}>
          <Text style={style1.h1}> Hello World </Text>
      </View>
    );
  }

}
