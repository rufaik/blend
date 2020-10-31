import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground,TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements'
import GoogleLogin from '../components/GoogleLogin'
import { Fontisto } from '@expo/vector-icons';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'



const SplashScreen2 = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newpassword, setNewpassword] = useState('');

  //  useEffect(() => {
  //   setTimeout(() => {
  //   navigation.navigate('Splash3')
  // }, 5000)
  // }, [])

    
  return( 
    <View style={styles.container}>
    <ImageBackground source={require('../images/splash2.png')} style={styles.image}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />

      <Image source={require('../images/acorn.png')} style={styles.acorn} />
     
      
    
      <Text style={styles.header}>See suggested ingredients {'\n'}whilst cooking</Text>
      <Spacer />
        <Text style={styles.subheader} h5>Ingredients are calculated and weighted {'\n'}by flavour combinations based on your {'\n'}dish.</Text>
            
        

    

    <View style={styles.log}>
      <NavLink
      style={{
        justifyContent: 'center',
            alignItems: 'center'
          }}
      routeName="Signin"
     
      />
    </View>
    <View style={styles.button} >
    <Button 
          
          buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: Platform.OS === 'ios' ? 15 : 9, width: Platform.OS === 'ios' ? 150 : 120, borderRadius: 30, fontFamily: 'Poppins_700Bold'}} 
          titleStyle={{fontSize: Platform.OS === 'ios' ? 18 : 12 }}
          title="Next"
          onPress={() => {
              navigation.navigate('Splash3')}
            }
        />
    </View>
    <View style={styles.dots}>
      <Fontisto name="ellipse" size={8} color="#F4F4F4" style={{marginRight:5}} />
      <Fontisto name="ellipse" size={11} color="black" style={{marginRight:5}}/>
      <Fontisto name="ellipse" size={8} color="#F4F4F4" />
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
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    position: "absolute",
    left: "0%",
    right: "10%",
    top: "87%",
    bottom: "3.83%",
  },
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
    position: "absolute",
    left: "1%",
    right: "0%",
    top: "23%",
    bottom: "23.83%",
    lineHeight: Platform.OS === 'ios' ? 45 : 30,
    fontFamily: 'Poppins_700Bold',
    fontSize: Platform.OS === 'ios' ? 35 : 22
  },
  subheader: {
    fontWeight: "800",
    fontSize: Platform.OS === 'ios' ? 17 : 10,
    marginLeft: 15,
    position: "absolute",
    left: "1%",
    right: "0%",
    top: "47%",
    bottom: "23.83%",
    fontFamily: 'Poppins_700Bold'
  },
  button: {
    alignItems: "center",
    justifyContent:'center',
    position: "absolute",
    left: "0%",
    right: "10%",
    top: "67%",
    bottom: "13.83%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  acorn: {
     marginLeft: 26,
    position: "absolute",
    left: "1%",
    right: "0%",
    top: "13%",
    bottom: "23.83%",
  }
});

export default SplashScreen2;