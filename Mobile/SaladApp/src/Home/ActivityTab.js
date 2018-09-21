//This page is for check-in/uncheck in

import React,{Component} from 'react';
import {Container,Content,Text} from 'native-base';
import HeaderComponent from './HeaderComponent';


class ActivityTab extends Component {

    render(){
        return(
            <Container>
                <HeaderComponent title="Activity"/>
                <Content>
                    <Text>ActivityTab</Text>
                </Content>
            </Container>
        )
    }

}

export default ActivityTab;