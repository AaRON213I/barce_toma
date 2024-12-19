import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function DashboardLayout() {
  const router = useRouter();

  // Navigation Handlers
  const navigateToHome = () => {
    router.push('/dashboard/(tabs)/Home'); // Navigate to Home tab
  };

  const navigateToOrders = () => {
    router.push('/dashboard/(tabs)/Orders'); // Navigate to Orders tab
  };

  const navigateToAccountDetails = () => {
    router.push('/account-details'); // Navigate to Account Details page
  };

  const handleLogout = () => {
    router.push('/'); // Route to the main page (logout or login)
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
        {/* Home Tab */}
        <Drawer.Screen
          name="(tabs)"
          options={{  
            
            drawerLabel: () => (
              <TouchableOpacity onPress={navigateToHome} style={styles.headerContainer}>
                <Ionicons name="home-outline" size={30} color="#B4182D" />
                <Text style={styles.drawerText}>Home</Text>
              </TouchableOpacity>
            ),
            headerTitle: () => <Text style={styles.titleText}>Toma Express</Text>,
            headerTintColor: "#BC3043",
            
          }}
        />

        {/* Orders Tab */}
        <Drawer.Screen
          name="Orders"
          options={{
            drawerLabel: () => (
              <TouchableOpacity onPress={navigateToOrders} style={styles.headerContainer}>
                <Ionicons name="list-circle-outline" size={30} color="#B4182D" />
                <Text style={styles.drawerText}>Orders</Text>
              </TouchableOpacity>
            ),
            title: 'Orders',
          }}
        />

        {/* Account Details */}
        <Drawer.Screen
          name="account-details"
          options={{
            drawerLabel: () => (
              <TouchableOpacity onPress={navigateToAccountDetails} style={styles.headerContainer}>
                <Ionicons name="person-outline" size={30} color="#B4182D" />
                <Text style={styles.drawerText}>Account Details</Text>
              </TouchableOpacity>
            ),
            title: 'Account Details',
          }}
        />

        {/* Logout */}
        <Drawer.Screen
          name="logout"
          options={{
            drawerLabel: () => (
              <TouchableOpacity onPress={handleLogout} style={styles.headerContainer}>
                <Ionicons name="log-out-outline" size={30} color="#B4182D" />
                <Text style={styles.drawerText}>Logout</Text>
              </TouchableOpacity>
            ),
            title: 'Logout',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  drawerText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#B4182D',
    fontFamily: 'System', // Replace with a custom font if required
    textAlign: 'center',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
});
