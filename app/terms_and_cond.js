import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import { Link, router } from 'expo-router'
import React from 'react'

const TermsAndConditions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
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

      {/* Terms content */}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Terms & Conditions</Text>
        
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.text}>These Terms and Conditions govern your use of the EazySari mobile application.</Text>

        <Text style={styles.sectionTitle}>2. Acceptance of Terms</Text>
        <Text style={styles.text}>By accessing or using EazySari, you agree to be bound by these Terms and Conditions. If you do not agree with any part of them, then you may not use EazySari.</Text>

        <Text style={styles.sectionTitle}>3. Use of the Application</Text>
        <Text style={styles.subSectionTitle}>3.1. License</Text>
        <Text style={styles.text}>EazySari grants you a non-exclusive, non-transferable license to use the application in accordance with these terms.</Text>

        <Text style={styles.subSectionTitle}>3.2. User Accounts</Text>
        <Text style={styles.text}>You may be required to create an account to use certain features of EazySari. You are responsible for maintaining the confidentiality of your account information.</Text>

        <Text style={styles.subSectionTitle}>3.3. Prohibited Activities</Text>
        <Text style={styles.text}>You agree not to engage in any prohibited activities including, but not limited to: hacking, reverse engineering, or unauthorized use of EazySari.</Text>

        <Text style={styles.sectionTitle}>4. Privacy Policy</Text>
        <Text style={styles.text}>Your use of EazySari is also subject to our Privacy Policy, which governs how we collect, use, and disclose your information. By using EazySari, you consent to our Privacy Policy.</Text>

        <Text style={styles.sectionTitle}>5. Intellectual Property</Text>
        <Text style={styles.subSectionTitle}>5.1. Ownership</Text>
        <Text style={styles.text}>EazySari and its original content, features, and functionality are owned by EazySari and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</Text>

        <Text style={styles.subSectionTitle}>5.2. License to User Content</Text>
        <Text style={styles.text}>By uploading, submitting, or otherwise transmitting any content through EazySari, you grant EazySari a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.</Text>

        <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
        <Text style={styles.subSectionTitle}>6.1. Disclaimer</Text>
        <Text style={styles.text}>EazySari is provided "as is" without warranties of any kind, whether express or implied.</Text>

        <Text style={styles.subSectionTitle}>6.2. Limitation of Liability</Text>
        <Text style={styles.text}>To the maximum extent permitted by law, EazySari shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</Text>

        <Text style={styles.sectionTitle}>7. Governing Law</Text>
        <Text style={styles.text}>These Terms and Conditions shall be governed by and construed in accordance with the laws of [your jurisdiction], without regard to its conflict of law provisions.</Text>

        <Text style={styles.sectionTitle}>8. Changes to Terms</Text>
        <Text style={styles.text}>EazySari reserves the right to modify or replace these Terms at any time. Your continued use of EazySari after any such changes constitutes your acceptance of the new Terms and Conditions.</Text>

        <Text style={styles.sectionTitle}>9. Contact Us</Text>
        <Text style={styles.text}>If you have any questions about these Terms and Conditions, please contact us.</Text>
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.cancelButton]} 
          onPress={() => router.back()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.acceptButton]}
          onPress={() => {
            router.push({
              pathname: '/register',
              params: { termsAccepted: true }
            })
          }}
        >
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  storeRoof: {
    width: '100%',
    height: 55,
    resizeMode: 'stretch',
    marginTop: -10,
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
  greenDecoration: {
    height: 20,
    backgroundColor: '#008055',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#E0E0E0',
    marginRight: 8,
  },
  acceptButton: {
    backgroundColor: '#00A86B',
    marginLeft: 8,
  },
  cancelButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TermsAndConditions;
