import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function ProductModalMenu({open, product_data, user, delete_product}) {
    
  return (
    <>
    {   
        open ?
         <View style={styles.modal}>
          {
            product_data.archive ?
            (
                <TouchableOpacity style={styles.menu_item}>
                    <Image source={require('../../assets/imgs/archive_icon.png')} />
                    <Text>Unarchive</Text>
                </TouchableOpacity>
            ):
            (
                <>
                    <TouchableOpacity style={styles.menu_item} onPress={()=>router.push({pathname : "/edit_product", params : {userdata : user , product_data : JSON.stringify(product_data)}})} >
                        <Image source={require('../../assets/imgs/edit_icon.png')} />
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_item}>
                        <Image source={require('../../assets/imgs/archive_icon.png')} />
                        <Text>Archive</Text>
                    </TouchableOpacity>
                </>
            )
          }
            <TouchableOpacity style={styles.menu_item} onPress={delete_product}>
                <Image source={require('../../assets/imgs/trash.png')} />
                <Text style={styles.redtext}>Delete</Text>
            </TouchableOpacity>
        </View> 
        : <></>
    }
    </>
  )
}

const styles = StyleSheet.create({
    modal : {
        right : 20,
        top : 40,
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