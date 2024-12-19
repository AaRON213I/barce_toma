import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useCart } from './CartContext'; // Assuming you have a CartContext for managing cart
import { useRouter } from 'expo-router';
import { db } from './firebase'; // Firebase config import
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods

const Orders = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart(); // Access cart and actions from context
  const [orderPlaced, setOrderPlaced] = useState(false); // State to track order placement

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image || 'https://via.placeholder.com/80' }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>₱{(item.price * item.quantity).toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity === 1}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handlePlaceOrder = async () => {
    // Prepare the order data
    const orderData = {
      items: cart,
      totalAmount,
      date: new Date().toISOString(), // Save the order date
    };

    try {
      // Save order to Firestore
      await addDoc(collection(db, 'orders'), orderData);
      
      // Clear the cart after placing the order
      clearCart();

      // Show alert notification for order success
      Alert.alert(
        "Order Placed",
        "Your order has been placed successfully!",
        [
          { text: "OK", onPress: () => setOrderPlaced(true) }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error placing order: ', error);
      Alert.alert('Order Failed', 'There was an issue placing your order. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyMessage}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {/* Display total amount */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₱{totalAmount.toFixed(2)}</Text>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity onPress={handlePlaceOrder} style={styles.placeOrderButton}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>

      {/* Clear Cart Button */}
      <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
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
    elevation: 2,
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    backgroundColor: '#115D33',
    padding: 8,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 12,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  removeButton: {
    backgroundColor: '#115D33',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  clearButton: {
    backgroundColor: '#115D33',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  clearButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeOrderButton: {
    backgroundColor: '#B4182D',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  placeOrderButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Orders;
