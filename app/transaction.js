import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'

export default function transaction() {

    const data = [
        {
            id: 1,
            name : "Julliane",
            total_ammount: 16,
            item : [
                {
                    name : "Rebisco Crackers",
                    price : 8,
                    quantity : 1,
                },
                {
                    name : "Bingo",
                    price : 8,
                    quantity : 1,
                }
            ],
            date : "Today"
        },
        {
            id : 2,
            name : "Julliane",
            total_ammount: 8,
            item : [
                {
                    name : "Rebisco Crackers",
                    price : 8,
                    quantity : 1,
                },
            ],
            date : "Today"
        },
        {
            id : 3,
            name : "Lizel",
            total_ammount: 26,
            item : [
                {
                    name : "Piattos",
                    price : 26,
                    quantity : 1,
                },
            ],
            date : "Yesterday"
        },
        {
            id : 4,
            name : "Rz",
            total_ammount: 30,
            item : [
                {
                    name : "Pancit Canton",
                    price : 15,
                    quantity : 2,
                },
            ],
            date : "Yesterday"
        },
    ]




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Transactions</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scroll_transaction}>
                <Text style={styles.date_text}>Today</Text>
                {
                    data.map((item)=>{
                        return item.date == "Today" ?  (
                            <TouchableOpacity key={item.id} style={styles.transaction}>
                                <View style={styles.info}>
                                    <Image style={styles.users_img} source={require('../assets/imgs/user_2.png')} />
                                    <View>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.text_gray} >
                                            item: {
                                                item.item.map((item, index)=>{
                                                    return <Text key={index}>{item.name}, </Text>
                                                })
                                            }
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.total_ammount}>₱{item.total_ammount}</Text>
                            </TouchableOpacity>
                        ) : <View></View>
                    })
                }


                <Text style={styles.date_text}>Yesterday</Text>
                {
                    data.map((item)=>{
                        return item.date == "Yesterday" ?  (
                            <TouchableOpacity style={styles.transaction}>
                                <View key={item.id} style={styles.info}>
                                    <Image style={styles.users_img} source={require('../assets/imgs/user_2.png')} />
                                    <View>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.text_gray} >
                                            item: {
                                                item.item.map((item, index)=>{
                                                    return <Text key={index}>{item.name}, </Text>
                                                })
                                            }
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.total_ammount}>₱{item.total_ammount}</Text>
                            </TouchableOpacity>
                        ) : <View></View>
                    })
                }
            </ScrollView>



        <Navbar On={'transaction'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    info : {
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
    },

    text_gray : {
        color : '#B1B1B1'
    },

    total_ammount : {
        color : '#01A163', 
        fontSize : 20,
        fontWeight : 'bold'
    },

    date_text : {
        color : '#B1B1B1',
        alignSelf : 'center',
        marginTop : 15,  
    },

    scroll_transaction : { 
        width : '90%',
        alignSelf : 'center',
        gap : 10,
    },

    transaction : { 
        alignItems  : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        borderRadius : 15,

    },

    users_img : {
        width : 64,
        height : 64,
    },

    header_text : {
        fontSize : 20,
        fontWeight : 'bold'
    },

    container : {
        flex : 1,
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