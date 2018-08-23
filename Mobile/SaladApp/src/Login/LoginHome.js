import React, {Component} from 'react';
import {Container,Header,Content,Left,Title,Right,Form,Item,Label,Input,Button,Text,Card,CardItem,Body } from 'native-base';



class LoginHome extends Component {

  constructor(props){
    super(props);
    this.state = {username:"",password:"",welcomeMsg:""};
    this.onLogin = this.onLogin.bind(this);
    console.log("In constructor of LoginHome");
  }

  componentDidMount(){
    let welcomeMsg = "";
    let timeNow = (new Date).getHours();
    if(timeNow >= 5 && timeNow < 12){ // 5 AM to 12 PM
      welcomeMsg = "Good Morning";
    }else if(timeNow >= 12 && timeNow < 17){ // 12 PM to 5 PM
      welcomeMsg = "Good Afternoon";
    }else{ // 5PM to 5AM
      welcomeMsg = "Good Evening";
    }
    this.setState({welcomeMsg:welcomeMsg})
  }

  onLogin(){
    console.log("Login pressed");
    let {username,password} = this.state;
    this.props.navigation.navigate("GroupRouter");
  }

  render() {

    let {welcomeMsg} = this.state;

    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>{welcomeMsg}</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <Card transparent>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input maxLength={50} onChangeText={(username)=>this.setState({username})}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input maxLength={50} onChangeText={(password)=>this.setState({password})} secureTextEntry={true}/>
              </Item>
            </Form>
            <CardItem>
              <Body style={{flexDirection:'row',justifyContent:'center'}}>
                <Button onPress={this.onLogin}> 
                  <Text>Login</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


export default LoginHome;