import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { useLocalSearchParams, router } from 'expo-router'

export default function delete_account() {

    const {userdata} = useLocalSearchParams()

  return (
    <View style={styles.constainer}>
       <View style={styles.header}>
            <View>
                <TouchableOpacity onPress={()=> router.back()} >
                    <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
                </TouchableOpacity>
                <Text style={styles.title_text}>Delete Account</Text> 
            </View>   
        </View>
        <View style={styles.body}> 
            <Text style={styles.text_lg}>Are you sure you want to delete  your account?</Text>
            <Text style={styles.text_l}>Once you delete your account, it cannot be undone. All your data will be permanently erased from this app includes your profile information, preferences, saved content, and any activity  history.</Text>
            <Text style={styles.text_l}>We’re sad to see you go, but we understand that sometimes it’s necessary. Please take a moment to consider the consequences before proceeding.</Text>
        </View>
        <View style={styles.button_section}>
            <TouchableOpacity style={styles.confirm_btn} onPress={()=>router.push('/login')}><Text style={styles.text_light}>Delete Account</Text></TouchableOpacity>
            <TouchableOpacity style={styles.close_btn} onPress={()=>router.back()}><Text>Cancel</Text></TouchableOpacity>
        </View>
      
      <Navbar On={'menu'} data={userdata} />
    </View>
  )
}


const styles = StyleSheet.create({
    constainer : {
        flex : 1,
    },
    header : {
        width : '90%',
        alignSelf : 'center',      
    },
    title_text : {
        fontWeight : 'bold',
        fontSize : 20,
    },

    body : {
        marginTop : 30,
        width : '90%',
        gap : 50,
        alignSelf : 'center'
    },
    text_lg : {
        fontSize : 22,
        fontWeight : 'bold',
    },
    text_l : {
        fontSize : 20,
        textAlign : 'justify'
    },
    button_section : {
        position : 'absolute',
        width : '90%',
        alignSelf : "center",
       flexDirection : 'column',
       gap : 20,
       bottom : 100,
    },
    confirm_btn : {
        width : '100%',
        backgroundColor : '#FE0A0A',
        padding  : 15,
        borderRadius : 10,
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
    },
    close_btn : {
        width : '100%',
        backgroundColor : '#D9D9D9',
        padding  : 15,
        borderRadius : 10,
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
    },
    text_light : {
        color  : 'white'
    },

})