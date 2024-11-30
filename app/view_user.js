import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import UserModalMenu from '../components/Modal/UserModalMenu'
import GiveFeedbackModal from '../components/Modal/GiveFeedbackModal'
export default function view_user() {

    const {userdata , user} = useLocalSearchParams()

    const user_info = JSON.parse(user)

    const [openMenu, setopenMenu] = useState(false);

    const [onWhere, setonWhere] = useState('transact');

    const [openFeedback, setopenFeedback] = useState(false);

    

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

    const getRatefeddback = (num) =>{
        const star_rate = Array.from({length : num})

        return star_rate.map((_, index)=>{
          return <Image key={index} source={require('../assets/imgs/star.png')} />
        }) 
    }

    const switchmode = ()=>{
        onWhere == 'transact' ? setonWhere('feedback') : setonWhere('transact')
        setopenMenu(false)
    }



  return (
  <TouchableWithoutFeedback onPress={()=>setopenMenu(false)}>
        <View style={styles.constianer} >
            <GiveFeedbackModal open={openFeedback} user={user_info} closeFunction={()=>setopenFeedback(false)} />
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={()=> router.back()} >
                        <Image style={styles.back} source={require('../assets/imgs/back.png')}  />
                    </TouchableOpacity>
                    <Text style={styles.title_text}>User Mangement</Text> 
                </View>
                
            </View>

            <View style={styles.info}>
                <View style={styles.bannder}></View>
                <TouchableOpacity onPress={()=> openMenu ? setopenMenu(false) : setopenMenu(true)} style={styles.menubtn}><Image source={require('../assets/imgs/white_dots.png')}/></TouchableOpacity>
                <UserModalMenu open={openMenu} method={()=>switchmode()} onwhere={onWhere} />
                <View style={styles.user_info_content}>
                    <Image style={styles.user_image} source={require('../assets/imgs/user/PicsArt_07-10-07.45.13.jpg')} />
                <View style={styles.info_name}>
                    <Text style={styles.text_name}>{user_info.name}</Text>
                    <View>
                        <Text style={styles.text_email}>{user_info.email}</Text>
                        <Text style={styles.text_date_added}>Joined Since {user_info.date_added}</Text>
                    </View>
                </View>
                </View>
                <View style={styles.user_details}>
                    <View style={styles.user_details_items}>
                        <Text style={styles.user_details_tittle}>Store Keeper Rate</Text>
                        <View style={styles.rates}>
                            {getRate(user_info)}
                        </View>
                    </View>
                    <View style={styles.user_details_items}>
                        <Text style={styles.user_details_tittle}>Total Transaction</Text>
                        <Text style={styles.user_details_total}>{user_info.transactions.length}</Text>
                    </View>
                    <View style={styles.user_details_items}>
                        <Text style={styles.user_details_tittle}>Total Feedback</Text>
                        <Text style={styles.user_details_total}>{user_info.ratings.length}</Text>
                    </View>
                </View>
                {
                    onWhere == 'transact' ? 
                    
                    (
                        <ScrollView style={styles.table}>
                            <View style={styles.row}>
                                <Text style={styles.tableHead}>Tranasaction No.</Text>
                                <Text style={styles.tableHead}>Tranasaction Date</Text>
                                <Text style={styles.tableHead}>Tranasaction Price</Text>
                            </View>

                            {
                                user_info.transactions.map((transaction, index)=>{
                                    return (
                                        <View key={index} style={styles.row_item}>
                                            <Text style={styles.tdata}>{transaction.transaction_id}</Text>
                                            <Text style={styles.tdata}>{transaction.transaction_date}</Text>
                                            <Text style={styles.tdata_price}>₱{transaction.total_price}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    )
                    :
                    (
                        <View style={styles.feedback}>
                            <View style={styles.uppderfeedback} >
                                <Text>Stores Feedback </Text>
                                <TouchableOpacity style={styles.feebackBtn} onPress={()=>setopenFeedback(true)}>
                                    <Text style={styles.text_white} >Give Feedback</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={styles.feedback_view}>
                                {
                                    user_info.ratings.map((rates, index)=>{
                                        return (
                                            <View key={index} style={styles.ratecomment}>
                                                <View style={styles.profile}></View>
                                                <View style={styles.rate_details_comment}>
                                                    <View>
                                                        <Text>{rates.storename}</Text>
                                                        <View style={styles.star}>
                                                            {
                                                                getRatefeddback(rates.star)
                                                            }
                                                        </View>
                                                    </View>
                                                    <Text styles={styles.rateMessage}>{rates.message}</Text>
                                                </View>
                                                <View style={styles.like_part}>
                                                    <Image style={styles.icon} source={require('../assets/imgs/like.png')} />
                                                    <Text>({rates.like}) helpful?</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
    
                    )
                }
            </View>


            <Navbar On={'menu'} data={userdata}/>
        </View>
  </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
    constianer : {
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

    bannder : {
        position : 'absolute',
        alignSelf : 'center',
        backgroundColor : '#01A163',
        width : '90%',
        height : 70,
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15,
    },
    user_image : {
        width : 100,
        height : 100,
        borderRadius: '100%',
        borderColor : 'white',
        borderWidth : 2,
    },
    user_info_content: {
        marginTop : 20,
        width : '80%',
        alignSelf : 'center',
        flexDirection : 'row',
        gap : 20,
        alignItems : 'center',
    },
    text_name : {
        color : 'white',
        fontSize : 20,
    },
    info_name :{
        gap : 10,
    },
    text_email : {
        fontSize : 15,
    },
    info :{
        marginTop : 20,
    },
    text_date_added: {
        fontSize : 10,
        color : '#B4B3B3'
    },
    rates :{ 
        flexDirection : 'row',
        gap : 5,
    },
    user_details : {
        marginTop : 20,
        width : '80%',
        alignSelf : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        paddingBottom : 25,
        borderBottomWidth  :1,
        borderBottomColor : '#B4B3B3'
    }, 
    user_details_items : {
        alignItems : 'center',
        gap : 10,
    },
    user_details_tittle :{
        color : '#B4B3B3',
    },
    user_details_total :{ 
        color : '#01A163',
        fontWeight : 'bold',
        fontSize : 20,
    },

    table :{
        marginTop : 20,
        width : '80%',
        alignSelf : 'center',
        height : '100%'
    },
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    tableHead : {
        color : '#808080',
        width : 100,
        fontSize : 12,
        textAlign : 'center'
    },
    tdata :{
        fontSize : 12,
        width : 100,
        textAlign : 'center'
    },
    row_item : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingTop :10,
        paddingBottom : 10,
        borderBottomWidth : 1,
        borderColor : '#B4B3B3',
        alignItems : 'center'
    },

    tdata_price : {
        fontSize : 12,
        width : 100,
        textAlign : 'center',
        color : '#01A163',
        fontWeight : 'bold'
    },
    menubtn :{
        position : 'absolute',
        right : 25,
        top : 10,
    },
    feedback : {
        width : '90%',
        alignSelf : 'center',
        marginTop : 20,
    },

    uppderfeedback : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    feebackBtn : {
        backgroundColor : '#01A163',
        padding : 10,
        borderRadius : 10,
    },
    text_white : {
        color : 'white'
    },
    feedback_view : {
        width : '100%',
        marginTop : 10,
    },
    ratecomment :{
        width : '100%',
        flexDirection : 'row',
        borderWidth : 1,
        borderRadius : 15,
        padding : 10,
        gap : 10,
        borderColor : '#D9D9D9',
        marginTop : 10,
        justifyContent : 'space-between'
    },
    profile :{ 
        width : 20,
        height : 20,
        borderRadius : '100%',
        backgroundColor : '#D9D9D9'
    },
    icon : {
        width : 20,
        height : 20,
    },
    like_part : {
        flexDirection : 'row'
    },

    rate_details_comment : {
        width : '60%',
        gap : 10,
    },
    star : {
        flexDirection : 'row',
        gap : 5,
    }, 
})