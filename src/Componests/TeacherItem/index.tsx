import React, { useState } from 'react';
import { View, Image, Text, Linking, TextComponent } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import style from './style';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../connectionApi/connection';




interface PageHeaderProps{
    teacher: Teacher,
    favorited: boolean;
}

export interface Teacher{
    id:number,
    avatar:string,
    bio:string,
    cost:string,
    name:string,
    subject:string,
    whatsapp: string,
}

const TeacherItem: React.FC<PageHeaderProps> = ({teacher, favorited} ) => {3

    const [isFavorited, setIsFavorited] = useState(favorited);

    function callWhatsapp(){
        api.post('connections',{
            user_id: teacher.id
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite(){
        if(isFavorited){
            //adicionar aos favoritos

            const favorites = await AsyncStorage.getItem('favorites');
            
            let favoritesArray = [];

            if(favorites){
                favoritesArray = JSON.parse(favorites)
            }

            const favoritesIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return(
                    teacherItem.id === teacher.id
                )
            })

            favoritesArray.splice(favoritesIndex, 1)

            setIsFavorited(false)
        }else{
            //remover dos favoritos

            const favorites = await AsyncStorage.getItem('favorites');
            
            let favoritesArray = [];

            if(favorites){
                favoritesArray = JSON.parse(favorites)
            }

            favoritesArray.push(teacher);

            setIsFavorited(true);
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

        }
    }

    return(
        <View style={style.container}>
            <View style={style.profile}>
                <Image  
                    source={{uri:teacher.avatar}}
                    style={style.avatar}/>

                    <View style={style.profileInfo}>
                    <Text style={style.name}>{teacher.name}</Text>
                    <Text style={style.subject}>{teacher.subject}</Text>
                    </View>

                    
            </View>    
            <Text style={style.bio}>
                 {teacher.bio}       
            </Text> 
                <View style={style.footer}>
                    <Text style={style.price}>
                        preço/hora {'   '}
                        <Text style={style.priceValue}>R$ {teacher.cost}  </Text>
                    </Text>
                    <View style={style.buttonsContainer}>
                        <RectButton 
                            onPress={handleToggleFavorite}
                            style={[
                            style.favoriteButton, isFavorited ? style.favorited : {}
                            ]}>
                            {isFavorited ? 
                            <Image source={unFavoriteIcon} />
                            : 
                            <Image source={heartOutLineIcon} /> 
                             }
                            
                            
                        </RectButton>

                        <RectButton style={style.contactButton}
                            onPress={callWhatsapp}

                        >
                            <Image source={whatsappIcon} />
                            <Text style={style.contactButtonText}>Entrar em contato</Text>
                        </RectButton>
                    </View>
                </View>  
        </View>
    )

}
export default TeacherItem;