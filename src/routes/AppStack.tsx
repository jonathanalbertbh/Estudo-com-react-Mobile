import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const AppStackNavigation = createStackNavigator();

export default function AppStack(){
    return(
        <NavigationContainer>
            <AppStackNavigation.Navigator screenOptions={{headerShown: false}}>
                <AppStackNavigation.Screen name="Landing" component={Landing} />
                <AppStackNavigation.Screen name="GiveClasses" component={GiveClasses}/>
                <AppStackNavigation.Screen name="StudyTabs" component={StudyTabs}/>
            </AppStackNavigation.Navigator>
        </NavigationContainer>
    );
}

