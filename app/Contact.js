import React,{Component} from "react";
//import {View,Text} from "react-native";
import { Container,Drawer, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs, Button } from 'native-base';
// import buatan sendiri

import SideBar from "./modules/Sidebar";
import FooterContent from "./template/FooterContent";

export default class Contact extends Component{

  closeDrawer(){
    this._drawer._root.close()
  };
  openDrawer(){
    this._drawer._root.open()
  };

  render()
  {

    return(
      <Drawer
       ref={(ref) => { this._drawer = ref; }}
       content={<SideBar navigator={this._navigator} />}
       onClose={() => this.closeDrawer()} >
          <Container>
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
            <Content>
                <Card>
                  <Text> Contact </Text>
                  <Text> Lorem ipsum sit dolor amet </Text>
                </Card>
            </Content>
            <FooterContent />
          </Container>
      </Drawer>

    )
  }
}
