import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'
import React from 'react'

export default function DeleteUserModal({closeFunction, open}) {
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
                                <Text style={styles.text_gray}>Remove User</Text>
                                <Text style={styles.text_mid}>Are you sure you want to Remove this user from this store?</Text>
                                <Text style={styles.text_mid_gray}>Note: that all transaction of this user will still remain but will have a mark of red knowing that the user has been remove from the store.</Text>
                                <View style={styles.button_section}>
                                    <TouchableOpacity style={styles.close_btn} onPress={closeFunction}><Text>Cancel</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.confirm_btn} onPress={closeFunction}><Text style={styles.text_light}>Remove</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                    : <></>
                }


            </>
  )
}


const styles = StyleSheet.create({

    text_gray : { 
        color : '#808080',
        fontWeight : 'bold',
        fontSize : 15,
    },

    confirm_btn : {
        flex : 1,
        backgroundColor : '#FD6E67',
        padding  : 15,
        borderRadius : 10,
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
    },

    text_light : {
        color  : 'white'
    },


    blur : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        flex : 1,
    },

    text_mid : {
        marginTop : 20,
        fontWeight : 'bold',
        fontSize : 12,
    },
    text_mid_gray : {
        marginTop : 20,
        color : '#808080',
        fontSize : 11,
    },

    modal : {
        top : 150,
        alignSelf : 'center',
        zIndex : 100,
        width : 350,
        backgroundColor : 'white',
        padding : 15,
        borderRadius : 15,
        borderColor :  "#808080",
        borderWidth : 1,
    },

    close_btn : {
        flex : 1,
        backgroundColor : '#D9D9D9',
        padding  : 15,
        borderRadius : 10,
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
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

    button_section : {
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 50,
    },

})