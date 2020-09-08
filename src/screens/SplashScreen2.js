import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground,TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements'
import GoogleLogin from '../components/GoogleLogin'


const SplashScreen2 = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newpassword, setNewpassword] = useState('');

   useEffect(() => {
    setTimeout(() => {
    navigation.navigate('Splash3')
  }, 5000)
  }, [])

    
  return( 
    <View style={styles.container}>
    <ImageBackground source={require('../images/splash2.png')} style={styles.image}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <Spacer/>
      <Spacer/>
      
    
      <Text style={styles.header} h3>See suggested ingredients whilst cooking</Text>
      <Spacer />
        <Text style={styles.subheader} h5>Ingredients are calculated and weighted by flavour combinations based on your dish.</Text>
            
        
    

    <View style={styles.log}>
      <NavLink
      style={{
        justifyContent: 'center',
            alignItems: 'center'
          }}
      routeName="Signin"
     
      />
    </View>
    </ImageBackground>
    </View>
  );
};

SplashScreen2.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 10,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15
  },
  header: {
    fontWeight: "800",
    marginLeft: 15,
  },
  subheader: {
    fontWeight: "800",
    marginLeft: 15,
    fontSize: 17,
    
  },
  button: {
     
    justifyContent: 'center',
      alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default SplashScreen2;