import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function BestProductItem({product_name , product_price, product_sold_num, product_img, isTop}) {
  return (
    <View style={ isTop ? styles.container1 : styles.container2 }>

        {
          isTop ?
           <View style={styles.header}>
            <Text style={styles.best_text}>Best Product</Text>
            <Image style={styles.crown} source={require("../assets/imgs/crown.png")} />
          </View>
          : null
        }




        <View style={styles.product_content}>
            <View >
              <Text style={styles.price}>₱{product_price}</Text>
              <Text style={styles.name}>{product_name}</Text>
              <Text style={styles.sold}>Sold: <Text style={styles.num_sold}>{product_sold_num}</Text></Text>
            </View>  
            <Image source={product_img} style={isTop ? styles.img_top : styles.img} /> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

  best_text : {
    fontSize : 20,
    fontWeight : 'bold',

  },

  num_sold : {
    color : '#01A163'
  },

  header : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },


  crown : {
    width : 20,
    height : 20,
  },


  price : {
    fontSize : 35,
    fontWeight : 'bold',
    color : '#01A163'
  },

  product_content : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },


  container1 : {
    padding : 15,
    width : 360,
    height : 150,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor : 'white',
    borderRadius : 15,
  },


  container2 : { 
    padding : 5,
    paddingLeft : 15, 
    paddingRight : 15,
    width : 360,
    height : 100,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor : 'white',
    borderRadius : 15,
  },



  img : {
    width : 90,
    height : 90,
    objectFit : 'contain'
  },


  img_top : {
    width : 120,
    height : 120,
    objectFit : 'contain'
  }

})