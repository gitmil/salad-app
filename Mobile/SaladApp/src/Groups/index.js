import React,{Component} from 'react';
import Groups from './Groups';
import {StackNavigator} from "react-navigation"


const GroupRouter = StackNavigator({
        Groups : {screen : Groups }
    },
    {
        initialRouteName : "Groups"
    }
);

export default GroupRouter;
