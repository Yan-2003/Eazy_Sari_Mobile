import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { StyleSheet } from 'react-native'
import ProductItem from '../components/ProductItem'

export default function product() {

  

  let products = [

    {
      id : 1,
      name : "Pancit Canton",
      price : 15,
      category : 'Food and Snack',
      stock : 15,
      image : "../assets/imgs/demo_products/pancit_canton.png",
      discription : ""
    }, 
    {
      id : 1,
      name : "Pancit Canton",
      price : 15,
      category : 'Food and Snack',
      stock : 15,
      image : "../assets/imgs/demo_products/pancit_canton.png",
      discription : ""
    }
    
  ]





  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.text_header}>Product</Text> 
          <Searchbar/>
      </View>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.scroll_categ}>
          <TouchableOpacity style={styles.categ_item}>
            <Text>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categ_item}>
            <Text>Food and Snack</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categ_item}>
            <Text>Beverages</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.categ_item}>
            <Text>Cooking Essentials</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categ_item}>
            <Text>Household Items</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.categ_item}>
            <Text>Personal Care</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>


      <ScrollView contentContainerStyle={styles.scroll_product}>
        {
          products.map((item, index)=>{
            return (
              <ProductItem 
                key={index}
                product_name={item.name} 
                product_price={item.price}  
                prodcut_categ={item.category}
                
                product_stock={item.stock} 
              />
            )
          })
        }

      </ScrollView>

      <Navbar On={"product"} />
    </View>
  )
}

const styles = StyleSheet.create({


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
    alignSelf : 'center'
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