import React,{Component} from 'react';
import {Container,Content,Header,Left,Right,Title, Button,Text,Body} from 'native-base';



class Groups extends Component {


    static navigationOptions = ({ navigation } ) => {  
        return {
          header : (
            <Header>
              <Left/>
              <Body>
                <Title>Salad Groups</Title>
              </Body>
              <Right>
                  <Button transparent onPress={()=> navigation.navigate("Login")}> 
                    <Text>Logout</Text> 
                  </Button>
              </Right>
            </Header>
          )
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <Text> Hello </Text>
                </Content>
            </Container>
        )

    }
}

  export default Groups;