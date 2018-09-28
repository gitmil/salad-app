import React,{Component} from 'react';
import {Text,Header,Left,Body,Right,Title,Button} from 'native-base';
import {withNavigation} from 'react-navigation';

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(){
        this.props.navigation.navigate("Login");
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