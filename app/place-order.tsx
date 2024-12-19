import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useCart } from './dashboard/CartContext'; // Assuming you have a CartContext for managing cart
import { useRouter } from 'expo-router';

const PlaceOrder = () => {
  const { cart } = useCart(); // Access cart from context
  const router = useRouter();

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image || 'https://via.placeholder.com/80' }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>₱{(item.price * item.quantity).toFixed(2)}</Text>
      </View>
    </View>
  );

  const handleConfirmOrder = () => {
    // Simulate order confirmation, could be integrated with backend API
    console.log('Order confirmed:', cart);
    router.push('/order-success'); // Navigate to an order success page
  };

  const handleCancelOrder = () => {
    router.push('/orders'); // Navigate back to orders page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Order</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.itemList}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₱{totalAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleConfirmOrder} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancelOrder} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2, // Shadow effect for Android
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#B4182D',
  },
  totalContainer: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3, // Shadow effect
    marginBottom: 30,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#B4182D',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#999',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlaceOrder;
