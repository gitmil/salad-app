import React,{Component} from 'react';
import LoginHome from './Login/LoginHome';
import GroupRouter from './Groups/index';
import HomeRoute from './Home/HomeRoute';
import {DrawerNavigator} from "react-navigation";


const AppRouter = DrawerNavigator({
        Login : {screen : LoginHome },
        HomeRoute : {screen : HomeRoute},
        GroupRouter : {screen : GroupRouter}
    },
    {
        initialRouteName : "Login"
    }
);

export default AppRouter;
