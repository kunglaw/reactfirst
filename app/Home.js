import React,{Component} from "react";
//import {View,Text} from "react-native";
import { Container,Drawer, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs } from 'native-base';
// import buatan sendiri
import CardBox from "./modules/CardBox";
import SideBar from "./modules/Sidebar";
//import HeaderContent from "./template/HeaderContent";
import FooterContent from "./template/FooterContent";

export default class Home extends Component{

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
                <Title> Yudhistira.id </Title>
              </Body>
              <Right />
            </Header>
            <Content>
                <Tabs initialPage={0}>
                  <Tab heading="Tab1">
                    <CardBox tab="content dari card1" title="Title Card 1" />
                    <CardBox tab="content dari card1" title="Title Card 1" />
                    <CardBox tab="content dari card1" title="Title Card 1" />
                  </Tab>
                  <Tab heading="Tab2">
                        <CardBox tab="content dari card2" title="Title Tab 2" />
                  </Tab>
                  <Tab heading="Tab3">
                        <CardBox tab="content dari card3" title="Title Card 3" />
                  </Tab>
                </Tabs>
            </Content>
            <FooterContent />
          </Container>
      </Drawer>

    )
  }
}
