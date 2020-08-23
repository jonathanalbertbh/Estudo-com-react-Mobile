import React from 'react';

import style from './style';
import { View, Text, ImageBackground } from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import GiveClassesImageBackground from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';
export default function GiveClasses(){

    const navigation = useNavigation();

    function BackToLading(){
        navigation.goBack(
            
        )
    }


    return (
        <View style={style.container}> 
            <ImageBackground 
            resizeMode="contain"    
            source={GiveClassesImageBackground} style={style.content}
            >
                <Text style={style.title}>Quer ser um Proffy</Text>
                <Text style={style.description}>Para começar, você precisa se cadasdrar como professor na plataforma web</Text>     

               

            </ImageBackground>  
            <RectButton style={style.okButton}
                onPress={BackToLading}
                >
                <Text style={style.textOkButton}>tudo bem!!</Text>
            </RectButton>   
        </View>
    )
}