import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput,  } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { router, useLocalSearchParams } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import AddProductModal from '../components/Modal/AddProductModal';
export default function add_product() {

    const {userdata} = useLocalSearchParams()

    const [image, setImage] = useState(null);
    const [permissionGranted, setPermissionGranted] = useState(false);

    const [expandCateg, setexpandCateg] = useState(false);

    const [selectCateg, setselectCateg] = useState('Product Category');


    const [isModal, setisModal] = useState(false);


    const [Message, setMessage] = useState('');

    const [productName, setproductName] = useState('');

    const [productPrice, setproductPrice] = useState('');

    const [productStock, setproductStock] = useState('');

    const [productDetails, setproductDetails] = useState('');

    const pickImage = async () => {
        try {
          // Request camera permissions
          const { status } = await ImagePicker.requestCameraPermissionsAsync();
          if (status !== 'granted') {
            alert('Camera permission not granted');
            return;
          }
    
          // Launch camera
          const result = await ImagePicker.launchCameraAsync();
          console.log(result); // Log the result object
    
          // Check if the user canceled
          if (result.canceled) {
            console.log('User cancelled taking a photo');
            return;
          }
    
          // Access the URI inside the assets array
          const photoUri = result.assets[0]?.uri;
          if (photoUri) {
            setImage(photoUri);
          } else {
            console.error('No photo URI found in result');
          }
        } catch (error) {
          console.error('Error launching camera:', error);
        }
      };





      const add_product_submit = () =>{

        
        if(productName.length == 0){
            return setMessage("Enter a product name")
        }

        if(productPrice.length == 0){
            return setMessage("Enter a product price")
        }

        if(productDetails.length == 0){
            return setMessage("Enter a product details")
        }

        if(productStock.length == 0){
            return setMessage("Enter a product Stock")
        }
        if(image == null){
            return setMessage("Enter a product Image")
        }

        return setisModal(true)

      } 
  

    useEffect(() => {
    const getPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        setPermissionGranted(status === 'granted');
    };
    getPermissions();
    }, []);

  return (
    <View style={styles.contianer}>

        {
           isModal == true ?  <AddProductModal close={()=> setisModal(false)} /> : <></>
        }
        
       <View style={styles.header}>
            <TouchableOpacity onPress={()=>router.back()} >
                <Image style={styles.back} source={require('../assets/imgs/back.png')} />
            </TouchableOpacity>
            <Text style={styles.header_text}>Add new <Text style={styles.text_green} >Product</Text> to you're store</Text>
        </View>


        <View style={styles.body} >
            <View style={styles.pic_container}>
                {image && <Image source={{ uri: image }} style={styles.cameraImage} />}
                <TouchableOpacity onPress={()=>pickImage()} style={styles.camera_btn}><Image style={styles.camera}  source={require('../assets/imgs/camera.png')}/></TouchableOpacity>
            </View>


            <View style={styles.input_section_1}>
                
                <View style={styles.product_name}>
                    <Image style={styles.icon} source={require('../assets/imgs/image.png')} />
                    <TextInput style={styles.product_name_input} placeholder='Product Name' value={productName} onChangeText={text => setproductName(text)}  />
                </View>


                <View style={styles.price}>
                    <Image style={styles.icon} source={require('../assets/imgs/image-2.png')} />
                    <TextInput keyboardType='numeric' style={styles.price_input} placeholder='Price' value={productPrice} onChangeText={text=>setproductPrice(text)}  />
                </View>

            </View>


            <View style={styles.description}>
                <Image style={styles.icon} source={require('../assets/imgs/image-1.png')} />
                <TextInput style={styles.description_input} placeholder='Product Details' value={productDetails} onChangeText={text=> setproductDetails(text)}  />
            </View>


            <View style={styles.input_section_1}>
                
                <View style={styles.categ_section}>
                    <TouchableOpacity style={styles.cateory} onPress={()=>setexpandCateg(true)}>
                        <Image style={styles.icon} source={require('../assets/imgs/image-3.png')} />
                        <Text style={styles.text_gray}>{selectCateg}</Text>
                        <Image style={styles.icon} source={require('../assets/imgs/image 48.png')} />
                    </TouchableOpacity>

                   {
                    expandCateg == true ? (
                        <View style={styles.expad_categ}>
                        <TouchableOpacity onPress={()=> {setselectCateg("Food and Snack"); setexpandCateg(false)}} style={styles.categ_item}><Text>Food and Snack</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=> {setselectCateg("Beverages"); setexpandCateg(false)}} style={styles.categ_item}><Text>Beverages</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=> {setselectCateg("Cooking Essentials"); setexpandCateg(false)}} style={styles.categ_item}><Text>Cooking Essentials</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=> {setselectCateg("Household Items"); setexpandCateg(false)}} style={styles.categ_item}><Text>Household Items</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=> {setselectCateg("Personal Care"); setexpandCateg(false)}} style={styles.categ_item}><Text>Personal Care</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>setexpandCateg(false)} style={styles.categ_item}><Text>Cancel</Text></TouchableOpacity>
                    </View>
                    ) : <></>
                   }
                </View>


                <View style={styles.price}>
                    <Image style={styles.icon} source={require('../assets/imgs/image-4.png')} />
                    <TextInput keyboardType='numeric' style={styles.price_input} placeholder='Stock'  value={productStock} onChangeText={text => setproductStock(text)} />
                </View>

            </View>

            <TouchableOpacity style={styles.add_product_btn}  onPress={()=>add_product_submit()}>
                <Text style={styles.add_text}>Add Product</Text>
            </TouchableOpacity>

            <Text style={styles.message}>{Message}</Text>

        </View>
                
      <Navbar On={'menu'} data={userdata}/>
    </View>
  )
}

const styles = StyleSheet.create({

    message : {
        color : '#FD6E67',
        alignSelf : 'center',
        marginTop : 5,
    },

    categ_item : {
        padding : 10, 
        zIndex : 10,
        backgroundColor : 'white',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#B4B3B3'
    },

    expad_categ : {
        width : '100%',
        position : 'absolute',  
        backgroundColor : 'white',
        borderRadius : 5, 
    },  


    categ_section : {
        width : '60%'
    },

    cameraImage : {
        width : 200, 
        height : 200,
        objectFit : 'fill'
    },

    cameraView : {
        width : '100%',
        height : 500,
        alignSelf : 'center'
    },

    text_gray : {
        color : '#B1B1B1',
    },

    add_text : {
        color : 'white',
        fontWeight : 'bold',
    },  

    add_product_btn : {
        marginTop : 40,
        marginBottom : 20,
        flex : 0,
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : 54,
        backgroundColor : '#01A163',
        borderRadius : 15,
    },

    cateory: {
        width : '100%',
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'space-between',
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }, 

    description_input : {
        width : '90%',
        height : 90,
        textAlignVertical :'top',
    },

    description : {
        marginTop : 20,
        flexDirection : 'row',
        width : '93%',
        padding : 10,
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    input_section_1 : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
    },

    price : {
        width : '30%',
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },


    price_input : {
        width : '50%',
        height : 20, 
    },

    product_name_input : {
        width : '70%',
        height : 20, 
    },


    product_name: {
        width : '60%',
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    icon : {
        width : 30,
        height : 30,
    },  


    camera_btn : {
        position : 'absolute',
        right : 10,
        bottom : 10,
        padding : 10,
        borderRadius : '100%',
        backgroundColor : '#B4B3B3'
    },

    camera : {
        width : 30,
        height : 30,
    },

    pic_container :{
        width :    200,
        height : 200,
        backgroundColor : '#D9D9D9',
        borderRadius : 15,
    },

    header_text :  {
        color : '#B4B3B3'
    },

    text_green : {
        color : '#01A163'
    },

    contianer : {
        flex : 1,
    },

    body : { 
        width : '90%',
        alignSelf : 'center',
        alignItems : 'center',
        marginTop : 20,
    },

    header : { 
        width : '90%',
        alignSelf : 'center',
        gap : 10,
      },
})