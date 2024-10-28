import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'


export default function login() {

  const [input, setinput] = useState('');

  return (
    <View style={styles.container}>


      <View style={styles.logo_container}>
        <Image style={styles.logo_img}
          source={require('../assets/imgs/header_logo.png')}
        />
      
        <Text style={styles.logo}>Welcome to EazySari<Text style={styles.green_text}>!</Text></Text>
      </View>



      <View style={styles.signin_container}>
        <Text style={styles.Sign_text}><Text style={styles.green_text}>Sign In</Text> you’re Account Now!</Text>

        <View style={styles.gap}></View>

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

        
        <TouchableOpacity style={styles.forgot_text}><Text style={styles.underline}>Forgot Password?</Text></TouchableOpacity>

        <TouchableOpacity style={styles.signin_btn}>
          <Text style={styles.signin_text}>Sign In</Text>
        </TouchableOpacity>

        <Text>Don’t have an account? <Link style={[styles.green_text , styles.underline]} href={'/register'}>Sign Up</Link> Now!</Text>
      </View>





    </View>
  )
}

const styles = StyleSheet.create({

  gap : {
    marginTop : 10,
  },

  logo_img :  {
    width : '100%',
    height : 160,
  },

  forgot_text : {
    marginTop : 30,
    width : '100%',
    alignItems : 'flex-end',
  },

  Sign_text : {
    fontSize : 20,
    width: '100%',
    color : '#B1B1B1',
  },  

  logo_container : {
    marginTop : 20,
    flex : 0,
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center'
  },


    logo : {
      marginTop : 30,
      fontSize : 30,
      fontWeight : 'bold',
    },  

    signin_container :{
      width : '85%',
      marginTop : 30,
      alignItems : 'center'
    },  


    container : {
        flex : 1,
        alignItems : 'center'
    },

    input : {
      width : '100%',
      height : 50,
      padding: 10,
      alignItems : 'center',
      gap : 10,
      flexDirection : 'row',
      marginTop : 20,
      backgroundColor : 'white',
      borderRadius : 10,
    },

    input_box : {
      width : '100%'
    }, 
    
    boxShadow : {
      shadowColor : '#000',
      shadowOffset: {
        width: 1,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },  

    signin_btn : {
      marginTop : 40,
      marginBottom : 20,
      flex : 0,
      justifyContent : 'center',
      alignItems : 'center',
      width : '100%',
      height : 54,
      backgroundColor : '#01A163',
      borderRadius : 15,
    } ,

    signin_text : {
      color : 'white',
      fontSize : 20,
      fontWeight : 'medium'
    },

    green_text: {
      color : '#01A163',
    },

    underline : {
      textDecorationLine: 'underline',
    },



})



