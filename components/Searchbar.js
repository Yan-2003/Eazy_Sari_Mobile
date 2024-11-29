import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { TextInput } from 'react-native'


export default function Searchbar({searchFuncation}) {


  return (
    <View> 
      <TouchableOpacity style={styles.container} onPress={searchFuncation}>
        <Text style={styles.gray}>Quick Search....</Text>
        <Image style={styles.search_icon} source={require("../assets/imgs/search.png")} />
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container : {
    borderWidth : 1,
    width : 150,
    padding : 10,
    borderRadius : 50,
    flexDirection : "row",
    alignItems : 'center',
    borderColor : '#B1B1B1',
    justifyContent: 'space-between'
  },

 

  search_icon : {
    width : 20,
    height : 20
  },


  gray : {
    color : '#B1B1B1'
  },

  search_modal : {
    position : 'absolute',
    flex : 1,
    width : '100%'
  }

})  

