import React, { useState, useContext } from 'react';
import { ImageBackground,TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements'
import GoogleLogin from '../components/GoogleLogin'


const SplashScreen3 = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newpassword, setNewpassword] = useState('');

    
  return( 
    <View style={styles.container}>
    <ImageBackground source={require('../images/splash3.png')} style={styles.image}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <Spacer/>
      
      
    
      <Text style={styles.header} h3>Post your recipes and save favourites</Text>
      <Spacer />
        <Text style={styles.subheader} h5>Create and publish your own recipe book and follow your friends to see theirs.</Text>
            
        <Spacer/>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />

    

    <Button 
          style={styles.button} 
          buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 200, borderRadius: 30}} 
          title="Get Started"
          onPress={() => {
              navigation.navigate('Signup')}
            }
        />

    </ImageBackground>
    </View>
  );
};

SplashScreen3.navigationOptions = () => {
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

export default SplashScreen3;