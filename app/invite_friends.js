import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { router, useLocalSearchParams } from 'expo-router'
import * as Clipboard from 'expo-clipboard';
export default function invitefriends() {


  const {userdata} = useLocalSearchParams()

  const intive_code = "HLA8G4L1B9ZX4"

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(intive_code);
    Alert.alert("Successfully Copied To Clipboard.");  // optional alert
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()} >
            <Image style={styles.back} source={require('../assets/imgs/back.png')} />
        </TouchableOpacity>
        <Text style={styles.header_text}>Invite Friends</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.qr_title}>Scan QR code</Text>
        <Image style={styles.qr} source={require('../assets/imgs/QR.png')} />

        <View style={styles.enter_code}>
          <View style={styles.line}></View>
          <Text>or enther the code manually</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.invite_code_container}>
          <View style={styles.invite_code}>
            <Text style={styles.code_text}>{intive_code}</Text>
          </View>
          <TouchableOpacity style={styles.copy_btn} onPress={()=>copyToClipboard()}>
            <Image style={styles.copy_img} source={require('../assets/imgs/copy.png')}/>
          </TouchableOpacity>
        </View>
        
      </View>


      <Navbar On={'menu'} data={userdata} />
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    header : { 
      width : '90%',
      alignSelf : 'center',
      gap : 10,
    },
    header_text : {
      fontSize : 20
    },  
    body : {
      alignItems : 'center',
      marginTop : 20,
    },
    line : {
      width : 90,
      height : 1,
      backgroundColor : 'black'
    },

    enter_code :{ 
      marginTop : 50,
      width : '90%',
      alignSelf : 'center',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'center',
      gap : 20,
    },
    invite_code_container : {
      marginTop  : 50,
      flexDirection : 'row',
      alignItems : 'center',
      width : '90%',
      alignSelf : 'center',
      justifyContent : 'space-between'
    },


    copy_img : {
      width : 30,
      height : 30,
    },

    invite_code : {
      width : '80%',
      height : 50,
      justifyContent : 'center',
      borderColor : "#B1B1B1",
      borderWidth : 1,
      borderRadius : 10,
      padding : 10,
    },

    copy_btn  : {
      width : 50,
      height : 50,
      borderColor : "#B1B1B1",
      borderWidth : 1,
      borderRadius : 10,
      alignItems : 'center',
      justifyContent : 'center'
    }, 
    code_text : {
      fontSize : 20,
    },
})