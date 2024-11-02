import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { TextInput } from 'react-native'


export default function Searchbar() {

  const [expandSearch, setexpandSearch] = useState(false);

  
  const expandSearchBar = () =>{
    expandSearch == true ? setexpandSearch(false) : setexpandSearch(true)
  }


  return (
    <View style={styles.container}>
      <TextInput style={!expandSearch ? styles.input : styles.search_expand} placeholder='Quick Search..' onPress={()=> expandSearchBar()}/>
      <Image style={styles.search_icon} source={require("../assets/imgs/search.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    borderWidth : 1,
    padding : 10,
    borderRadius : 50,
    flexDirection : "row",
    alignItems : 'center',
    borderColor : '#B1B1B1'
  },

  input : {
    width : 150
  },

  search_icon : {
    width : 20,
    height : 20
  },

  search_expand : {
    width : 200,
    
  }


})  

