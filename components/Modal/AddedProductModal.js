import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'

export default function AddedProductModal({product_img , product_name, functionCall, closeFunction, quantity_add, quantity_minus, value , onChange}) {
    console.log("product name : ", product_name)
 
    return (
    <View style={styles.container}>
        <BlurView 
            intensity={50}
            tint='dark'
            style={styles.blur}
        
        />
        <View style={styles.modal}>
            <View style={styles.header}>
                <Text style={styles.text_light}>Add Product</Text>
                <TouchableOpacity style={styles.close_btn} onPress={closeFunction}><Text style={styles.text_light}>x</Text></TouchableOpacity>
            </View>
            <View style={styles.product_quantity_section}>
                <View style={styles.prod_info}>
                    <Image style={styles.img} source={product_img} />
                    <Text style={styles.text_light_n}>{product_name}</Text>
                </View>

                <View style={styles.quantity_input_section}>
                    <Text style={styles.text_light_n}>Quantity</Text>
                    <View style={styles.quantity_input_content}>
                        <TouchableOpacity style={styles.quantity_m_btn} onPress={quantity_minus}><Text>-</Text></TouchableOpacity>
                        <TextInput value={value} onChange={onChange} style={styles.quantity_input} />
                        <TouchableOpacity style={styles.quantity_m_btn} onPress={quantity_add}><Text>+</Text></TouchableOpacity>
                    </View>
                </View>


            </View>
            <TouchableOpacity style={styles.confirm_btn} onPress={functionCall}>
                <Text style={styles.text_green}>Confirm</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    text_green : { 
        color : '#01A163',
        fontWeight : 'bold',
        fontSize : 20,
    },

    confirm_btn : {
        width : '90%',
        backgroundColor : 'white',
        padding  : 20,
        borderRadius : 10,
        alignSelf : 'center',
        marginTop : 15,
        alignItems : 'center',
        justifyContent : 'center',
    },

    product_quantity_section : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },

    quantity_input_section : {
        flexDirection : 'column',
        justifyContent :  'center',
        alignItems : 'center',
        gap : 5,
    },

    quantity_input : {
        width : 90,
        padding : 10,
        backgroundColor: 'white',
        borderRadius : 10,

    },

    quantity_m_btn : {
        backgroundColor : 'white',
        padding : 10,
        borderRadius : 10,
    },

    quantity_input_content : {
        flexDirection : 'row',
        alignItems : 'center',
        gap : 5,

    },

    text_light_n : {
        color : 'white'
    },

    prod_info : {
        marginTop : 10,
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center'
    },

    blur : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        flex : 1,
    },

    text_light : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
    },

    img : {
        width : 50,
        height : 50,
        objectFit : 'contain',
        backgroundColor : 'white',
        borderRadius : 5,
    },

    modal : {
        top : 150,
        alignSelf : 'center',
        zIndex : 100,
        width : 350,
        height : 200,
        backgroundColor : '#01A163',
        padding : 15,
        borderRadius : 15,
    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    close_btn : {
        backgroundColor : '#B4B3B3',
        width : 30,
        height : 30,
        justifyContent : 'center',
        alignItems : "center",
        borderRadius : '50%',
    },

    container : {
        width : '100%',
        height : '100%',
        flex : 1,
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 100,
    }
})