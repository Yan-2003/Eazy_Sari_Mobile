import { View, Text, StyleSheet , Image, TouchableOpacity, ScrollView, Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { router } from 'expo-router'
import Searchbar from '../components/Searchbar'
import AddedProductModal from '../components/Modal/AddedProductModal'
import { useLocalSearchParams } from 'expo-router'

export default function new_transaction_add_product() {


    const { data, userdata } = useLocalSearchParams()


    const [Transaction, setTransaction] = useState([]);

    const [selectProduct, setSelectProduct] = useState(null);

    const [isModal, setisModal] = useState(false);

    const [quantity, setquantity] = useState(1);



    const addProduct = () => {


        const product = {
            id : selectProduct.id,
            name : selectProduct.name,
            price : selectProduct.price,
            category : selectProduct.category,
            stock : selectProduct.stock,
            image : selectProduct.image,
            discription : selectProduct.discription,
            quantity : quantity
        }


    
        const newTransactionData = [...Transaction, product];
    
        setTransaction(newTransactionData);

        router.push({
            pathname: "/new_transaction",
            params: { data: JSON.stringify(newTransactionData), userdata : userdata }
        });
    };

    const images = {
        "pancit_canton": require('../assets/imgs/demo_products/pancit_canton.png'),
        "wafello": require('../assets/imgs/demo_products/Wafello-Chocolate-Wafer-53.5g.png'),
        "bingo": require('../assets/imgs/demo_products/SM2025575-1.jpg'),
        "rebisco": require('../assets/imgs/demo_products/rebisco-crackers.jpg'),
        "piattos": require('../assets/imgs/demo_products/Piattos-Cheese-40g.png'),
        "nova": require('../assets/imgs/demo_products/Nova-Cheddar-40g.png'),
        // Add more images here as needed
    };

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
      



      useEffect(() => {

        if(data != null){

            const product = JSON.parse(data)

            setTransaction(product) 
        }

        
      }, []);


  return (
    <View style={styles.container}>
        
        {
            isModal ? <AddedProductModal 
            product_img={images[selectProduct.image]} 
            product_name={selectProduct.name} 
            closeFunction={()=>setisModal(false)} 
            functionCall={()=>addProduct()}  
            quantity_add={()=>setquantity(selectProduct.stock == quantity ? quantity : quantity + 1)} 
            quantity_minus={()=>setquantity(quantity == 1 ? quantity : quantity - 1)} 
            value={quantity.toString()}
            onChange={(value)=>setquantity(value)}
            />
            : <></>
        }
         
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>router.back()} >
                <Image style={styles.back} source={require('../assets/imgs/back.png')} />
            </TouchableOpacity>
            <Searchbar />
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
        <ScrollView contentContainerStyle={styles.scroll_products}>
            {
                products.map((items)=>{
                    return (
                        <View key={items.id} style={styles.product_container}>
                            <View  style={styles.products_sections}>
                                <Image style={styles.product_img} source={images[items.image]} /> 
                                <View>
                                    <Text style={styles.product_name}>{items.name}</Text>
                                    <Text style={styles.text_gray}>Stock: {items.stock}</Text>
                                </View>
                            </View>
                            <View  style={styles.products_sections}>
                                <Text style={styles.price}>₱{items.price}</Text>
                                <TouchableOpacity onPress={()=>{
                                    setSelectProduct(items)
                                    setisModal(true)
                                }}>
                                    <Image style={styles.icon} source={require('../assets/imgs/plus.png')}  />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>


        <Navbar On={'new transaction'} />
    </View>
  )
}


const styles = StyleSheet.create({

    product_name : {
        fontSize  : 20,
    },  

    price : {
        color : '#01A163',
        fontSize : 20,
    },

    text_gray : {
        color : '#B1B1B1'
    },


    products_sections : {
        flexDirection : 'row',
        gap :10,
        alignItems : 'center',
    },

    scroll_products : {
        width : '85%',
        alignSelf : 'center',
        gap : 10,
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

    scroll_categ : {
        flex : 0,
        height : 25,
        marginTop : 10,
        gap : 5,
        marginLeft : 10,
    },    

    categ_item : {
        borderColor : '#B4B3B3',
        borderWidth : 1,
        borderRadius : 5,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5,
    },

    icon : {
        width : 30,
        height : 30,
    },

    header : {
        marginTop : 10,
        width : '90%',
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },

    container : {
        flex : 1,
    },
})