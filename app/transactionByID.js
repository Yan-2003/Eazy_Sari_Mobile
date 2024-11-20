import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'

export default function transactionByID() {

    const {userdata, transaction_data} = useLocalSearchParams()


    const transaction = JSON.parse(transaction_data)

    const total = transaction.item.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={styles.contianer}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> router.back()} >
                <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
            </TouchableOpacity>
            <Text style={styles.title_text}>Transactions</Text> 

        </View>

        <View style={styles.transaction_body}>
            <Text style={styles.transactinID}>Transaction ID: <Text style={styles.transactinID_number}>{transaction.id}</Text></Text>
            <ImageBackground style={styles.resibo} source={require('../assets/imgs/resibo.png')}>
                <Text>Transacted by: <Text style={styles.transaction_name}>{transaction.name}</Text></Text>
                <View style={styles.table}>
                    <Text style={styles.tableHead}>Name</Text>
                    <Text style={styles.tableHead}>Quantity</Text>
                    <Text style={styles.tableHead}>Price</Text>
                    <Text style={styles.tableHead}>Total</Text>
                </View>
                {
                    transaction.item.map((item, index) =>(
                        <View style={styles.table} key={index}>
                            <Text style={[styles.cell]}>{item.name}</Text>
                            <Text style={[styles.cell, styles.text_gray]}>{item.quantity}</Text>
                            <Text style={[styles.cell, styles.text_gray]}>₱{item.price}</Text>
                            <Text style={[styles.cell, styles.text_gray]}>₱{item.price * item.quantity}</Text>
                        </View>
                    ))
                }
                <View style={styles.overTotal}>
                    <Text>Over All Total:</Text>
                    <Text style={styles.overTotal_text}>₱{total}</Text>
                </View>
            </ImageBackground>
        </View>
      <Navbar On={'transaction'} data={userdata} />
    </View>
  )
}

const styles = StyleSheet.create({

    overTotal_text : {
        color : '#01A163',
        fontSize : 30,
        fontWeight   : 'bold',
    },

    overTotal : {
        width : '100%',
        borderTopWidth : 1,
        borderTopColor : '#B4B3B3',
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginTop: 20,
        paddingTop: 20,
        alignItems : 'center'
    },

    bold : {
        fontWeight : 'bold'
    },

    text_gray : {
        color : '#808080'
    },

    tableHead : {
        fontWeight : "bold",
        flex : 1,
        textAlign : 'center'
    },

    cell: {
        flex : 1,
        textAlign : 'center'
    },

    table: {
        flexDirection : 'row',
        padding : 10,
    },

    transaction_name : {
        fontWeight : 'bold'
    },

    transaction_body : {
        width : '85%',
        alignSelf : 'center',
        marginTop : 20,
        gap : 10,
    },


    transactinID_number : {
        fontWeight : 'bold',
        color : '#808080'
    },

    transactinID : {
        color : '#B4B3B3'
    },

    header : {
        width : '90%',
        alignSelf : 'center',
        gap : 10,
    },

    title_text : {
        fontWeight : 'bold',
        fontSize : 20,
    },

    resibo : {
        padding : 20,
        width : 347,
        height : 348,
    },
    contianer : {
        flex : 1,
    }
})