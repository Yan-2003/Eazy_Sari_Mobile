import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useRef,useEffect, useState } from 'react'
import products from '../../database/products';
import images from '../../database/images';
import { router } from 'expo-router';
export default function SearchModal({open, close, userdata}) {



    const inputRef = useRef(null);


    const [searchinput, setsearchinput] = useState("");

    const [search_products, setsearch_products] = useState([]);

    useEffect(() => {
        if (open && inputRef.current) {
          // Delay focus to ensure the layout is complete
          setTimeout(() => {
            inputRef.current.focus();
          }, 100);
        }
      }, [open]);


    useEffect(() => {
        
        setTimeout(() => {
            setsearch_products(products)
        }, 100);
        

       
    }, []);


    useEffect(() => {
    
        const filteredProducts = products.filter(item => 
            item.name.toLowerCase().startsWith(searchinput.toLowerCase())
        );

        setsearch_products(filteredProducts)
    
    }, [searchinput]);



  return (
    <View>
         { 
      
            open ? 
                <View style={styles.conatienr}>
                    <View style={styles.searchinput}>
                        <TouchableOpacity onPress={close}><Image source={require('../../assets/imgs/white back.png')}/></TouchableOpacity>
                        <TextInput focusable={true} ref={inputRef} style={styles.input} value={searchinput} onChangeText={text=> setsearchinput(text)} placeholder='Quck Search...' />
                    </View>
                    <ScrollView  style={styles.result}>
                        {
                            search_products.map((items, index)=>{
                               return   <TouchableOpacity onPress={()=>router.push({pathname : '/view_product' , params : {userdata : userdata , product : JSON.stringify(items)}})} style={styles.items} key={index}>
                                            <Image style={styles.image} source={images[items.image]} />
                                            <Text>{items.name}</Text>
                                        </TouchableOpacity>
                            })
                        }
                    </ScrollView>

                </View>
                : <></>  
        }
    </View>
  )
}

const styles = StyleSheet.create({

    image : { 
        width : 20,
        height : 20,
        objectFit : 'contain'
    },

    conatienr : {
        position : 'absolute',
        width : '100%',
        flex : 1,
        zIndex :100,
        backgroundColor : 'rgba(0, 0, 0, 0.5)', 
        justifyContent : 'center',
        alignItems : 'center',
        paddingBottom : 40,
        gap : 20,
    },
    searchinput : {
        flexDirection : 'row',
        marginTop : 20,
        alignItems : 'center',
        gap : 20,
    },
    input : {
        backgroundColor : 'white',
        width : '70%',
        height : 50,
        borderRadius : '8%',
        padding : 15,

    },

    result : {


        backgroundColor : 'white',
        height : 400,
        width : '70%',
        borderRadius : 10,
        padding : 20,
        gap :10,
    } ,
    items : {
        padding  : 10,
        flexDirection : 'row',
        gap : 20,
        alignItems  : 'center'
    },
})