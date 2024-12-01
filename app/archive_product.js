import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { useLocalSearchParams, router } from 'expo-router'
import products from '../database/products'
import ProductItem from '../components/ProductItem'
export default function archive_product() {

    const {userdata} = useLocalSearchParams()

  return (
    <View style={styles.contianer}>
        <View style={styles.header}>
            <View>
                <TouchableOpacity onPress={()=> router.back()} >
                    <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
                </TouchableOpacity>
                <Text style={styles.title_text}>Archive Products</Text> 
            </View>   
        </View>

        <ScrollView contentContainerStyle={styles.scroll_product}>
        {
          products.map((item, index)=>{

            if(item.archive){
              return (
                <ProductItem 
                    key={index}
                    userdata={userdata}
                    data={JSON.stringify(item)}
                    product_name={item.name} 
                    product_price={item.price}  
                    product_categ={item.category}
                    product_img={item.image}
                    product_stock={item.stock} 
                  />
              )
            }
              
          })
        }

      </ScrollView>






      <Navbar On={'menu'} data={userdata} />
    </View>
  )
}

const styles = StyleSheet.create({
    contianer : {
        flex : 1,
    },
    scroll_product : {
        marginTop : 20,
        width : '90%',
        flexDirection : 'row',
        flexWrap : 'wrap',
        gap : 10,
        justifyContent : 'space-between',
        alignSelf : 'center',
        paddingBottom : 100,
      },
      header : {
        width : '90%',
        alignSelf : 'center',      
    },
    title_text : {
        fontWeight : 'bold',
        fontSize : 20,
    },
})