import React, { useState, useEffect } from 'react';

import { View, Text, ScrollView } from 'react-native';

import style from './style'
import PageHeader from '../../Componests/PageHeader';
import TeacherItem, { Teacher } from '../../Componests/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

import { useFocusEffect } from '@react-navigation/native';


export default function Favorites(){

    const [favorites, setFavorites] = useState([]);

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response=>{
            if(response){
                const favoritesTeachers = JSON.parse(response);
                
                setFavorites(favoritesTeachers);
            }
        })
    }

    useFocusEffect(()=>{
        loadFavorites();
    })

    return(
        <View style={style.container}>
            <PageHeader title="Meus Proffys favoritos"/>


            <ScrollView
            style={style.teacherList}
            contentContainerStyle={
                {
                    paddingHorizontal:16,
                    paddingBottom: 16
                }
            }

            >
                {favorites.map((teacher: Teacher) => {
                    return(
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )        
                })}
            </ScrollView>
        </View>
    )
}