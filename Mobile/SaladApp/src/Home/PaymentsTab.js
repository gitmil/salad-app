import React,{Component} from 'react';
import {Container,Content,Text} from 'native-base';
import HeaderComponent from './HeaderComponent';

class PaymentsTab extends Component {

    render(){
        return(
            <Container>
                <HeaderComponent title="Payments"/>
                <Content>
                    <Text>PaymentsTab</Text>
                </Content>
            </Container>
        )
    }
}

export default PaymentsTab;