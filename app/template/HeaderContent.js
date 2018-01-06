import React,{Component} from "react";
import {View} from "react-native";
import {Header,Left,Right,Body,Title,Button,Icon, Drawer} from "native-base";

export default class HeaderContent extends Component{

  openDrawer(){
    this._drawer._root.open();
  };

  render()
  {
      let props = this.props

      return(
        <Header>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

      )
  }
}
