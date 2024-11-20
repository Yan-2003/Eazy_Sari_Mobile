import {Image, View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import BestProductItem from '../components/BestProductItem'
import { useLocalSearchParams } from 'expo-router'

export default function best_product() {

    const {userdata} = useLocalSearchParams()


  return (
    <View style={styles.container}>
        <Image style={styles.store_roof_img} source={require('../assets/imgs/Navbar icon/store roof.png')} />
        <ScrollView contentContainerStyle={styles.best_product_container}>
            <BestProductItem 
                product_name={'Pancit Canton'} 
                product_price={15}  
                product_sold_num={200}
                product_img={require('../assets/imgs/demo_products/pancit_canton.png')}   
                isTop={true} 
            /> 

            <BestProductItem 
                product_name={'Bingo'} 
                product_price={8}  
                product_sold_num={160}
                product_img={require('../assets/imgs/demo_products/SM2025575-1.jpg')}   
            /> 

            <BestProductItem 
                product_name={'Wafello'} 
                product_price={16}  
                product_sold_num={120}
                product_img={require('../assets/imgs/demo_products/Wafello-Chocolate-Wafer-53.5g.png')}   
            /> 

            <BestProductItem 
                product_name={'Rebisco Crackers'} 
                product_price={8}  
                product_sold_num={110}
                product_img={require('../assets/imgs/demo_products/rebisco-crackers.jpg')}   
            />

            <BestProductItem 
                product_name={'Piattos'} 
                product_price={26}  
                product_sold_num={48}
                product_img={require('../assets/imgs/demo_products/Piattos-Cheese-40g.png')}   
            />

            <BestProductItem 
                product_name={'Nova'} 
                product_price={26}  
                product_sold_num={40}
                product_img={require('../assets/imgs/demo_products/Nova-Cheddar-40g.png')}   
            />

        </ScrollView>
        <Navbar On={'home'} data={userdata} />
    </View>
  )
}

const styles  = StyleSheet.create({

    best_product_container : {
        marginTop : 15,
        width : '100%',
        alignItems : 'center',
        gap : 15,
        paddingBottom : 100,
    },  

    store_roof_img : {
        width : '100%',
        objectFit : 'fill'
    },

    container : {
        flex : 1,

    },
})