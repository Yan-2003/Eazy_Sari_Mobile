import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { router } from 'expo-router'
export default function Navbar({ On }) {







  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.nav_btn} onPress={()=> router.push('/')}>
                <Image style={styles.nav_icon} source={On == 'home' ? require('../assets/imgs/Navbar icon/home_light.png') : require('../assets/imgs/Navbar icon/home-1.png')} />
                <Text style={On == 'home' ? styles.text_green : styles.text_gray}> Home </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn} onPress={()=> router.push('/product')}>
                <Image style={styles.nav_icon} source={On == 'product' ? require('../assets/imgs/Navbar icon/product_light.png') : require('../assets/imgs/Navbar icon/product-1.png')} />
                <Text style={On == 'product' ? styles.text_green : styles.text_gray}> Products </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn_big} onPress={()=>router.push('new_transaction')}>
                <Image style={styles.nav_icon_big} source={require('../assets/imgs/Navbar icon/plus_light.png')} />
                <Text style={On == 'new transaction' ? styles.text_green : styles.text_gray}> New Transaction </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn} onPress={()=> router.push('/transaction')}>
                <Image style={styles.nav_icon}  source={On == 'transaction' ? require('../assets/imgs/Navbar icon/list_light.png') : require('../assets/imgs/Navbar icon/list-1.png')} />
                <Text style={On == 'transaction' ? styles.text_green : styles.text_gray}> Transaction </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn} onPress={()=> router.push('/menu')}>
                <Image style={styles.nav_icon}  source={On == 'menu' ? require('../assets/imgs/Navbar icon/menu_light.png') : require('../assets/imgs/Navbar icon/menu-1.png')} />
                <Text style={On == 'menu' ? styles.text_green : styles.text_gray}> Menu </Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}


const styles = StyleSheet.create({




    text_gray : {
        color : '#B1B1B1'
    },

    text_green : {
        color : '#01A163',
    },


    nav_btn_big : {
        bottom : 15,
        width : 'auto',
        height : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },  

    nav_btn : {
        width : 'auto',
        height : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },

    nav_icon : {
        width : 30,
        height : 30,
    },

    nav_icon_big : {
        width : 60,
        height : 60,
    },

    container : {
        flexDirection : 'row',
        justifyContent :'space-between',
        paddingTop : 10,
        paddingBottom : 10,
        width : '90%',
        alignSelf : 'center',
        backgroundColor : 'white',
    },


    main : {
        position : 'absolute',
        bottom : 0,
        width : '100%',
        borderTopColor : '#B1B1B1',
        borderTopWidth : 0.5,
        backgroundColor : 'white',
    },
    
})