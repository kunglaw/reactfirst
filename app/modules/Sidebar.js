import React,{Component} from "react";
import {View} from "react-native";
import {Content,Text,List,ListItem,Separator,Icon} from "native-base";
import IconFa from 'react-native-vector-icons/FontAwesome';

export default class Sidebar extends Component{

  render()
  {
    return(
      <Content style={{backgroundColor:"#ffffff"}}>
        <Separator bordered>
          <Text> NAVIGATION </Text>
        </Separator>
        <ListItem >
          <Icon name='home' style={{fontSize: 20, color: 'blue'}} />
          <Text> Home </Text>
        </ListItem>
        <ListItem>
          <Icon name='contact' style={{fontSize: 20, color: 'blue'}} />
          <Text> Contact </Text>
        </ListItem>
        <ListItem last>
          <IconFa name="mobile" style={{fontSize: 20, color: 'blue'}}/>
          <Text> No Telp </Text>
        </ListItem>
        <Separator bordered>
          <Text>MIDFIELD</Text>
        </Separator>
        <ListItem>
          <Text>Caroline Aaron</Text>
        </ListItem>
      </Content>
    );
  }

}
