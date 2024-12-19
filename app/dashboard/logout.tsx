import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const LogoutScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform logout actions (clear context, remove token, etc.)
    // Example: await AsyncStorage.removeItem('userToken');
    
    // Redirect to the index screen after logout
    router.push('/');
  }, [router]);

  return null; // You can show a loading indicator here while performing the logout
};

export default LogoutScreen;
