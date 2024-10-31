import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Navbar() {
  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.nav_btn}>
                <Image style={styles.nav_icon} source={require('../assets/imgs/Navbar icon/home-1.png')} />
                <Text style={styles.text_gray}> Home </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn}>
                <Image style={styles.nav_icon} source={require('../assets/imgs/Navbar icon/product-1.png')} />
                <Text style={styles.text_gray}> Products </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn_big}>
                <Image style={styles.nav_icon_big} source={require('../assets/imgs/Navbar icon/plus_light.png')} />
                <Text style={styles.text_gray}> New Transaction </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn}>
                <Image style={styles.nav_icon} source={require('../assets/imgs/Navbar icon/list-1.png')} />
                <Text style={styles.text_gray}> Transaction </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_btn}>
                <Image style={styles.nav_icon} source={require('../assets/imgs/Navbar icon/menu-1.png')} />
                <Text style={styles.text_gray}> Menu </Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}


const styles = StyleSheet.create({




    text_gray : {
        color : '#B1B1B1'
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
        alignSelf : 'center'
    },


    main : {
        position : 'absolute',
        bottom : 0,
        width : '100%',
        borderTopColor : '#B1B1B1',
        borderTopWidth : 0.5
    },
    
})