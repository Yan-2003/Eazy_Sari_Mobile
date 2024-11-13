import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Link, router } from 'expo-router';

const StoreName = () => {
  const [storeName, setStoreName] = useState('');

  const back = () => {
    try {
      router.back()
    } catch (error) {
      router.replace('/')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={back}
        >
          <Image 
            source={require('../assets/imgs/back.png')} 
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Image 
            source={require('../assets/imgs/mini_logo.png')} 
            style={styles.logo}
          />
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Welcome to EazySari</Text>
            <Text style={styles.exclamation}>!</Text>
          </View>
        </View>
      </View>

      <Image 
        source={require('../assets/imgs/Navbar icon/store roof.png')} 
        style={styles.storeRoof}
      />

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          You're The <Text style={styles.highlightText}>Owner</Text>, input your store name.
        </Text>
        <Text style={styles.note}>
          <Text style={styles.boldText}>Note:</Text> when inviting friends, this will be displayed to their account.
        </Text>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/imgs/store.png')} style={styles.storeIcon} />
          <TextInput
            style={styles.input}
            placeholder="Store Name"
            value={storeName}
            onChangeText={setStoreName}
          />
        </View>
      </View>

      {/* Continue Button */}
      <Link href={{
        pathname: '/',
        params: { storeName: storeName }
      }} asChild>
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => {
            if (storeName.trim()) {
              router.push({
                pathname: "/",
                params: { storeName }
              });
            }
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 40,
    zIndex: 1,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  backArrow: {
    width: 24,
    height: 24,
    marginRight: 16,
    tintColor: '#008055',
  },
  logo: {
    width: 60,
    height: 60,
  },
  welcomeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  exclamation: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#008055',
  },
  storeRoof: {
    width: '100%',
    height: 55,
    resizeMode: 'stretch',
    marginTop: -10,
  },
  inputContainer: {
    padding: 24,
    marginTop: 90,
  },
  label: {
    fontSize: 17,
    color: '#666',
    marginBottom: 4,
  },
  note: {
    fontSize: 12,
    color: '#999',
    marginBottom: 20,
  },
  highlightText: {
    color: '#00A651',
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 9,
    padding: 12,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.30,
    shadowRadius: 5,
    elevation: 5,
  },
  storeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#00A651',
    margin: 24,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default StoreName;
