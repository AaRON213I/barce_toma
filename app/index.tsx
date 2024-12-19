import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Email and password are required!');
      return;
    }

    if (email === '1' && password === '1') {
      console.log('Login Successful');
      router.replace('dashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Curved Top Section */}
      <View style={styles.topSection}>
        <Image
          source={{
            uri: 'https://scontent.fcgy3-1.fna.fbcdn.net/v/t1.15752-9/467476795_1508259123219066_7170532339124111121_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGCKJ2RXzGb8NECs0GwrulKe96s6a07Pcx73qzprTs9zP-aI-c6eqQcRo0hLyNKbJ49HnoTsqSfBNJ0ARq8569D&_nc_ohc=cs_SaKvICQYQ7kNvgFFOPHI&_nc_zt=23&_nc_ht=scontent.fcgy3-1.fna&oh=03_Q7cD1QH0ga5JfiRuqmK5XrON3Vd76Zfw8tgDzbNOCKWanKrcDg&oe=67715AB9',
          }}
          style={styles.logo}
        />
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
          outlineColor="#6C757D"
          activeOutlineColor="#C9A85C"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          mode="outlined"
          left={<TextInput.Icon icon="key" />}
          outlineColor="#6C757D"
          activeOutlineColor="#C9A85C"
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.loginButton}
          buttonColor="#BC3043"
          textColor="#FFFFFF"
        >
          Login
        </Button>
        <Button
          onPress={() => router.push('/register')}
          textColor="#1B263B"
          style={styles.linkButton}
        >
          Don't have an account? Register
        </Button>
        <Button
          onPress={() => router.push('/password-recovery')}
          textColor="#1B263B"
          style={styles.linkButton}
        >
          Forgot Password?
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  topSection: {
    backgroundColor: 'rgba(188, 48, 67, 1)',
    height: '30%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    borderRadius: 10, // Fixed comma
    borderWidth: 2, // Fixed comma
    borderColor: '#FFF',
  },
  formSection: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B263B',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  loginButton: {
    marginVertical: 16,
    borderRadius: 10,
  },
  linkButton: {
    marginVertical: 8,
  },
});

export default LoginScreen;
