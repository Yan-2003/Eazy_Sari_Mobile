import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link, router } from 'expo-router'
import React, { useState, useEffect } from 'react'


export default function login() {


  const users = [
    {
      email : 'admin.123@gmail.com',
      password : 'admin123',
      data : {
        rule : "admin",
        name : "",
        storename : "",

      }
    },
    {
      email : 'guest.123@gmail.com',
      password : 'guest123'
    }

  ]

  const [email, setemail] = useState('');

  const [password, setpassword] = useState('');


<<<<<<< HEAD
  const [Message, setMessage] = useState('');

  const login = () =>{



    if(email.length == 0){
      setMessage("Enter your Email.")
      return
    }

    if(password.length == 0){
      setMessage("Enter your Password.")
      return
    }
    const user = users.find((user) => user.email === email)

    if (user) {
      if (user.password === password) {
        console.log("Login successful!")
        router.push({
         pathname : '/',
         params : {userdata : user}, 
        })
        setMessage("")
      } else {
        setMessage("Password is incorrect.")
      }
    } else {
      setMessage("Email is invalid or not registered.")
    }
  } 

  useEffect(() => {
    
    setMessage('')
  
  }, [email, password]);



=======
>>>>>>> fca63c65c936ec09cf6910f30c309b460c1c85c6
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
        <Text style={styles.sign_msg}>{Message}</Text>
        <View style={[styles.input , styles.boxShadow]}>
          <Image
            source={require('../assets/imgs/email.png')}
          />
          <TextInput
              style={styles.input_box}
              placeholder='Email'
              value={email}
              onChangeText={text => setemail(text)}
          ></TextInput>
          
        </View>

        <View style={[styles.input , styles.boxShadow]}>
          <Image
              source={require('../assets/imgs/password.png')}
            />
          <TextInput
              style={styles.input_box}  
              placeholder='Password'
              value={password}
              onChangeText={text => setpassword(text)}
              secureTextEntry={true}
          ></TextInput>
        </View>

        
        <TouchableOpacity style={styles.forgot_text}><Text style={styles.underline}>Forgot Password?</Text></TouchableOpacity>

        <TouchableOpacity style={styles.signin_btn} onPress={()=> login() }>
          <Text style={styles.signin_text}>Sign In</Text>
        </TouchableOpacity>

        <Text>Don’t have an account? <Link style={[styles.green_text , styles.underline]} href={'/register'}>Sign Up</Link> Now!</Text>
      </View>





    </View>
  )
}

const styles = StyleSheet.create({


  sign_msg : {
    color : "#FD6E67"
  },

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