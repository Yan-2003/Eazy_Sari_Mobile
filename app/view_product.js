import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import images from '../database/images'
import ProductModalMenu from '../components/Modal/ProductModalMenu'
import DeleteProductModal from '../components/Modal/DeleteProductModal'

export default function view_product() {

    const {userdata, product} = useLocalSearchParams()


    const [productModal, setproductModal] = useState(false);

    const [deleteModal, setdeleteModal] = useState(false);

    
    const productdata = JSON.parse(product)

    const user = JSON.parse(userdata)

    const openDelteModal = () => {
        setdeleteModal(true)
        setproductModal(false)

    }


  return (
    <TouchableWithoutFeedback onPress={()=>setproductModal(false)}>
        <View style={styles.container}>
            <DeleteProductModal open={deleteModal} closeFunction={()=>setdeleteModal(false)} productname={productdata.name}/>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={()=> router.back()} >
                        <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
                    </TouchableOpacity>
                    <Text style={styles.title_text}>{!productdata.archive ? "Products" : "Archive Products"}</Text> 
                </View>
                {
                    user.data.rule == 'Admin' ? (
                        <>
                            <TouchableOpacity onPress={()=>setproductModal(true)}>
                                <Image style={styles.menu_dots} source={require('../assets/imgs/menu_dots.png')} />
                            </TouchableOpacity>

                            <ProductModalMenu open={productModal} user={JSON.stringify(user)} product_data={productdata} delete_product={()=>openDelteModal()}  />
                        </>

                    ) : <></>
                }
            </View>
            <View style={styles.body}>
                <View style={styles.box}>
                    <Image style={styles.image} source={images[productdata.image]} /> 
                    {
                        productdata.status == "low" ? 

                        (
                            <View style={styles.status}>
                                <Image source={require('../assets/imgs/product_status/lowonstock_bannder.png')} />
                            </View>
                        )

                        : <></>
                    }
                    {
                        productdata.status == "not" ? 

                        (
                            <View style={styles.status}>
                                <Image source={require('../assets/imgs/product_status/notavilable_banner.png')} />
                            </View>
                        )

                        : <></>
                    }
                    {
                        productdata.status == "out" ? 

                        (
                            <View style={styles.status}>
                                <Image source={require('../assets/imgs/product_status/phaseout_bannder.png')} />
                            </View>
                        )

                        : <></>
                    }
                </View>
                <Text style={styles.price}>₱{productdata.price}</Text>
                <Text style={styles.name}>{productdata.name}</Text>
                <Text style={styles.category}>{productdata.category}</Text>
                <Text style={styles.discription}>{productdata.discription}</Text>
                <Text style={styles.stock}>Stock: {productdata.stock}</Text>


            </View>


        <Navbar On={'products'} data={userdata} />
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

    box: {
        width : '100%',
    },  

    menu_dots : {
        width : 60,
        height : 60,
        objectFit : 'contain',
        paddingLeft : 20,
        paddingTop : 20,
        paddingBottom : 20,
    },

    status : {
        height : '100%',
        width : '100%',
        position : 'absolute',
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center'
    },


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
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
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