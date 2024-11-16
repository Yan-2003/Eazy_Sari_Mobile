import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ProductInfo() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
        <TouchableOpacity>
          <Text style={styles.menuButton}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image
        source={require(`../assets/imgs/demo_products/pancit_canton.png`)}
        style={styles.productImage}
        resizeMode="contain"
      />

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>₱{product.price}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description}>{product.description || 'No description available'}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginBottom: 16,
  },
  stock: {
    fontSize: 16,
    color: '#666',
  },
});
