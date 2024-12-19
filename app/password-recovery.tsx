import React, { useState } from 'react';
import { View, StyleSheet, Image , ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = () => {
    // Handle password recovery logic here
    console.log('Recover password for:', { email });
  };

  return (
    
    
    
    
    <View style={styles.container}>
      <View style={styles.LogoSection}>
      <Image
        source={{uri : 'https://scontent.fcgy3-1.fna.fbcdn.net/v/t1.15752-9/467476795_1508259123219066_7170532339124111121_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGCKJ2RXzGb8NECs0GwrulKe96s6a07Pcx73qzprTs9zP-aI-c6eqQcRo0hLyNKbJ49HnoTsqSfBNJ0ARq8569D&_nc_ohc=cs_SaKvICQYQ7kNvgFFOPHI&_nc_zt=23&_nc_ht=scontent.fcgy3-1.fna&oh=03_Q7cD1QH0ga5JfiRuqmK5XrON3Vd76Zfw8tgDzbNOCKWanKrcDg&oe=67715AB9'}}
        style={styles.LogoImage}/>

        

      </View>
      
      
      
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon="email"/>}
        outlineColor="#6C757D"
        activeOutlineColor="#C9A85C"
      />
      <Button mode="contained" onPress={handlePasswordRecovery}
      styles={styles.Button}
      buttonColor="#BC3043"
      textColor="#FFFFFF">
        Recover Password
      </Button>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(40,40,40,0.5)',
  },
  input: {
    marginBottom: 16,
  },
  background:{
    flex:1,
    resizeMode: 'cover',
  },
  LogoImage:{
    height:200,
    width:200,
    borderRadius:50,
  },
  LogoSection:{
    alignItems:'center',
  }

});

export default PasswordRecoveryScreen;
