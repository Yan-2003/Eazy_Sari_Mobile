import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'

export default function register() {

  const [input, setinput] = useState('');


  const back = ()=>{
      router.back()    
  }



  return (
    <View style={styles.constainer}>

      <TouchableOpacity style={styles.back} onPress={back}><Image source={require('../assets/imgs/back.png')}/></TouchableOpacity>

      <View style={styles.logo_container}>      
        <Text style={styles.logo}>Welcome To EasySari<Text style={styles.green_text}>!</Text></Text>
      </View>



      <View style={styles.signin_container}>
        <Text style={styles.Sign_text}><Text style={styles.green_text}>Sign Up</Text> An Account in EasySari</Text>

        {/* this is the Email Input Field */}
        <View style={[styles.input , styles.boxShadow]}>
          <Image
            source={require('../assets/imgs/user.png')}
          />
          <TextInput
              style={styles.input_box}
              placeholder='Name'
              value={input}
              onChange={(text)=> setinput(text)}
          ></TextInput>
          
        </View>

        <View style={[styles.input , styles.boxShadow]}>
          <Image
            source={require('../assets/imgs/email.png')}
          />
          <TextInput
              style={styles.input_box}
              placeholder='Email'
              value={input}
              onChange={(text)=> setinput(text)}
          ></TextInput>
          
        </View>

        <View style={[styles.input , styles.boxShadow]}>
          <Image
            source={require('../assets/imgs/password.png')}
          />
          <TextInput
              style={styles.input_box}
              placeholder='Password'
              value={input}
              onChange={(text)=> setinput(text)}
          ></TextInput>
          
        </View>

        <View style={[styles.input , styles.boxShadow]}>
          <Image
              source={require('../assets/imgs/password.png')}
            />
          <TextInput
              style={styles.input_box}  
              placeholder='Confirm Password'
              value={input}
              onChange={(text)=> setinput(text)}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.signin_btn}>
          <Text style={styles.signin_text}>Sign Up</Text>
        </TouchableOpacity>

        <Text>Don’t have an account? <Link style={[styles.green_text , styles.underline]} href={'/login'}>Sign Up</Link> Now!</Text>
      </View>





    </View>
  )
}

const styles = StyleSheet.create({

  back : {
    width : '90%'
  },

  Sign_text : {
    width: '100%'
  },  

  logo_container : {
    flex : 0,
    justifyContent : 'center',
    alignItems : 'center'
  },


    logo : {
      fontSize : 24,
      fontWeight : 'semibold',
      fontFamily : 'poppins'
    },  

    signin_container :{
      width : '90%',
      marginTop : 30,
      alignItems : 'center'
    },  


    constainer : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },

    input : {
      width : '100%',
      height : 80,
      padding: 10,
      alignItems : 'center',
      gap : 10,
      flexDirection : 'row',
      marginTop : 20,
      backgroundColor : 'white'
    },

    input_box : {
      width : '100%'
    }, 
    
    boxShadow : {
      shadowColor : '#000',
      shadowOffset: {
        width: 5,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
    },  

    signin_btn : {
      marginTop : 30,
      marginBottom : 20,
      flex : 0,
      justifyContent : 'center',
      alignItems : 'center',
      width : '100%',
      height : 54,
      backgroundColor : '#9DC869',
    } ,

    signin_text : {
      color : 'white',
      fontSize : 20,
      fontWeight : 'medium'
    },

    green_text: {
      color : '#9DC869',
    },

    underline : {
      textDecorationLine: 'underline',
    },

})