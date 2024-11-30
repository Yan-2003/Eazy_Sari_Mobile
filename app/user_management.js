import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import users from '../database/users'
export default function user_management() {

    const {userdata} = useLocalSearchParams()


    const getRate = (user) =>{
        const len = user.ratings.length
        let num = 0;
        user.ratings.map((rate)=>{
          num += rate.star
        })

        let star = parseInt(num/len)

        const star_rate = Array.from({length : star})

        return star_rate.map((_, index)=>{
          return <Image key={index} source={require('../assets/imgs/star.png')} />
        }) 
    }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
     <View style={styles.container}>
      <View style={styles.header}>
              <View>
                  <TouchableOpacity onPress={()=> router.back()} >
                      <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
                  </TouchableOpacity>
                  <Text style={styles.title_text}>User Mangement</Text> 
              </View>
          </View>
          <View style={styles.subtitile}>
            <Text>All User {users.length}</Text>
            <View style={styles.user_input}>
              <Image style={styles.user_input_image}  source={require('../assets/imgs/search.png')} />
              <TextInput style={styles.input} placeholder='Search User' />
            </View>
          </View>
          <View style={styles.table} >
            <Text style={styles.tableHead}>User name</Text>
            <Text style={styles.tableHead}>Ratings</Text>
            <Text style={styles.tableHead}>Last Active</Text>
          </View>
          <ScrollView style={styles.tableScroll}>
            {
              users.map((user, index)=>{
                return (
                    <TouchableOpacity key={index} style={styles.user} onPress={()=> router.push({pathname : "/view_user", params : { userdata : userdata , user : JSON.stringify(user)}})}>
                      <View style={[styles.cell, styles.usernname]}>
                        <Image style={styles.user_icon} source={require('../assets/imgs/user_2.png')} />
                        <View>
                          <Text style={styles.text_sm}>{user.name}</Text>
                          <Text style={styles.text_xsm}>{user.email}</Text>
                        </View>
                      </View>

                      <View style={[styles.cell, styles.rates]}>
                          {getRate(user)}
                      </View>

                      <Text style={[styles.cell, styles.text_sm]}>{user.last_active}</Text>
                    </TouchableOpacity>
                )
              })
            }
          </ScrollView>


        <Navbar On={'menu'} data={userdata}/>
     </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container : {
      flex : 1,
    },
  header : {
    width : '90%',
    alignSelf : 'center',
      
  },
  title_text : {
      fontWeight : 'bold',
      fontSize : 20,
  },
  subtitile :{
    flexDirection : 'row',
    width : '90%',
    alignSelf : 'center',
    justifyContent : 'space-between',
    marginTop : 40,
    alignItems : 'center'
  },
  user_input : {
    borderWidth : 1,
    borderColor : "#B1B1B1",
    paddingLeft  :10,
    paddingRight : 10,
    padding : 5,
    width : 200,
    borderRadius : 10,
    flexDirection : 'row',
    alignItems : 'center',
    gap : 10,
  },
  input  :{
    width : '100%',
    height : 'auto',
  },
  user_input_image : {
    width : 20,
    height : 20,
  },
  table : {
    marginTop : 20,
    width : '90%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignSelf : "center",
  },
  tableHead : {
    flex : 1,
    color : '#808080',
    textAlign : 'center',
    fontWeight : 'bold'
  },  
  tableScroll : {
    width : '90%',
    alignSelf : 'center',
    marginBottom : 100,
  },
  user_icon : {
    width : 30,
    height : 30,
  },
  user : {
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 10,
    borderBottomWidth : 1,
    borderBottomColor : '#D9D9D9',
    paddingTop : 10,
    paddingBottom : 10,
    alignItems : 'center',
  },
  usernname : {
    flex : 2,
    flexDirection : 'row',
    alignItems : 'center',
    gap : 10,
  },
  text_sm : {
    fontSize : 10,
  },
  text_xsm : {
    fontSize : 8,
  },

  cell : {
    flex : 1,
  },
  rates : {
    flex : 1,
    flexDirection : 'row',
    gap  : 5,
  },

})