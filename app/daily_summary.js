import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { router, useLocalSearchParams } from 'expo-router'

export default function daily_summary() {

    const {userdata} = useLocalSearchParams()

  return (
    <View style={styles.container}>
        <View style={styles.main_content}> 
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> router.back()} >
                    <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
                </TouchableOpacity>
                <Text style={styles.title_text}>Daily Summary</Text> 
            </View>

            <View style={styles.status_section}> 

                <View style={styles.status_container}> 
                    <Text style={styles.text_status_header}>Total Transaction</Text>
                    <Text style={styles.text_status_amount}>40</Text>
                </View>

                <View style={styles.status_container}> 
                    <Text style={styles.text_status_header}>Total Product Sold</Text>
                    <Text style={styles.text_status_amount}>79</Text>
                </View>
            </View>

            <Image style={styles.ai_img} source={require('../assets/imgs/ai.png')} />

            <Text style={styles.mar}>Recommended to re-stock</Text>

            <View style={styles.green_container}>
                <Text style={styles.text_light}>Out of Stock in: <Text style={styles.text_bold}>Oct 23 2024</Text></Text>
                <View style={styles.green_container_items}>
                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/pancit_canton.png")} />
                        <Text style={styles.text_sm}>Panct Canton</Text>
                    </View>

                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/Nova-Cheddar-40g.png")} />
                        <Text style={styles.text_sm}>Nova</Text>
                    </View>

                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/SM2025575-1.jpg")} />
                        <Text style={styles.text_sm}>Bingo</Text>
                    </View>

                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/Wafello-Chocolate-Wafer-53.5g.png")} />
                        <Text style={styles.text_sm}>Wafello</Text>
                    </View>

                </View>
            </View>

            <View style={styles.break} ></View>
            
            <Text style={styles.mar}>Product you want to try</Text>

            <View style={styles.green_container}>
                <Text style={styles.text_light}>Store with Stocks: <Text style={styles.text_bold}>149</Text></Text>
                <View style={styles.green_container_items}>
                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/mikmin.jpg")} />
                        <Text style={styles.text_sm}>Mik-Mik</Text>
                    </View>

                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/breeze.png")} />
                        <Text style={styles.text_sm}>Breeze</Text>
                    </View>

                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/modess.jpg")} />
                        <Text style={styles.text_sm}>Modess</Text>
                    </View>

                    <View style={styles.green_container_item}>
                        <Image style={styles.green_container_item_img} source={require("../assets/imgs/demo_products/lighterllc.jpg")} />
                        <Text style={styles.text_sm}>LLC Lighter</Text>
                    </View>

                </View>
            </View>

        </View>
        <Navbar On={'home'} data={userdata}/>
    </View>
  )
}

const styles = StyleSheet.create({

    mar : {
        marginBottom : 10
    },

    break : {
        margin : 10
    },

    text_bold : {
        fontWeight : 'bold'
    },

    text_sm : {
        fontSize : 10,
    },

    text_light : {
        color : "white"
    },

    green_container_item_img : {
        width : 50,
        height : 50,
        objectFit : 'contain'
    },

    green_container_item : {
        width : 85,
        height : 85,
        backgroundColor : 'white',
        alignItems : 'center',
        padding : 10,
        borderRadius : 15,
    },

    green_container_items : {
        flexDirection : 'row',
        justifyContent : 'space-between',

        
    },

    green_container : {
        width : '100%',
        backgroundColor : '#01A163',
        padding : 15,
        borderRadius : 15,
        gap: 10,
    },

    ai_img : {
        width : 30,
        height : 30,
        margin : 10,
    },

    text_status_amount : {
        color : '#01A163' ,
        fontWeight : '900',
        fontSize : 30,
    },

    text_status_header : {
        fontWeight : "bold"
    },

    status_container : {
        alignItems : 'center',
        gap : 20,
    },

    status_section : {
        marginTop : 30,
        marginBottom : 30,
        flexDirection : "row",
        justifyContent : 'center',
        gap : 30,
    },


    container : {
        flex : 1,
    },
    main_content :{
        width : '95%',
        alignSelf : 'center',
    },
    header : {
        flexDirection : 'row',
        alignItems : 'center',
        gap : 20,
    },
    title_text : {
        color : '#01A163' ,
        fontWeight : 'bold',
        fontSize : 20
    }
})