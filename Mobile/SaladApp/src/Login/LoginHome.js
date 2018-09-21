import React, {Component} from 'react';
import {Container,Header,Content,Left,Title,Right,Form,Item,Label,Input,Button,Text,Card,CardItem,Body } from 'native-base';
//import firebase from 'react-native-firebase';
import {GoogleSignin,GoogleSigninButton,statusCodes} from 'react-native-google-signin';


class LoginHome extends Component {

  constructor(props){
    super(props);
    this.state = {username:"",password:"",welcomeMsg:""};
    this.onLogin = this.onLogin.bind(this);
    this.onGoogleSignIn = this.onGoogleSignIn.bind(this);
    console.log("In constructor of LoginHome");
  }

  componentDidMount(){
    let welcomeMsg = "";
    GoogleSignin.configure({
      //scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      iosClientId : '797049291430-1nv7uj9t3an1e31n4upp7i418th8ujg0.apps.googleusercontent.com',
    });
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

  async onLogin(){
    console.log("Login pressed");
    let {username,password} = this.state;
    this.props.navigation.navigate("HomeRoute");
  }

  async onGoogleSignIn(){
    GoogleSignin.signIn()
        .then((data) => {
            console.log(data);
            // const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken,data.accessToken);
            // return firebase.auth().signInWithCredential(credential);
        })
        .then((currentUser) => {
            console.log('Google Login with user : ${JSON.stringify(currentUser.toJOSN())}')
        })
        .catch((error) => {
          console.log('login failed with error : ${error}');
        })
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
          <Text> Not a user? Register now. </Text>
          <Card>
            <CardItem>
              <Text> Sign in with </Text>
              <GoogleSigninButton
                  style={{ width: 48, height: 48 }}
                  size={GoogleSigninButton.Size.Icon}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this.onGoogleSignIn}
                  />
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}


export default LoginHome;