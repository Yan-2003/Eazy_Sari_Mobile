import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductItem({product_img, product_name, product_price, product_categ, product_stock}) {
    
    
    
    const images = {
        "pancit_canton": require('../assets/imgs/demo_products/pancit_canton.png'),
        "wafello": require('../assets/imgs/demo_products/Wafello-Chocolate-Wafer-53.5g.png'),
        "bingo": require('../assets/imgs/demo_products/SM2025575-1.jpg'),
        "rebisco": require('../assets/imgs/demo_products/rebisco-crackers.jpg'),
        "piattos": require('../assets/imgs/demo_products/Piattos-Cheese-40g.png'),
        "nova": require('../assets/imgs/demo_products/Nova-Cheddar-40g.png'),
        // Add more images here as needed
    };

    const imageSource = images[product_img]
    
    return (
    <TouchableOpacity style={styles.container}>
        <Image style={styles.img} source={imageSource}/>
        <Text style={styles.price} >₱{product_price}</Text>
        <Text style={styles.name} >{product_name}</Text>
        <Text style={styles.text_sm_gray} >{product_categ}</Text>
        <Text style={styles.text_sm_gray} >Stock : {product_stock}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container : {
        padding : 10, 
        width : 180,
        height : 210,
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