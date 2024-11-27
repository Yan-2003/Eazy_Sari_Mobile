import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { StyleSheet } from 'react-native'
import ProductItem from '../components/ProductItem'
import { useLocalSearchParams } from 'expo-router'
import products from '../database/products'
export default function product() {


  const {userdata} = useLocalSearchParams()

  const [category, setcategory] = useState("All");


  useEffect(() => {
    
  

  }, [category]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.text_header}>Product</Text> 
          <Searchbar/>
      </View>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.scroll_categ}>
          <TouchableOpacity onPress={()=>setcategory('All')} style={category == 'All' ? styles.categ_selected : styles.categ_item}>
            <Text style={category == 'All' ? styles.text_light : null}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setcategory('Food and Snack')} style={category == 'Food and Snack' ? styles.categ_selected : styles.categ_item}>
            <Text  style={category == 'Food and Snack' ? styles.text_light : null}>Food and Snack</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setcategory('Beverages')} style={category == 'Beverages' ? styles.categ_selected : styles.categ_item}>
            <Text  style={category == 'Beverages' ? styles.text_light : null}>Beverages</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=>setcategory('Cooking Essentials')} style={category == 'Cooking Essentials' ? styles.categ_selected : styles.categ_item}>
            <Text  style={category == 'Cooking Essentials' ? styles.text_light : null}>Cooking Essentials</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setcategory('Household Items')} style={category == 'Household Items' ? styles.categ_selected : styles.categ_item}>
            <Text  style={category == 'Household Items' ? styles.text_light : null}>Household Items</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=>setcategory('Personal Care')} style={category == 'Personal Care' ? styles.categ_selected : styles.categ_item}>
            <Text  style={category == 'Personal Care' ? styles.text_light : null}>Personal Care</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>


      <ScrollView contentContainerStyle={styles.scroll_product}>
        {
          products.map((item, index)=>{

            if(category == item.category || category == "All"){
              return (
                <ProductItem 
                    key={index}
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

      <Navbar On={"product"} data={userdata} />
    </View>
  )
}

const styles = StyleSheet.create({

  text_light : {
    color : 'white'
  },

  categ_selected : {
    backgroundColor : '#01A163',
    borderColor : '#B4B3B3',
    borderWidth : 1,
    borderRadius : 5,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 5,
    color : 'white',
  },


  categ_item : {
    borderColor : '#B4B3B3',
    borderWidth : 1,
    borderRadius : 5,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 5,
  },

  scroll_categ : {
    flex : 0,
    height : 25,
    marginTop : 10,
    gap : 5,
    marginLeft : 10,
  },

  container : {
      flex : 1,
  },


  text_header : {
    fontSize : 20,
    fontWeight : 'bold'
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
    width : '95%',
    alignSelf : 'center',
    justifyContent : 'space-between',
    flexDirection : "row",
    width : "95%",
    alignItems : 'center'
  }, 
})