import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Feather} from '@expo/vector-icons';

import style from './style';
import PageHeader from '../../Componests/PageHeader';
import TeacherItem, {Teacher} from '../../Componests/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../connectionApi/connection';





export default function TeacherList(){
    const[teachers, setTeachers] = useState([]);
    const[isFilterVisible, setIsFilterVisible] = useState(false);
    const[favorites, setFavorites] = useState<number[]>([]);

    const[subject, setSubject] = useState('');
    const[week_day, setWeekDay] = useState('');
    const[time, setTime] = useState('');

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedsTeachersIds = favoritedTeachers.map(
                    (teacher: Teacher) => {
                        return teacher.id;
                    }
                )
                setFavorites(favoritedsTeachersIds);
            }
        })
    }

    

    function activeDesactiveFilter(){
        setIsFilterVisible(!isFilterVisible)
    }

    async function handleFilterSubmit(){
        loadFavorites();
        const response = await api.get('list', {
            params:{
                subject,
                week_day,
                time,
            }
            
        });
            setIsFilterVisible(false);
            setTeachers(response.data);

            
    }



    

    return(
        <View style={style.container}>
            <PageHeader title="Proffy Disponíveis" 
                componentReact={
                    (
                        <BorderlessButton
                            onPress={activeDesactiveFilter}
                        >
                            <Feather name="filter" size={20} color="#FFF"> Filtro</Feather>
                        </BorderlessButton>   
                    )
                   
                }
            >
            
            {isFilterVisible && (
                <View style={style.searchForm}>
                <Text style={style.label}>Matéria</Text>
                <TextInput 
                    
                    style={style.input}
                    value={subject}
                    onChangeText={text => setSubject(text)}
                    placeholder="Qual a matéria ?"
                    placeholderTextColor ="#C1BCC"
                />
                <View style={style.inputGroup}>
                    <View style={style.inputBlock}>
                        <Text style={style.label}>Dia da semana</Text>
                        <TextInput 
                            
                            value={week_day}
                            onChangeText={text => setWeekDay(text)}
                            placeholderTextColor ="#C1BCC"
                            style={style.input}
                            placeholder="ex.: segunda-feira"
                            
                        
                        />
                    </View>
                    <View style={style.inputBlock}>
                        <Text style={style.label}>Horário</Text>
                        <TextInput
                            value={time}
                            onChangeText={text => setTime(text)}
                            placeholderTextColor ="#C1BCC" 
                            style={style.input}
                            placeholder="ex.: 0:00"
                        
                        />
                    </View>
                </View>

                <RectButton style={style.submitButton}
                    onPress={handleFilterSubmit}
                    >
                    <Text style={style.submitButtonText}>Filtrar</Text>
                </RectButton>

            </View>
            )}
            
            </PageHeader>

            

            <ScrollView
            style={style.teacherList}
            contentContainerStyle={
                {
                    paddingHorizontal:16,
                    paddingBottom: 16
                }
            }

            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />

                    )
                })}
            </ScrollView>
        </View>
    )
}