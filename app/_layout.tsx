import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const RootLayout = () => {
  
  return (
    
    <PaperProvider>
      <SafeAreaProvider> 
       
          <Stack
          screenOptions={{
            
          }}
          >
          <Stack.Screen name="index"options={{
            headerShown: false}}/>
              
          
          <Stack.Screen name="register" options={{
            headerShown: true,
            headerTintColor:'white',
            headerStyle:{
              backgroundColor: '#BC3043',
              
            },
          }}/>
          <Stack.Screen name="password-recovery"options={{
            headerShown: true,
            headerTintColor:'white',
            headerStyle:{
              backgroundColor: '#BC3043',
              
            },
          }}/>
          
          <Stack.Screen name="dashboard" options={{
            headerShown: false,
          }}/>
          
          
          <Stack.Screen name="places" options={{
            headerShown: false,
            statusBarHidden: true,
          }}/>

        </Stack>
    
      </SafeAreaProvider>
    </PaperProvider> 
    
  );
};

export default RootLayout;
