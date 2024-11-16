import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { StyleSheet } from 'react-native'
import ProductItem from '../components/ProductItem'

export default function LowStock() {
  // Using the same products array but we'll filter for low stock
  let products = [
    {
      id: 1,
      name: "Pancit Canton",
      price: 15,
      category: 'Food and Snack',
      stock: 3,
      image: "pancit_canton",
      description: ""
    },
    {
      id: 2,
      name: "Bingo",
      price: 8,
      category: 'Food and Snack',
      stock: 3,
      image: "bingo",
      description: ""
    },
    {
      id: 3,
      name: "Wafello",
      price: 16,
      category: 'Food and Snack',
      stock: 5,
      image: "wafello",
      description: ""
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Products</Text>
        <Searchbar />
      </View>

      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.scroll_categ}>
          <TouchableOpacity style={[styles.categ_item, { backgroundColor: '#4CAF50' }]}>
            <Text style={{ color: 'white' }}>All</Text>
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

      <View style={styles.low_stock_label}>
        <Text style={styles.low_stock_text}>Low Stocks Products</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll_product}>
        {
          products.map((item, index) => (
            <ProductItem
              key={index}
              product_name={item.name}
              product_price={item.price}
              product_categ={item.category}
              product_img={item.image}
              product_stock={item.stock}
              showStock={true}
              isLowStockScreen={true}
            />
          ))
        }
      </ScrollView>

      <Navbar On={"product"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text_header: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  scroll_product: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingBottom: 100,
  },

  header: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: 'center'
  },

  categ_item: {
    borderColor: '#B4B3B3',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  scroll_categ: {
    flex: 0,
    height: 25,
    marginTop: 10,
    gap: 5,
    marginLeft: 10,
  },

  low_stock_label: {
    backgroundColor: '#FFEB3B',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  low_stock_text: {
    fontSize: 14,
    color: '#000',
  }
})
