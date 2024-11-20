import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
const dti_scan = () => {
  
    const [image, setImage] = useState(null);
    const [permissionGranted, setPermissionGranted] = useState(false);

    const pickImage = async () => {
        try {
          // Request camera permissions
          const { status } = await ImagePicker.requestCameraPermissionsAsync();
          if (status !== 'granted') {
            alert('Camera permission not granted');
            return;
          }
    
          // Launch camera
          const result = await ImagePicker.launchCameraAsync();
          console.log(result); // Log the result object
    
          // Check if the user canceled
          if (result.canceled) {
            console.log('User cancelled taking a photo');
            return;
          }
    
          // Access the URI inside the assets array
          const photoUri = result.assets[0]?.uri;
          if (photoUri) {
            setImage(photoUri);
          } else {
            console.error('No photo URI found in result');
          }
        } catch (error) {
          console.error('Error launching camera:', error);
        }
      };


    const {userdata} = useLocalSearchParams()

    const submit = ()=>{
        router.push({
            pathname : '/',
            params : {userdata : userdata}
        })
    }

    useEffect(() => {
    const getPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        setPermissionGranted(status === 'granted');
    };
    getPermissions();   
    }, []);


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={()=>router.back()}
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

      <View style={styles.body}>
        <ImageBackground style={styles.permit_preview} source={require('../assets/imgs/permit_preview.png')}>
            {image && <Image source={{ uri: image }} style={styles.cameraImage} />}
        </ImageBackground>
       {
            image != null ? 
            (
                <TouchableOpacity style={styles.scanner_btn} onPress={()=>submit()}>
                    <Image style={styles.permiticon} source={require('../assets/imgs/checkbut.png')} />
                    <Text>Submit Permit</Text>
                </TouchableOpacity>
            )
            : 
                (
                    <TouchableOpacity style={styles.scanner_btn} onPress={()=>pickImage()}>
                        <Image style={styles.permiticon} source={require('../assets/imgs/affirmed.png')} />
                        <Text>Scan Permit</Text>
                    </TouchableOpacity>
                 )
       }
        <Text style={styles.info}>NOTE: Please upload your DTI (Department of Trade and Industry) business permit for verification. Please be aware that the process of validating your business permit may take up to <Text style={styles.week}>2 weeks</Text>. If the permit you upload is found to be invalid, your account will be locked until the correct permit is submitted. To avoid delays in the verification process, ensure that the business permit you provide is clear, valid, and accurate. Thank you for your cooperation and understanding.</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    week  : {
        fontWeight : 'bold',
        color : '#FD6E67',
    },

    cameraImage : {
        width : '100%',
        height : '70%',
        objectFit : 'contain',
        top : 20,
    },

    permiticon : {
        width : 30,
        height : 30,
    },

    info  :{
        textAlign : 'justify',
        fontSize : 15,
        color : '#808080'
    },

    body : {
        flex : 1,
        padding: 20,
        alignItems : 'center',
        justifyContent : 'space-between'
    },

    permit_preview : {
        width : 350,
        height : 290,
        justifyContent : 'center',
        alignItems : 'center',
    },

    scanner_btn : {
        gap : 10,
        borderRadius : 15,
        flexDirection  : 'row',
        alignItems : 'center',
        padding : 10,
        paddingLeft : 20,
        paddingRight: 20,
        backgroundColor : 'white',
        shadowColor : '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

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

export default dti_scan;
