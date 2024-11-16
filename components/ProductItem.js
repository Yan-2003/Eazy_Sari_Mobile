import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductItem({product_img, product_name, product_price, product_categ, product_stock, showStock, isLowStockScreen}) {
    
    
    
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
    <View style={styles.product_container}>
        <Image style={styles.img} source={imageSource}/>
        <Text style={styles.price} >₱{product_price}</Text>
        <Text style={styles.name} >{product_name}</Text>
        <Text style={styles.text_sm_gray} >{product_categ}</Text>
        <Text style={styles.text_sm_gray} >Stock : {product_stock}</Text>
        
        {isLowStockScreen && (
            <View style={styles.lowStockBadge}>
                <Text style={styles.lowStockText}>LOW ON STOCK</Text>
            </View>
        )}
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        padding : 10, 
        width : 180,
        height : 210,
        borderWidth : 1,
        borderRadius : 15,
        backgroundColor : 'white',
        borderColor : '#808080',
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
    },

    product_container: {
        borderWidth: 1,
        borderColor: '#B4B3B3',
        borderRadius: 8,
        padding: 10,
        width: '48%',
        position: 'relative',
    },

    lowStockBadge: {
        position: 'absolute',
        top: '40%',
        left: -20,
        right: 0,
        width: 220,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },

    lowStockText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#FF0000',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '80%',
        height: 30,
        textAlign: 'center',
    }
})