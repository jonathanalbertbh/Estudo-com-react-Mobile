import { StyleSheet } from "react-native";

const style =  StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#F0F0F7'
    },

    teacherList:{
       marginTop: -60, 
       padding:16,
       
    },
    searchForm:{
        marginBottom: 30,
    },

    label:{
        color:'#D4C2FF',
        fontFamily: 'Poppins_400Regular'
    },
    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent :'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    inputBlock:{
        width: '49%',
    },

    submitButton:{
        backgroundColor:"#04D361",
        height : 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitButtonText:{
        fontFamily:'Archivo_700Bold',
        color: '#FFF',
        fontSize: 18,

        

    }

})

export default style;