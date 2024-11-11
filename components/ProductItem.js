import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProductItem({product_img, product_name, product_price, prodcut_categ, product_stock}) {
  
  
    return (
    <View style={styles.container}>
        <Image source={product_img}/>
        <Text style={styles.price} >{product_price}</Text>
        <Text style={styles.text_sm_gray} >{product_name}</Text>
        <Text style={styles.text_sm_gray} >{prodcut_categ}</Text>
        <Text style={styles.text_sm_gray} >{product_stock}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        width : 180,
        height : 200,
        borderWidth : 1,
        borderRadius : 15,
        backgroundColor : 'white'
    },
})