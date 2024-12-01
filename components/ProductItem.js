import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import images from '../database/images';

export default function ProductItem({product_img, product_name, product_price, product_categ, product_stock, data, userdata}) {

    const imageSource = images[product_img]

    const product_data = JSON.parse(data)
    
    return (
    <TouchableOpacity style={styles.container} onPress={()=>router.push({pathname : '/view_product' , params : {userdata : userdata, product : data}})}> 
        <Image style={styles.img} source={imageSource}/>
        {
            product_data.status == "low" ? 

            (
                <View style={styles.status}>
                    <Image source={require('../assets/imgs/product_status/lowonstock.png')} />
                </View>
            )

            : <></>
        }
        {
            product_data.status == "not" ? 

            (
                <View style={styles.status}>
                    <Image source={require('../assets/imgs/product_status/notavilable.png')} />
                </View>
            )

            : <></>
        }
        {
            product_data.status == "out" ? 

            (
                <View style={styles.status}>
                    <Image source={require('../assets/imgs/product_status/phaseout.png')} />
                </View>
            )

            : <></>
        }
        <Text style={styles.price} >₱{product_price}</Text>
        <Text style={styles.name} >{product_name}</Text>
        <Text style={styles.text_sm_gray} >{product_categ}</Text>
        <Text style={styles.text_sm_gray} >Stock : {product_stock}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({


    status : {
        height : '100%',
        width : '100%',
        position : 'absolute',
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center'
    },

    container : {
        padding : 10, 
        width : 180,
        paddingTop : 20,
        paddingBottom : 20,
        borderRadius : 15,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    price : {
        fontSize : 35,
        fontWeight : 'bold',
        color : '#01A163'
    },

    img : {
        width : 150,
        height : 100,
        objectFit : 'contain',
        alignSelf : 'center'
    },

    name : {
        fontSize : 20,
    },

    text_sm_gray : {
        color : '#808080'
    }


})