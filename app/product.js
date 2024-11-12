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
      image : "pancit_canton",
      discription : ""
    }, 
    {
      id : 2,
      name : "Bingo",
      price : 8,
      category : 'Food and Snack',
      stock : 40,
      image : "bingo",
      discription : ""
    },
    {
      id : 3,
      name : "Wafello",
      price : 16,
      category : 'Food and Snack',
      stock : 40,
      image : "wafello",
      discription : ""
    },
    {
      id : 4,
      name : "Rebisco Crakers",
      price : 8,
      category : 'Food and Snack',
      stock : 30,
      image : "rebisco",
      discription : ""
    },
    {
      id : 5,
      name : "Piattos",
      price : 26,
      category : 'Food and Snack',
      stock : 12,
      image : "piattos",
      discription : ""
    },
    {
      id : 6,
      name : "Nova",
      price : 26,
      category : 'Food and Snack',
      stock : 12,
      image : "nova",
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
            
            console.log("this is the itme: ", item )

            return (
              <ProductItem 
                key={index}
                product_name={item.name} 
                product_price={item.price}  
                product_categ={item.category}
                product_img={item.image}
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