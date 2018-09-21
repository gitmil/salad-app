import React,{Component} from 'react';
import {Container,Content,Text} from 'native-base';
import HeaderComponent from './HeaderComponent';

class PreferenceTab extends Component{
    render(){
        return(
            <Container>
                <HeaderComponent title="Preference"/>
                <Content>
                    <Text>PreferenceTab</Text>
                </Content>
            </Container>
        )
    }
}

export default PreferenceTab;