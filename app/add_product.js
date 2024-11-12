import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput,  } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { router } from 'expo-router'

export default function add_product() {
  return (
    <View style={styles.contianer}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>router.back()} >
                <Image style={styles.back} source={require('../assets/imgs/back.png')} />
            </TouchableOpacity>
            <Text style={styles.header_text}>Add new <Text style={styles.text_green} >Product</Text> to you're store</Text>
      </View>


        <View style={styles.body} >
            <View style={styles.pic_container}>
                <TouchableOpacity style={styles.camera_btn}><Image style={styles.camera}  source={require('../assets/imgs/camera.png')}/></TouchableOpacity>
            </View>


            <View style={styles.input_section_1}>
                
                <View style={styles.product_name}>
                    <Image style={styles.icon} source={require('../assets/imgs/image.png')} />
                    <TextInput style={styles.product_name_input} placeholder='Product Name'  />
                </View>


                <View style={styles.price}>
                    <Image style={styles.icon} source={require('../assets/imgs/image-2.png')} />
                    <TextInput style={styles.price_input} placeholder='Price'  />
                </View>

            </View>


            <View style={styles.description}>
                <Image style={styles.icon} source={require('../assets/imgs/image-1.png')} />
                <TextInput style={styles.description_input} placeholder='Product Details'  />
            </View>


            <View style={styles.input_section_1}>
                
                <TouchableOpacity style={styles.cateory}>
                    <Image style={styles.icon} source={require('../assets/imgs/image-3.png')} />
                    <Text style={styles.text_gray}>Product Category</Text>
                    <Image style={styles.icon} source={require('../assets/imgs/image 48.png')} />
                </TouchableOpacity>


                <View style={styles.price}>
                    <Image style={styles.icon} source={require('../assets/imgs/image-4.png')} />
                    <TextInput style={styles.price_input} placeholder='Stock'  />
                </View>

            </View>

            <TouchableOpacity style={styles.add_product_btn} >
          <Text style={styles.add_text}>Add Product</Text>
        </TouchableOpacity>


        </View>




      <Navbar On={'menu'} />
    </View>
  )
}

const styles = StyleSheet.create({

    text_gray : {
        color : '#B1B1B1',
    },

    add_text : {
        color : 'white',
        fontWeight : 'bold',
    },  

    add_product_btn : {
        marginTop : 40,
        marginBottom : 20,
        flex : 0,
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : 54,
        backgroundColor : '#01A163',
        borderRadius : 15,
    },

    cateory: {
        width : '60%',
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'space-between',
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }, 

    description_input : {
        width : '90%',
        height : 90,
        textAlignVertical :'top',
    },

    description : {
        marginTop : 20,
        flexDirection : 'row',
        width : '93%',
        padding : 10,
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    input_section_1 : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
    },

    price : {
        width : '30%',
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },


    price_input : {
        width : '50%',
        height : 20, 
    },

    product_name_input : {
        width : '70%',
        height : 20, 
    },


    product_name: {
        width : '60%',
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    icon : {
        width : 30,
        height : 30,
    },  


    camera_btn : {
        position : 'absolute',
        right : 10,
        bottom : 10,
        padding : 10,
        borderRadius : '100%',
        backgroundColor : '#B4B3B3'
    },

    camera : {
        width : 30,
        height : 30,
    },

    pic_container :{
        width :    200,
        height : 200,
        backgroundColor : '#D9D9D9',
        borderRadius : 15,
    },

    header_text :  {
        color : '#B4B3B3'
    },

    text_green : {
        color : '#01A163'
    },

    contianer : {
        flex : 1,
    },

    body : { 
        width : '90%',
        alignSelf : 'center',
        alignItems : 'center',
        marginTop : 20,
    },

    header : { 
        width : '90%',
        alignSelf : 'center',
        gap : 10,
      },
})