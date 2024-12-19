import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icon library
import { CartProvider } from './CartContext'; // Import the CartProvider

const DashboardLayout = () => {
  return (
    <CartProvider>
      <Tabs
        screenOptions={{
          headerShown: false, // Hide the header globally
          tabBarStyle: {
            backgroundColor: 'white', // Tab bar background color
          },
          tabBarActiveTintColor: '#BC3043', // Active tab label color
          tabBarInactiveTintColor: 'gray', // Inactive tab label color
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        {/* Orders Screen */}
        <Tabs.Screen
          name="Orders"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
            tabBarLabel: 'Orders',
          }}
        />
        {/* Account Screen */}
        <Tabs.Screen
          name="account"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            tabBarLabel: 'Account',
          }}
        />
      </Tabs>
    </CartProvider>
  );
};

export default DashboardLayout;
