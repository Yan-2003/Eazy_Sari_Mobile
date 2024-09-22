import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'


export default function login() {

  const [input, setinput] = useState('');

  return (
    <View style={styles.constainer}>


      <View style={styles.logo_container}>
        <Image
          source={require('../assets/imgs/logo.png')}
        />
      
        <Text style={styles.logo}>Welcome To EasySari<Text style={styles.green_text}>!</Text></Text>
      </View>



      <View style={styles.signin_container}>
        <Text style={styles.Sign_text}><Text style={styles.green_text}>Sign In</Text> you’re Account Now!</Text>

        {/* this is the Email Input Field */}
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

        
        <TouchableOpacity style={styles.forgot_text}><Text>Forgot Password?</Text></TouchableOpacity>

        <TouchableOpacity style={styles.signin_btn}>
          <Text style={styles.signin_text}>Sign In</Text>
        </TouchableOpacity>

        <Text>Don’t have an account? <Link style={[styles.green_text , styles.underline]} href={'/register'}>Sign Up</Link> Now!</Text>
      </View>





    </View>
  )
}

const styles = StyleSheet.create({

  forgot_text : {
    marginTop : 30,
    width : '100%',
    alignItems : 'flex-end'
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



