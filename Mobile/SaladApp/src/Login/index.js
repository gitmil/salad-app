import React,{Component} from 'react';
import LoginHome from './LoginHome';
import GroupRouter from '../Groups/index';
import {DrawerNavigator} from "react-navigation"


const LoginRouter = DrawerNavigator({
        Login : {screen : LoginHome },
        GroupRouter : {screen : GroupRouter}
    },
    {
        initialRouteName : "Login"
    }
);

export default LoginRouter;
