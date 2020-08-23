import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';

import style from './style';
import { BorderlessButton  } from 'react-native-gesture-handler';
import { useNavigation, useLinkProps } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

interface PageHeaderProps{

    title: string;
    componentReact?: ReactNode;
}

 const PageHeader: React.FC<PageHeaderProps> = ({title, children, componentReact} ) => {
    const {navigate} = useNavigation();
    

    function handleGoBack(){
        navigate('Landing');
    }

    return(
        <View style={style.container}>
            <View style={style.topBar}>
                <BorderlessButton onPress={handleGoBack}
                    
                
                >
                    <Image source={backIcon} resizeMode="contain"/> 
                           
                </BorderlessButton>
                <Image source={logoImage} resizeMode="contain"/>

                
            </View>
                <View style={style.header}>
                    <Text style={style.title}>{title}</Text>
                    {componentReact}
                </View>   
               
            

             {children}       
        </View>
    )
}

export default PageHeader;