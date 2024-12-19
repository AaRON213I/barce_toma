import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button } from 'react-native-paper';

const AccountDetailsScreen = () => {
  const router = useRouter();
  const { name, address, contactNumber, email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Contact Number:</Text>
        <Text style={styles.value}>{contactNumber}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>  
      <Button
        mode="contained"
        style={styles.button}
        buttonColor="#BC3043"
        textColor="#FFFFFF"
        onPress={() => router.push('/dashboard/(tabs)/Home')}
      >
        Go to Home
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#666',
  },
  button: {
    marginTop: 32,
    marginHorizontal: 16,
  },
});

export default AccountDetailsScreen;
