import { View, Text, StyleSheet , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { router } from 'expo-router'

export default function menu() {
  return (
    <View style={styles.container}>
        <View style={styles.profile_info}>
            <Image style={styles.profile} source={require('../assets/imgs/user/eLBmQ_5f.jpg')} />
            <Text style={styles.profile_name}>Julliane J. Tampus</Text>
            <Text style={styles.text_gray}>Admin</Text>
        </View>

        <View style={styles.content}>
            <View style={styles.store_part}>
                <Text style={styles.sm_text_gray}>Store name</Text>
                <View style={styles.edit_store_name}>
                    <Text style={styles.store_name}>Gwapo Sari-Sari Store</Text>
                    <Image style={styles.icon} source={require('../assets/imgs/pen.png')} />
                </View>
            </View>


            <View style={styles.store_part}>
                <Text style={styles.sm_text_gray}>Users</Text>

                <TouchableOpacity style={styles.menu_btn}>
                    <View style={styles.menu_btn_sub}>
                        <Image style={styles.image_btn} source={require('../assets/imgs/user_2.png')} />
                        <Text style={styles.btn_text}>Mange Users</Text>
                    </View>
                    <Image style={styles.image_btn_arrow  } source={require('../assets/imgs/arrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu_btn} onPress={()=>router.push('/invite_friends')}>
                    <View style={styles.menu_btn_sub}>
                        <Image style={styles.image_btn} source={require('../assets/imgs/invitefriend.png')} />
                        <Text style={styles.btn_text}>Invite a friend</Text>
                    </View>
                    <Image style={styles.image_btn_arrow  } source={require('../assets/imgs/arrow.png')} />
                </TouchableOpacity>


            </View>

            <View style={styles.store_part}>
                <Text style={styles.sm_text_gray}>Products</Text>

                <TouchableOpacity style={styles.menu_btn} onPress={()=>router.push('/add_product')}>
                    <View style={styles.menu_btn_sub}>
                        <Image style={styles.image_btn} source={require('../assets/imgs/product 1.png')} />
                        <Text style={styles.btn_text}>Add new Product</Text>
                    </View>
                    <Image style={styles.image_btn_arrow  } source={require('../assets/imgs/arrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu_btn}>
                    <View style={styles.menu_btn_sub}>
                        <Image style={styles.image_btn} source={require('../assets/imgs/archive.png')} />
                        <Text style={styles.btn_text}>Archive</Text>
                    </View>
                    <Image style={styles.image_btn_arrow  } source={require('../assets/imgs/arrow.png')} />
                </TouchableOpacity>


            </View>


            <View style={styles.store_part}>
                <Text style={styles.sm_text_gray}>Account</Text>

                <TouchableOpacity style={styles.menu_btn}>
                    <View style={styles.menu_btn_sub}>
                        <Image style={styles.image_btn} source={require('../assets/imgs/del_acc.png')} />
                        <Text style={styles.btn_text}>Delete Account</Text>
                    </View>
                    <Image style={styles.image_btn_arrow  } source={require('../assets/imgs/arrow.png')} />
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.logout_btn}>
                <Text style={styles.text_light} >Logout</Text>
            </TouchableOpacity>




        </View>





      <Navbar On={'menu'} />
    </View>
  )
}

const styles = StyleSheet.create({

    text_light : {
        color : 'white'
    },  

    logout_btn : {
        marginTop : 20,
        width : '100%',
        height : 50,
        backgroundColor  :'#FD6E67',
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center'
    },  

    image_btn : {
        width : 30,
        height : 30,
    },

    image_btn_arrow : {
        width : 20,
        height : 20,
    },

    menu_btn_sub : {
        flexDirection  : 'row',
        alignItems : 'center',
        gap : 10,
    },

    menu_btn : {
        marginTop : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },

    store_part : {
        gap : 5,
        marginBottom : 10,
    },

    content : {
        width : '80%',
        alignSelf : 'center',
        marginTop :20,
    },

    store_name :  {
        color : "#B1B1B1",
         fontSize : 20
    },

    edit_store_name : {
        flexDirection : 'row',
        gap : 5,
    },

    icon :{
        width : 15,
        height : 15,
    },

    sm_text_gray : {
        fontSize : 12,
        color : "#B1B1B1",
    },


    text_gray : {
        color : "#B1B1B1"
    },


    profile_info : {
        alignItems : 'center',
        gap : 10,
    },

    profile_name : {
        fontSize : 25,
        fontWeight : 'bold',
    },  

    profile : {
        width : 200,
        height : 200,
        borderRadius : '100%',
        borderColor : '#808080',
        borderWidth : 1,
        alignSelf : 'center',
        marginTop : 10,
    },


    container : {
        flex : 1,
    },
})