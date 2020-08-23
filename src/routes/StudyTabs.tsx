import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

import { Ionicons } from '@expo/vector-icons';
import style from '../pages/Landing/style';

const Navigation = createBottomTabNavigator();


export default function StudyTabs(){
    return(
        <Navigation.Navigator
        
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shhadowOpacity: 0,
                    height: 64
                },

                tabStyle:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'center'
            
                },

                iconStyle:{
                    flex: 0,
                    width: 20,
                    height: 20,
                },

                labelStyle:{
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },

                 inactiveBackgroundColor: '#FAFAFC',
                 activeBackgroundColor: '#EBEBF5',
                 inactiveTintColor: '#C1BCCC',
                 activeTintColor: '#32364D'
            }}
        
        >
            <Navigation.Screen 
            name="TeacherList"
                component={TeacherList} 
                options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: ({color, size, focused}) => {
                    return(
                        <Ionicons name = "ios-easel" color={focused ? '#8257E5' : color} size={size}/>
                    )
                }

            }}
            
                
            />
            <Navigation.Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size, focused}) => {
                        return(
                            <Ionicons name = "ios-heart" color={focused ? '#8257E5' : color} size={size}/>
                        )
                    }
    
                }}
            
            
            />
        </Navigation.Navigator>
    )
}