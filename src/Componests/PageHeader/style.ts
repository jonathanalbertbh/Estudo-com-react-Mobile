import { StyleSheet } from "react-native";

const style =  StyleSheet.create({

    container:{
       padding: 40,
       backgroundColor: '#8258E5'
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight:32,
        maxWidth: 160,
        marginVertical:40
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }



})

export default style;