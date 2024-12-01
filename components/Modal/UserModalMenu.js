import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function UserModalMenu({open, method, onwhere, removeuser }) {
  return (
    <>
    {
        open ?
         <View style={styles.modal}>
            {
                onwhere != 'transact' ? 
                (
                    <TouchableOpacity style={styles.menu_item} onPress={method}>
                        <Image source={require('../../assets/imgs/transaction_icon.png')} />
                        <Text>Tranasaction</Text>
                    </TouchableOpacity>
                ) :
                (
                    <TouchableOpacity style={styles.menu_item} onPress={method}>
                        <Image source={require('../../assets/imgs/feedback.png')} />
                        <Text>Feedback</Text>
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity style={styles.menu_item} onPress={removeuser}>
                <Image source={require('../../assets/imgs/trash.png')} />
                <Text style={styles.redtext}>Remove User</Text>
            </TouchableOpacity>
        </View> 
        : <></>
    }
    </>
  )
}

const styles = StyleSheet.create({
    modal : {
        right : 40,
        top : 30,
        position : 'absolute', 
        backgroundColor : 'white',
        padding : 10,
        gap : 5,
        borderWidth : 1,
        borderColor : '#B4B3B3',
        borderRadius : 5,
        zIndex : 100
    },  
    menu_item : {
        flexDirection : 'row',
        gap : 5,
        alignItems : 'center'
    },
    redtext : {
        color : '#FD6E67'
    },
})