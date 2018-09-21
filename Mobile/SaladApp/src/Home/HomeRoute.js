import React,{Component} from 'react';
import CheckInOutTab from './CheckInOutTab';
import PaymentsTab from './PaymentsTab';
import PreferenceTab from './PreferenceTab';
import { createBottomTabNavigator } from 'react-navigation';


const HomeRoute = createBottomTabNavigator({
    CheckInOut : {screen : CheckInOutTab },//To Check-In/Check-out
    Payments : {screen : PaymentsTab },
    Preference : {screen : PreferenceTab }
});

export default HomeRoute;
