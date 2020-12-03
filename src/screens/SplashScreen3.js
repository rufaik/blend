import React, { useState, useContext } from 'react';
import { ImageBackground,TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements'
import GoogleLogin from '../components/GoogleLogin'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { Fontisto } from '@expo/vector-icons';



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
   
      
      <SimpleLineIcons name="cloud-upload" size={38} color="black" style={styles.logo} />
      
       

      <Text style={styles.header} >Post your recipes {'\n'}and save favourites</Text>
     

        <Text style={styles.subheader} h5>Create and publish your own recipe book {'\n'}and follow your friends to see theirs.</Text>
            
        

    
    <View style={styles.button} >
    <Button 
          
          buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: Platform.OS === 'ios' ? 17 : 11, width: Platform.OS === 'ios' ? 180 : 160, borderRadius: 30, fontFamily: 'Poppins_700Bold'}} 
          titleStyle={{fontSize: Platform.OS === 'ios' ? 18 : 12, fontFamily: 'Poppins_500Medium' }}
          title="Get Started"
          onPress={() => {
              navigation.navigate('Signup')}
            }
        />
      </View>
    <View style={styles.dots}>
      <Fontisto name="ellipse" size={8} color="#F4F4F4" style={{marginRight:5}} />
      <Fontisto name="ellipse" size={8} color="#F4F4F4" style={{marginRight:5}} />
      <Fontisto name="ellipse" size={11} color="black" style={{marginLeft:5}}/>
    </View>

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
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "87%",
    bottom: "3.83%",
  },
  errorMessage: {
    fontSize: 10,
    color: 'red',
    marginLeft: 26,
    marginTop: 15,
    marginBottom: 15
  },
  header: {
    fontWeight: "800",
    marginLeft: 26,
    position: "absolute",
    left: "1%",
    right: "0%",
    top: "23%",
    bottom: "23.83%",
    lineHeight: Platform.OS === 'ios' ? 45 : 30,
    fontFamily: 'Poppins_700Bold',
    fontSize: Platform.OS === 'ios' ? 35 : 22
  },
  logo: {
    marginLeft: 26,
    position: "absolute",
    left: "1%",
    right: "0%",
    top: "13%",
    bottom: "23.83%",
  },
  subheader: {
    fontWeight: "800",
    marginLeft: 26,
    fontSize: Platform.OS === 'ios' ? 15 : 9,
    fontFamily: 'Poppins_700Bold',
    position: "absolute",
    left: "1%",
    right: "0%",
    top: "47%",
    bottom: "23.83%",

  },
  button: {
    alignItems: "center",
    justifyContent:'center',
    position: "absolute",
    left: "0%",
    right: "0%",
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
  }
});

export default SplashScreen3;