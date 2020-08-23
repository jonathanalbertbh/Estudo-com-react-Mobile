import React, { useState, useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import { RectButton} from 'react-native-gesture-handler';

import style from './style';

import logoLanding from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import Heart from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';

import api from '../../connectionApi/connection';

export default function Landing(){

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=> {
        api.get('totalconnections').then(response =>{
            const{total} = response.data;

            setTotalConnections(total);
        })
    }, []);

    const navigation = useNavigation();

    function handleNavigatetoGiveClassesPage(){
        navigation.navigate('GiveClasses');
    }

    function handleStudyNavigationTabs(){
        navigation.navigate('StudyTabs')
    }

    return(
        <View style={style.container}>
            <Image source={logoLanding} style={style.banner}/>
            <Text style={style.title} >
                Seja bem-vindo, {'\n'}
                <Text style={style.titleBold}> O que deseja fazer?</Text>
            </Text>

            <View style={style.buttonsContainer}>
                <RectButton 
                onPress={handleStudyNavigationTabs}
                style={[style.button, style.buttonPrimary]}>
                    <Image source={studyIcon}/>

                    <Text style={style.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton style={[style.button, style.buttonSecondary]} onPress={handleNavigatetoGiveClassesPage}>
                    <Image source={giveClassesIcon}/>

                    <Text style={style.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={style.totalConnections}>
                Total de {totalConnections} conexões já realizada {' '} <Image source={Heart}/>
            </Text>
        </View>
    )
}