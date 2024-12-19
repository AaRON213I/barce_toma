import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { auth, db } from './firebase';  // Import Firebase config
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth method
import { doc, setDoc } from 'firebase/firestore'; // Firestore methods

const RegistrationScreen = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (loading) return; // Prevent multiple submissions

    setLoading(true);
    setError(''); // Clear any previous errors

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data (name, address, contact number) in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        address,
        contactNumber,
        email,
      });

      // After registration, navigate to the AccountDetailsScreen with user data
      router.push({
        pathname: '/account-details',
        params: { name, address, contactNumber, email },
      });
    } catch (err: any) {  // Type `err` explicitly as `any`
      setError('Registration failed: ' + (err.message || err)); // Display error
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.LogoSection}>
        <Image
          source={{
            uri: 'https://scontent.fcgy3-1.fna.fbcdn.net/v/t1.15752-9/467476795_1508259123219066_7170532339124111121_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGCKJ2RXzGb8NECs0GwrulKe96s6a07Pcx73qzprTs9zP-aI-c6eqQcRo0hLyNKbJ49HnoTsqSfBNJ0ARq8569D&_nc_ohc=cs_SaKvICQYQ7kNvgFFOPHI&_nc_zt=23&_nc_ht=scontent.fcgy3-1.fna&oh=03_Q7cD1QH0ga5JfiRuqmK5XrON3Vd76Zfw8tgDzbNOCKWanKrcDg&oe=67715AB9',
          }}
          style={styles.LogoImage}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon="map-marker" />}
      />
      <TextInput
        label="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
        style={styles.input}
        keyboardType="phone-pad"
        mode="outlined"
        left={<TextInput.Icon icon="phone" />}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        mode="outlined"
        left={<TextInput.Icon icon="key" />}
      />
      <Button
        mode="contained"
        onPress={handleRegister}
        style={styles.Button}
        buttonColor="#BC3043"
        textColor="#FFFFFF"
        loading={loading}
        disabled={loading}
      >
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(40, 40, 40, 0.5)',
  },
  input: {
    marginBottom: 16,
  },
  LogoSection: {
    alignItems: 'center',
  },
  LogoImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  Button: {
    marginTop: 20,
  },
});

export default RegistrationScreen;
