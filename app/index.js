import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Text, StyleSheet, Image } from 'react-native'
import Navbar from '../components/Navbar';
import { useLocalSearchParams } from 'expo-router';
export default function Home() {

    const authuser = useLocalSearchParams()

    const [isReady, setIsReady] = useState(false);
    const [auth, setAuth] = useState(authuser || false ); 

    useEffect(() => {

        const checkAuth = async () => {

            await new Promise(resolve => setTimeout(resolve, 1000));
            setAuth(authuser); 
            setIsReady(true); 
        };

        checkAuth();
    }, []);

    useEffect(() => {
        if (isReady) {
            if (!auth) {
                router.push('/login'); 
            }
        }
    }, [isReady, auth]);


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.header_logo} source={require('../assets/imgs/mini_logo.png')} /> 

        </View>



        <Navbar />
    </View>
  )
}


const styles = StyleSheet.create({

    header : {
        width : '95%',
        alignSelf : 'center',
        justifyContent : 'space-between'
    }, 

    header_logo : {
        width : 40,
        height : 40,
    },

    container : {
        flex : 1,
    }
})