import { View, Text, StyleSheet , Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { router } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import transaction from './transaction'


export default function new_transaction() {

   const { data, userdata } = useLocalSearchParams();
  
   const images = {
    "pancit_canton": require('../assets/imgs/demo_products/pancit_canton.png'),
    "wafello": require('../assets/imgs/demo_products/Wafello-Chocolate-Wafer-53.5g.png'),
    "bingo": require('../assets/imgs/demo_products/SM2025575-1.jpg'),
    "rebisco": require('../assets/imgs/demo_products/rebisco-crackers.jpg'),
    "piattos": require('../assets/imgs/demo_products/Piattos-Cheese-40g.png'),
    "nova": require('../assets/imgs/demo_products/Nova-Cheddar-40g.png'),
    "cobra": require('../assets/imgs/demo_products/cobra.jpg'),
    // Add more images here as needed
    };


   const [Transaction, setTransaction] = useState([]);

   const [Total, setTotal] = useState(0);


   const [message, setmessage] = useState('');



   const deleteProduct =(id) =>{

        let ModifyTransaction = Transaction.filter(item => item.id !== id)
        setTransaction(ModifyTransaction)
   }


   const confirm_transaction = () =>{
        if(Transaction.length == 0) return setmessage('No Products Selected.')
        
        console.log(userdata)
        const user = JSON.parse(userdata)
        console.log(user)


        const transaction_payload = {

            id : 6934677566845574,
            name : user.data.name,
            total_ammount: Total,
            item : [],
            date : "Today"
        } 


        Transaction.map(item =>{
            transaction_payload.item.push({
                name : item.name,
                price : item.price,
                quantity : item.quantity,
            })
        })

        return router.push({
            pathname : '/transactionByID',
            params : {userdata : userdata, transaction_data : JSON.stringify(transaction_payload) }
        })
   }


    useEffect(() => {

        console.log("transaction userdata: ", userdata)


        if(data != null){

            const product = JSON.parse(data)

            console.log("Transaction: ",product)
            setTransaction(product) 
        }

    }, []);


    useEffect(() => {

        let Total_price = 0

        Transaction.map(item=>{
            Total_price += item.quantity * item.price
        })

        setTotal(Total_price)
        
    
    }, [Transaction]);





  return (
    <View style={styles.container}>
        <View style={styles.transction_content}>
            <Text style={styles.text_gray}>New Transaction</Text>
            <ScrollView contentContainerStyle={styles.scroll_product}>
                {
                    Transaction.map(item =>{
                        return (
                            <View key={item.id} style={styles.product_container}>
                                <View  style={styles.products_sections}>
                                    <Image style={styles.product_img} source={images[item.image]} /> 
                                    <View>
                                        <Text style={styles.product_name}>{item.name}</Text>
                                        <Text style={styles.text_gray_n}>Quantity: {item.quantity}</Text>
                                    </View>
                                </View>
        
                                <View  style={styles.products_sections}>
                                    <Text style={styles.price}>₱{item.price}</Text>
                                    <TouchableOpacity onPress={()=> deleteProduct(item.id)}>
                                        <Image style={styles.icon} source={require('../assets/imgs/minus.png')}  />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                    
                }


                <View style={styles.add_product}>
                    <Text>Add Product</Text>
                    <TouchableOpacity onPress={()=>router.push({pathname : '/new_transaction_add_product' , params : {userdata : userdata ,data : JSON.stringify(Transaction)}})}>
                        <Image style={styles.icon} source={require('../assets/imgs/plus.png')}  />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        <View style={styles.total_section}>
            <View style={styles.total_container}>
                <Text>Total</Text>
                <Text style={styles.total_price}>₱{Total}</Text>
            </View>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity style={styles.cfm_btn} onPress={()=>confirm_transaction()}>
                <Text style={styles.text_light}>Confirm</Text>
            </TouchableOpacity> 
        </View>
        <Navbar On={'new transaction'} data={userdata} />
    </View>
  )
}


const styles = StyleSheet.create({

    message : {
        color : '#FD6E67',
        alignSelf  :'center',
        padding : 10,
    },

    product_name : {
        fontSize  : 20,
    },  

    price : {
        color : '#01A163',
        fontSize : 20,
    },

    text_gray_n : {
        color : '#B1B1B1'
    },


    products_sections : {
        flexDirection : 'row',
        gap :10,
        alignItems : 'center',
    },

    product_container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    product_img : {
        width : 80,
        height : 80,
        objectFit : 'contain'
    },

    text_light : {
        color : 'white'
    },

    cfm_btn : {
        marginTop : 30,
        padding : 10,
        height : 50,
        width : '70%',
        backgroundColor : '#01A163',
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center',
    },

    total_price : {
        color : '#01A163',
        fontWeight  : 'bold',
        fontSize : 20,
    },

    total_container :{ 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 10,
    },

    total_section : {
        width : '100%',
        borderTopWidth : 1,
        paddingTop : 20,
        padding : 10,
    },

    scroll_product : {
        height : '100%',
    },

    add_product : {
        width : '100%',
        marginTop : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },

    icon : {
        width : 30,
        height : 30,
    },

    text_gray : {
        color : '808080',
        fontSize : 20,
    },

    transction_content : {
        marginTop : 10,
        width : '80%',
        alignSelf : 'center',
        flex : 0.8,
    },

    container : {
        flex : 1,
    },
})