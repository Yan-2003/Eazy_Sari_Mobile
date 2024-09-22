import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

export default function Home() {

    const [isReady, setIsReady] = useState(false);
    const [auth, setAuth] = useState(false); // Adjust this based on your auth logic

    useEffect(() => {
        // Simulating an authentication check
        // Replace this with your actual authentication logic
        const checkAuth = async () => {
            // Simulate an API call or async operation
            await new Promise(resolve => setTimeout(resolve, 1000));
            setAuth(false); // Set auth status based on your logic
            setIsReady(true); // Mark the component as ready
        };

        checkAuth();
    }, []);

    useEffect(() => {
        if (isReady) {
            if (!auth) {
                router.push('/login'); // Navigate only if ready
            }
        }
    }, [isReady, auth]);


  return (
    <View style={styles.container}>
        <Text>EazySari</Text>
        <Link href={'/login'}>login</Link>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})