import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'

export default function AddProductModal({close}) {
   
    return (
    <View style={styles.container}>
        <BlurView 
            intensity={50}
            tint='dark'
            style={styles.blur}
        
        />
        <View style={styles.modal}>
            <Image source={require('../../assets/imgs/Ellipse 2.png')} />
            <Text style={styles.text_green}>PRODUCT ADDED SUCCESSFULLY</Text>        
            <TouchableOpacity style={styles.confirm_btn} onPress={close}>
                <Text style={styles.text_light}>Okay</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    text_green : { 
        color : '#01A163',
        fontWeight : 'bold',
        fontSize : 20,
    },

    confirm_btn : {
        width : '30%',
        backgroundColor : '#01A163',
        padding  : 10,
        borderRadius : 10,
        alignSelf : 'center',
        marginTop : 15,
        alignItems : 'center',
        justifyContent : 'center',
    },

    text_light_n : {
        color : 'white'
    },

    prod_info : {
        marginTop : 10,
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center'
    },

    blur : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        flex : 1,
    },

    text_light : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
    },

    img : {
        width : 50,
        height : 50,
        objectFit : 'contain',
        backgroundColor : 'white',
        borderRadius : 5,
    },

    modal : {
        top : 150,
        alignSelf : 'center',
        zIndex : 100,
        width : 350,
        height : 200,
        backgroundColor : 'white',
        padding : 15,
        borderRadius : 15,
        alignItems : 'center',
        justifyContent: 'center',
        gap : 10,
    },

    container : {
        width : '100%',
        height : '100%',
        flex : 1,
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 100,
    }
})