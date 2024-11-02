import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'

import { StyleSheet } from 'react-native'

export default function product() {
  return (
    <View style={styles.container}>
      <Text>product</Text>
      <Navbar On={"product"} />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})