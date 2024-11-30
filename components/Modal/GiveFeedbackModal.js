import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'

export default function GiveFeedbackModal({user, closeFunction, open, functionCall}) {
 
    return (
        <>
            {
                open ? 
                (
                    <View style={styles.container}>
                        <BlurView 
                            intensity={50}
                            tint='dark'
                            style={styles.blur}
                        
                        />
                        <View style={styles.modal}>
                            <View style={styles.header}>
                                <Text style={styles.text_light}>Feedback</Text>
                                <TouchableOpacity style={styles.close_btn} onPress={closeFunction}><Text style={styles.text_light}>x</Text></TouchableOpacity>
                            </View>
                            <View style={styles.prod_info}>
                                <Image style={styles.img} source={require('../../assets/imgs/user/PicsArt_07-10-07.45.13.jpg')} />
                                <Text style={styles.text_light}>{user.name}</Text>
                            </View>
                            <View style={styles.stars}>
                                <Text style={styles.text_light}>Give a Star</Text>
                                <Image source={require('../../assets/imgs/stars.png')} />
                            </View>
                            <TextInput style={styles.input} placeholder='Say something...' />
                            <TouchableOpacity style={styles.confirm_btn} onPress={functionCall}>
                                <Text style={styles.text_light}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
                : <></>
            }

        
        </>
  )
}


const styles = StyleSheet.create({

    text_green : { 
        color : '#01A163',
        fontWeight : 'bold',
        fontSize : 20,
    },

    confirm_btn : {
        width : '100%',
        backgroundColor : '#01A163',
        padding  : 15,
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
        width : '90%',
        alignSelf : 'center',
        marginTop : 10,
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center',
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
        fontSize : 15,
    },

    img : {
        width : 64,
        height : 64,
        borderRadius : '100%',
        borderWidth : 1,
        borderColor : 'white',
    },

    modal : {
        top : 150,
        alignSelf : 'center',
        zIndex : 100,
        width : 350,
        backgroundColor : '#003A2E',
        padding : 15,
        borderRadius : 15,
    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    close_btn : {
        backgroundColor : '#B4B3B3',
        width : 30,
        height : 30,
        justifyContent : 'center',
        alignItems : "center",
        borderRadius : '50%',
    },

    container : {
        width : '100%',
        height : '100%',
        flex : 1,
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 100,
    }, 
    stars : {
        alignItems : 'center',
        gap : 10,

    },
    input : {
        width : '100%',
        alignSelf : 'center',
        height : 100,
        backgroundColor : 'white',
        borderRadius : 15,
        padding : 10,
        marginTop : 20,
    },
})