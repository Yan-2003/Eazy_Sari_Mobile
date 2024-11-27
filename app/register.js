import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Link, router } from 'expo-router'
import React, { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'


export default function Register() {

  const params = useLocalSearchParams();

  const [name, setname] = useState('');

  const [email, setemail] = useState('');

  const [password, setpassword] = useState('');

  const [cmPassword, setcmPassword] = useState('');


  const [inviteCode, setinviteCode] = useState('');


  const [message, setmessage] = useState('');



  /* pass requirement var */

  const [char8, setchar8] = useState(false);

  const [num1, setnum1] = useState(false);

  const [symbol, setsymbol] = useState(false);

  const [capital, setcapital] = useState(false);

  const [lower, setlower] = useState(false);


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

    if(name.length == 0){
      return setmessage('Enter a name.')
    }

    if(email.length == 0){
      return setmessage('Enter a email.')
    }

    if(password.length == 0){
      return setmessage('Enter a password.')
    }

    if(cmPassword.length == 0){
      return setmessage('Enter a confirm password.')
    }

    if(IsCheck == false){
      return setmessage('Agree on Terms')
    }

    if(password != cmPassword){
      return setmessage('Password did not match.')
    }


    if(char8 != true || num1 != true || symbol != true || capital != true || lower != true){
      return setmessage('Password is not at minimum requirement.')
    }


    const payload_acc = {
      email : email,
      password : password,
      data : {
        rule : "",
        name : name,
        storename : "",

      }
    }

    if(inviteCode == "GwapoSiJulliane" || inviteCode.length !=0){
      console.log("acc: ", payload_acc)

      payload_acc.data.storename = "Gwapo Sari Sari Store"
      payload_acc.data.rule = "Store Keeper"
      router.push({
        pathname : '/',
        params : {userdata : JSON.stringify(payload_acc)},
      })

    }else{
      payload_acc.data.rule = "Admin"
      console.log("acc: ", payload_acc)
      router.push({
        pathname : '/store_name',
        params : {userdata : JSON.stringify(payload_acc)},
      })
    }

  }


  useEffect(() => {
    
    setmessage('')
    
  }, [name , email , password , cmPassword]);


  useEffect(() => {

    if (/[a-z]/.test(password) == true){
      setlower(true)
    }else{
      setlower(false)
    }

    if (/[A-Z]/.test(password) == true){
      setcapital(true)
    }else{
      setcapital(false)
    }

    if (/[!@#$%^&*(),.?":{}|<>_\-+=~`\\[\]\\/]/.test(password) == true){
      setsymbol(true)
    }else{
      setsymbol(false)
    }

    if (/[0-9]/.test(password) == true){
      setnum1(true)
    }else{
      setnum1(false)
    }

    if(password.length >= 8){
      setchar8(true)
    }else{
      setchar8(false)
    }
    

  

  }, [password]);




  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Text style={styles.sign_msg}>{message}</Text>
          <View style={[styles.input , styles.boxShadow]}>
            <Image
              source={require('../assets/imgs/user.png')}
            />
            <TextInput
                style={styles.input_box}
                placeholder='Name'
                value={name}
                onChangeText={(text)=> setname(text)}
            ></TextInput>
            
          </View>

          <View style={[styles.input , styles.boxShadow]}>
            <Image
              source={require('../assets/imgs/email.png')}
            />
            <TextInput
                style={styles.input_box}
                placeholder='Email'
                value={email}
                onChangeText={(text)=> setemail(text)}
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
                onChangeText={(text)=> setpassword(text)}
                secureTextEntry={true}
                autoComplete='off'
            ></TextInput>
            
          </View>

          <View style={styles.pass_req_container}>
            <Text style={styles.pass_req_header} >Password Requirement</Text>
            <Text style={styles.pass_req_text}> • Atleast 8 characters {char8 == true ? <Text> ✅</Text> : <Text style={styles.pass_req_on}>*</Text>}  </Text>
            <Text style={styles.pass_req_text}> • Atleast 1 number {num1 == true ? <Text> ✅</Text> : <Text style={styles.pass_req_on}>*</Text>}  </Text>
            <Text style={styles.pass_req_text}> • Symbol (? @ #) {symbol == true ? <Text> ✅</Text> : <Text style={styles.pass_req_on}>*</Text>}  </Text>
            <Text style={styles.pass_req_text}> • Atleast 1 captial letter{capital == true ? <Text> ✅</Text> : <Text style={styles.pass_req_on}>*</Text>} </Text>
            <Text style={styles.pass_req_text}> • Atleast 1 lower letter {lower == true ? <Text> ✅</Text> : <Text style={styles.pass_req_on}>*</Text>}  </Text>
          </View>



          <View style={[styles.input , styles.boxShadow]}>
            <Image
                source={require('../assets/imgs/password.png')}
              />
            <TextInput
                style={styles.input_box}  
                placeholder='Confirm Password'
                value={cmPassword}
                onChangeText={(text)=> setcmPassword(text)}
                secureTextEntry={true}
                autoComplete='off'
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
                value={inviteCode}
                onChangeText={(text)=> setinviteCode(text)}
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

    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

  sign_msg : {
    color : "#FD6E67"
  },

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
      width : '100%',
      height : "100%",
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