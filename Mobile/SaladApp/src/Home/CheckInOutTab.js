//This page is for check-in/uncheck in

import React,{Component} from 'react';
import {Container,Content,Text,Card,CardItem,Body} from 'native-base';
import HeaderComponent from './HeaderComponent';


class CheckInOutTab extends Component {

    constructor(props){
        super(props);
        this.state = {isNoSaladDay:false}
    }

    componentDidMount(){
        let wkToDayMap = {0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"};
        let noSaladDays = ["Sat","Sun","Tue","Fri"];
        let today = wkToDayMap[(new Date()).getDay()];
        if(noSaladDays.indexOf(today) != -1){
            this.setState({isNoSaladDay:true});
        }
    }

    render(){
        const {isNoSaladDay} = this.state;
        const {isGoogleSignIn, userDetails} = this.props.navigation.state.params;

        return(
            <Container>
                <HeaderComponent title="Check-In/Out"/>
                <Content>
                    {isGoogleSignIn &&
                        <Card transparent>
                            <CardItem>
                                <Text>Welcome {userDetails.user.name} </Text>
                            </CardItem>
                        </Card>
                    }
                    <Card>
                        <CardItem>
                           
                            <Body>
                                {isNoSaladDay &&
                                     <Text> Your Next salad is scheduled on Mon Sep 11</Text> 
                                }
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

}

export default CheckInOutTab;