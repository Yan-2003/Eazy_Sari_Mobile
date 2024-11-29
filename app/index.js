import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Navbar from '../components/Navbar';
import { useLocalSearchParams } from 'expo-router';
import Searchbar from '../components/Searchbar';
import LoadingScreen from '../components/LoadingScreen';
import SearchModal from '../components/Modal/SearchModal';
export default function Home() {

    const {userdata} = useLocalSearchParams()

    const [isLoading, setisLoading] = useState(false);

    const [isSearchModal, setisSearchModal] = useState(false);



    useEffect(() => {

        console.log('userdata: ', userdata)

        setisLoading(true)

        setTimeout(()=>{
            if(userdata == null){
                //router.push('/login')
                setisLoading(false)
            }else{
                setisLoading(false)
            }
        }, 200)
        
    }, []);


  return (
    <>
        {
            isLoading ? <LoadingScreen /> : 
            <TouchableWithoutFeedback onPress={()=>{
                setisSearchModal(false)
                Keyboard.dismiss
            }} >
                <View style={styles.container}>
                    <SearchModal close={()=>setisSearchModal(false)} open={isSearchModal}/>
                    <View style={styles.header}>
                        <Image style={styles.header_logo} source={require('../assets/imgs/mini_logo.png')} /> 
                        <Searchbar searchFuncation={()=>setisSearchModal(true)} />
                    </View>

                    <Text style={styles.store_title} >Gwapo Sari-Sari Store</Text>
                    <Image style={styles.bannder} source={require("../assets/imgs/Navbar icon/store roof.png")} />
                    <ScrollView contentContainerStyle={styles.scroll_content}>
                        <View style={styles.container_transaction}>
                            <View>
                                <Text>Today's Total Transaction</Text>
                                <View style={styles.transaction_counter}>
                                    <Image source={require("../assets/imgs/transaction.png")} style={styles.transaction_img} />
                                    <Text style={styles.transaction_counter_text}>250</Text>
                                </View>

                            </View>

                            <TouchableOpacity style={styles.transaction_btn} onPress={()=> router.push({pathname : '/new_transaction' , params : {userdata : userdata}})} >
                                <Text style={styles.text_light} >New Transaction</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.best_product_container} onPress={()=> router.push( {pathname : '/best_product' , params : {userdata : userdata}})}>
                            <View style={styles.best_product_header}>
                                <Text style={styles.best_prouct_text_title}>Best Product</Text>
                                <Image source={require("../assets/imgs/crown.png")} style={styles.crown_img} />
                            </View>

                            <View style={styles.best_product_content}>
                                <View style={styles.best_product_detial}>
                                    <Text style={styles.price}>₱15</Text>
                                    <View>
                                        <Text style={styles.product_name}>Pancit Canton</Text>
                                        <Text style={styles.sold}>Sold: <Text style={styles.text_green}>200</Text></Text> 
                                    </View>
                                </View>
                                <Image style={styles.best_product_top_img} source={require('../assets/imgs/demo_products/pancit_canton.png')} />
                            </View>


                        </TouchableOpacity>

                        <View style={styles.tools_content}>
                            <TouchableOpacity style={styles.low_stock}>
                                <View style={styles.warning_header}>
                                    <Text>Low Stock</Text>
                                    <Image source={require('../assets/imgs/warning-sign.png')} style={styles.warning_img} />
                                </View>
                                
                                <View style={styles.low_stock_products}>
                                    <Image style={styles.low_stock_product_img} source={require("../assets/imgs/demo_products/Nova-Cheddar-40g.png")} />
                                    <Image style={styles.low_stock_product_img} source={require("../assets/imgs/demo_products/Wafello-Chocolate-Wafer-53.5g.png")} />
                                    <Image style={styles.low_stock_product_img} source={require("../assets/imgs/demo_products/SM2025575-1.jpg")} />
                                </View>

                                <View style={styles.view_more}>
                                    <Text style={styles.text_gray}>View More</Text>
                                </View>



                            </TouchableOpacity>

                            <View style={styles.tools_section_2}>
                                <TouchableOpacity style={styles.total_proucts} onPress={()=> router.push({pathname : '/product' , params : {userdata : userdata}})}>
                                    <Text>Total Product</Text>
                                    <View style={styles.total_products_content}>
                                        <Image source={require("../assets/imgs/product_icon.png")} style={styles.product_img} />
                                        <Text style={styles.text_green_bold}>500</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.daily_summary} onPress={()=> router.push({pathname : '/daily_summary', params : {userdata : userdata}})}>
                                    <Image source={require("../assets/imgs/ai.png")} style={styles.ai_img} />
                                    <View style={styles.daily_summary_content}>
                                        <Image source={require("../assets/imgs/daily_summary_icon.png")} style={styles.daily_summary_img} />
                                        <Text style={styles.text_green_bold_r} >Daily Summary</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </ScrollView>
                

                    <Navbar On={'home'} data={userdata}/>
                </View>
            </TouchableWithoutFeedback>
        }

    
    </>
  )
}


const styles = StyleSheet.create({

    scroll_content : {
        paddingBottom : 100,
    },  

    daily_summary_content : {
        left : 5,
        bottom : 10,
    },

    ai_img : {
        width : 20,
        height : 20,
        alignSelf : "flex-end"
    },


    daily_summary_img : {
        width : 100,
        height : 100,
    },

    total_products_content : {
        width : "70%",
        flexDirection : "row",
        alignItems : 'center',
        gap : 10,
        alignSelf : 'center',
        marginTop : 10,
    },

    text_green_bold : {
        color : '#01A163',
        fontWeight : 'bold',
        fontSize : 35,
    },

    text_green_bold_r : {
        color : '#01A163',
        fontWeight : 'bold',
        fontSize : 20,
    },

    product_img : {
        width : 55,
        height : 55,
    },

    low_stock_product_img :  {
        width : 60,
        height : 60,
    },

    text_gray : {
        color : '#B4B3B3'
    },

    low_stock_products :  {
        flex : 1,
        justifyContent : 'center', 
        alignItems : 'center'
    },

    view_more : {
        borderTopColor : '#B4B3B3',
        borderTopWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5,
    },


    warning_header : {
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
        justifyContent : 'center'
    },

    warning_img : {
        width : 20, 
        height : 20,
    },

    daily_summary : {
        padding : 15,
        width : 210,
        height : 165,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        borderRadius : 15,
    },

    total_proucts : {
        padding : 10,
        width : 210,
        height : 115,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        borderRadius : 15,
    },

    low_stock : {
        padding : 10,
        width : 155,
        height : 290,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        borderRadius : 15,
    },

    tools_section_2 : {
        gap : 10,
    },

    tools_content : {
        flexDirection : 'row',
        width : '90%',
        alignSelf : 'center',
        marginTop : 15,
        justifyContent : 'space-between'
    },

    sold :  {
        fontSize : 20,
    },

    best_product_detial : {
        gap : 10,
    },

    text_green : {
        color : '#01A163',
    },

    product_name :{
        fontSize : 20,

    },

    price : {
        fontSize : 35,
        fontWeight : 'bold',
        color : '#01A163',
    },

    best_prouct_text_title : { 
        fontSize : 25, 
        fontWeight : 'bold' 
    },

    best_product_content :{
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    best_product_header :{
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },

    best_product_container : {
        alignSelf : 'center',
        borderRadius : 15,
        padding : 20,
        marginTop : 20,
        width : '90%',
        height : 145, 
        alignItems : "center",
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },

    best_product_top_img : {
        width : 140,
        height : 80,
        //objectFit :'contain'
    },

    crown_img :{
        bottom : 15,
        left : 5,    
        width : 20,
        height : 20,
    },

    text_light : {
        color : "white"
    },

    transaction_btn : {
        backgroundColor : "#01A163",
        width : 150,
        height : 70,
        justifyContent :'center',
        alignItems : 'center',
        borderRadius : 15,
    },  

    transaction_counter_text : {
        fontSize : 60,
        fontWeight : 'bold',
        color : "#01A163",
    },

    transaction_counter : {
        flexDirection : 'row',
        alignItems : 'center'
    },

    transaction_img : {
        width :  60,
        height : 60,
    },

    container_transaction : {
        flexDirection : 'row',
        width : '80%',
        justifyContent : 'space-between',
        alignItems : 'center',
        alignSelf : 'center',
        marginTop : 20
    },

    store_title : {
        color : '#003A2E',
        fontWeight : 'bold',
        marginLeft : 10,
        fontSize : 20,
        marginTop : 20,
    },

    bannder : {
        marginTop : 10,
        width : "100%",
        height : 55,
    },  

    header : {
        width : '95%',
        alignSelf : 'center',
        justifyContent : 'space-between',
        flexDirection : "row",
        width : "95%",
        alignItems : 'center'
    }, 

    header_logo : {
        width : 40,
        height : 40,
    },

    container : {
        flex : 1,
    }
})