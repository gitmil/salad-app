import React,{Component} from 'react';
import ActivityTab from './ActivityTab';
import PaymentsTab from './PaymentsTab';
import PreferenceTab from './PreferenceTab';
import { createBottomTabNavigator } from 'react-navigation';


const HomeRoute = createBottomTabNavigator({
    ActivityTab : {screen : ActivityTab },//To Check-In/Check-out
    PaymentsTab : {screen : PaymentsTab },
    PreferenceTab : {screen : PreferenceTab }
});

export default HomeRoute;
