import React,{Component} from 'react';
import {Text,Header,Left,Body,Right,Title,Button} from 'native-base';
import {withNavigation} from 'react-navigation';
import {GoogleSignin} from 'react-native-google-signin';

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    async onLogout(){

            try {
              await GoogleSignin.revokeAccess();
              await GoogleSignin.signOut();
              this.props.navigation.navigate("Login");
              //this.setState({ user: null }); // Remember to remove the user from your app's state as well
            } catch (error) {
              console.error(error);
            }
          
        //this.props.navigation.navigate("Login");
    }

    render(){
        return(
            <Header>
                <Left/>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right>
                    <Button transparent onPress={this.onLogout }> 
                        <Text>Logout</Text> 
                    </Button>
                </Right>
            </Header>
        )
    }
}

export default withNavigation(HeaderComponent);