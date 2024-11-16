import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link, router } from 'expo-router'
import React, { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'


export default function Register() {

  const params = useLocalSearchParams();

  const [input, setinput] = useState('');

  const [IsCheck, setIsCheck] = useState(false);

  // Add useEffect to handle terms acceptance
  useEffect(() => {
    if (params.termsAccepted === 'true') {
      setIsCheck(true);
    }
  }, [params.termsAccepted]);


  const back = () => {
    try {
      router.back()
    } catch (error) {
      router.push('/')
    }
  }


  const termsPress = () =>{
    if(!IsCheck){
      setIsCheck(true)
    }else{
      setIsCheck(false)
    }
  }

  const signUpPress = () => {
    router.push('/store_name')
  }




  return (
    <View style={styles.constainer}>

      <TouchableOpacity style={styles.back} onPress={back}><Image source={require('../assets/imgs/back.png')}/></TouchableOpacity>

      <View style={styles.logo_container}>
        <Image style={styles.logo_img}
          source={require('../assets/imgs/mini_logo.png')}
        />
      
        <Text style={styles.logo}>Welcome to EazySari<Text style={styles.green_text}>!</Text></Text>
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

        <View style={styles.pass_req_container}>
          <Text style={styles.pass_req_header} >Password Requirement</Text>
          <Text style={styles.pass_req_text}> • Atleast 8 characters <Text style={styles.pass_req_on}>*</Text>  </Text>
          <Text style={styles.pass_req_text}> • Atleast 1 number <Text style={styles.pass_req_on}>*</Text>  </Text>
          <Text style={styles.pass_req_text}> • Symbol (? @ #) <Text style={styles.pass_req_on}>*</Text>  </Text>
          <Text style={styles.pass_req_text}> • Atleast 1 captial letter <Text style={styles.pass_req_on}>*</Text>  </Text>
          <Text style={styles.pass_req_text}> • Atleast 1 lower letter <Text style={styles.pass_req_on}>*</Text>  </Text>
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

        <Text style={styles.text_from}>Want to join Other Store? Enter Invite Code</Text>

        <View style={[styles.input , styles.boxShadow]}>
          <Image
              source={require('../assets/imgs/invite.png')}
            />
          <TextInput
              style={styles.input_box}  
              placeholder='Invite Code'
              value={input}
              onChange={(text)=> setinput(text)}
          ></TextInput>
        </View>
        
        <View style={styles.terms_condition_container}>
          <TouchableOpacity style={(IsCheck == false) ? styles.check_box_off : styles.check_box_on} onPress={()=>termsPress()}>

          </TouchableOpacity>

          <Text>I Accept the <Link style={[styles.green_text , styles.underline]} href={'/terms_and_cond'}>Terms and Conditions</Link></Text>



        </View>



        <TouchableOpacity style={styles.signup_btn} onPress={signUpPress}>
          <Text style={styles.signup_text}>Sign Up</Text>
        </TouchableOpacity>

        <Text>Already have an account? <Link style={[styles.green_text , styles.underline]} href={'/login'}>Sign In</Link> Now!</Text>
      </View>





    </View>
  )
}

const styles = StyleSheet.create({

  check_box_off : {
    width : 15,
    height : 15,
    borderWidth : 1,
    borderColor : '#B1B1B1'
  },

  check_box_on : {
    width : 15,
    height : 15,
    borderWidth : 1,
    borderColor : '#B1B1B1',
    backgroundColor : '#01A163',
  },

  terms_condition_container : {
    marginTop : 20,
    alignSelf : 'flex-start',
    flexDirection : 'row',
    gap : 5,
    alignItems : 'center',
  },

  text_from : {
    marginTop : 10,
    color : '#808080',   
    alignSelf : 'flex-start'
  },

  pass_req_on : {
    color : '#FD6E67'
  },

  pass_req_text : {
    color : '#808080',    
  },

  pass_req_container : {
    marginTop : 10,
    alignSelf : 'flex-start'
  },

  pass_req_header : { 
    fontSize : 15,
    color : '#808080',
    fontWeight : 'bold'
  },

  back : {
    width : '90%'
  },

  Sign_text : {
    fontSize : 20,
    width: '100%',
    color : '#B1B1B1',
  },  

  logo_container : {
    flex : 0,
    justifyContent : 'center',
    alignItems : 'center'
  },


    logo : {
      fontSize : 24,
      fontWeight : 'bold',
    },
  
  logo_img : {
    width : 60,
    height : 60
  },

    signin_container :{
      width : '85%',
      marginTop : 30,
      alignItems : 'center'
    },  


    constainer : {
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

    signup_btn : {
      marginTop : 30,
      marginBottom : 20,
      flex : 0,
      justifyContent : 'center',
      alignItems : 'center',
      width : '100%',
      height : 54,
      backgroundColor : '#01A163',
      borderRadius : 15,
    } ,

    signup_text : {
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