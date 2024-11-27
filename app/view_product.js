import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import images from '../database/images'

export default function view_product() {

    const {userdata, product} = useLocalSearchParams()

    
    const productdata = JSON.parse(product)


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> router.back()} >
                <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
            </TouchableOpacity>
            <Text style={styles.title_text}>Products</Text> 

        </View>
        <View style={styles.body}>
            <Image style={styles.image} source={images[productdata.image]} /> 
            <Text style={styles.price}>₱{productdata.price}</Text>
            <Text style={styles.name}>{productdata.name}</Text>
            <Text style={styles.category}>{productdata.category}</Text>
            <Text style={styles.discription}>{productdata.discription}</Text>
            <Text style={styles.stock}>Stock: {productdata.stock}</Text>


        </View>


      <Navbar On={'products'} data={userdata} />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
    },
    title_text : {
        fontWeight : 'bold',
        fontSize : 20,
    },
    header : {
        width : '90%',
        alignSelf : 'center',
        gap : 10,
    },
    price : {
        color : "#01A163",
        fontSize : 45,
        fontWeight : 'bold'
    },  
    image: {
        width : 300,
        height : 190,
        alignSelf : 'center',
        objectFit : "contain",
        marginTop : 20,
    },
    name : {
        fontSize : 30,
        fontWeight : "light"
    },
    category : {
        color : "#808080",
        fontSize : 20,
        fontWeight : "light"
    },
    discription : {
        textAlign : 'justify'
    },  
    stock : {
        color : "#808080",
        fontSize : 25,
        fontWeight : "light",
        marginTop : 20,
    },

    body : {
        width : '90%',
        alignSelf : 'center',
        gap: 10,
    },



})