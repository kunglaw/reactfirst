import React,{Component} from "react";
//import {View,Text} from "react-native";
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs } from 'native-base';

export default class Home extends Component{
  render()
  {
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Tabs initialPage={1}>
              <Tab heading="Tab1">
                <Card>
                    <CardItem header>
                      <Text>NativeBase</Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                          Tab 1
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem footer>
                      <Text>GeekyAnts</Text>
                    </CardItem>
                 </Card>
              </Tab>
              <Tab heading="Tab2">
                  <Text> Tab 2 </Text>
              </Tab>
              <Tab heading="Tab3">
                  <Text> Tab 3 </Text>
              </Tab>
            </Tabs>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    )
  }
}
