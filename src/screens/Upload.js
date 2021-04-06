import React, { useState, useEffect, useContext } from 'react';
import { Image, Text, View, Platform, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Input, Button } from 'react-native-elements'
import { Context  as AuthContext } from '../context/AuthContext'
import { Context  as TrackContext } from '../context/TrackContext'
import { AsyncStorage } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { Feather } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';




  const Upload = ({navigation}) => {
  const [image, setImage] = useState();
  const { clearErrorMessage, reset, } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { state, fetchTracks } = useContext(TrackContext);
    // const [email, setEmail] = useState('')
    console.log("email2", state)


      const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (state) => {
    const photoUri = await AsyncStorage.getItem(`${state.userId}-photo`);
    setPhoto(photoUri);
  };

  useEffect(() => {
    getProfilePicture(state);
  }, [state]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      profile({ result });
      // console.log("result", image);
      // console.log("result1", result[0]);
    }
  };

//This is the original image property for expo image picker{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.cancelSaveBox}>
    <TouchableOpacity>
      <Text style={styles.cancelSave} > Cancel </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.cancelSave}> Save </Text>
    </TouchableOpacity>
    </View>
 <Image source={{ uri: photo }} style={{ width:116, height: 116, borderRadius: 250, borderWidth: 1, borderColor: "#F4F4F4"}} />
      <Button 
      title="Choose Image" 
      onPress={() => {
           navigation.navigate('CameraScreen')}}
      style={styles.button}
      buttonStyle={{backgroundColor: 'white', fontSize: 18, padding: Platform.OS === 'ios' ? 15 : 9, width: Platform.OS === 'ios' ? 150 : 120, borderRadius: 30, fontFamily: 'Poppins_700Bold'}} 
      titleStyle={{fontSize: Platform.OS === 'ios' ? 16 : 12, fontFamily: 'Poppins_500Medium', color: '#F68951' }}
 />
 <Input 
      containerStyle={{
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom:Platform.OS === 'ios' ? -10 : -16,
      }}
      inputStyle={{
          fontSize: Platform.OS === 'ios' ? 13 : 12,
          fontFamily: 'Poppins_500Medium'
        }}
        inputContainerStyle={{
          backgroundColor: "rgba(247, 247, 247, 0.7)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 10,
          padding: 5,
          paddingLeft:10,
          height: Platform.OS === 'ios' ? 52 : 42
        }}
        value={state.prof} 
        // onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
      />
 <Input 
      containerStyle={{
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom:Platform.OS === 'ios' ? -10 : -16,
      }}
      inputStyle={{
          fontSize: Platform.OS === 'ios' ? 13 : 12,
          fontFamily: 'Poppins_500Medium'
        }}
        inputContainerStyle={{
          backgroundColor: "rgba(247, 247, 247, 0.7)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 10,
          padding: 5,
          paddingLeft:10,
          height: Platform.OS === 'ios' ? 52 : 42
        }}
        value={state.email} 
        // onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
      />
    </View>
      <Text style={styles.cp}> Change Password </Text>
      <View >

      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
    
      
    
 


  
      <Input
      containerStyle={{
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom:-10,
        marginTop: 10
      }} 
      inputStyle={{
        fontSize: 14,
        fontWeight: "500"
      }}
      inputContainerStyle={{
          backgroundColor: "rgba(247, 247, 247, 0.7)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 10,
          padding: 5,
          paddingLeft:10
        }}
        secureTextEntry
        value={password} 
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false} 
        placeholder="Old Password"
      
      />      
      <Input 
      containerStyle={{
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom:-10
      }}
      inputStyle={{
        fontSize: 14,
        fontWeight: "500"
      }}
      inputContainerStyle={{
          backgroundColor: "rgba(247, 247, 247, 0.7)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 10,
          padding: 5,
          paddingLeft:10
        }}
        secureTextEntry
         
        value={newpassword} 
        onChangeText={setNewpassword}
        autoCapitalize="none"
        autoCorrect={false} 
        placeholder="New Password"
        placeholderStyle={{ fontSize: 20 }}
        
      />

      <Input 
      containerStyle={{
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom:-10
      }}
      inputStyle={{
        fontSize: 14,
        fontWeight: "500"
      }}
      inputContainerStyle={{
          backgroundColor: "rgba(247, 247, 247, 0.7)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 10,
          padding: 5,
          paddingLeft:10
        }}
        secureTextEntry
         
        value={confirmPassword} 
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        autoCorrect={false} 
        placeholder="Confirm Password"
        placeholderStyle={{ fontSize: 20 }}
        
      />

      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      
    

      <Spacer>
        <Button 
          style={styles.button1} 
          buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} 
          title="Reset Password"
          onPress={() => {
            if (password === newpassword || newpassword != confirmPassword)  {
                   alert("Try again");
              } else reset({ email, newpassword }),
              navigation.navigate('Signin')}}
              // use email to find user id and update the password
        />
      </Spacer>
            
        
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cancelSaveBox: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    marginLeft:200,
  },
  cancelSave: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    fontWeight: "700",
    marginLeft:20,
    color: '#F68951'
  },
  container: {
     // flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    // width: 200
    marginTop:51
  },
  button: {
   fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#F68951'
  },
  cp: {
   fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 15
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
  },
  subheader: {
    fontWeight: "800",
    marginLeft: 15,
    fontSize: 17,
    width: "35%"
  },
  button1: {
     
    justifyContent: 'center',
      alignItems: 'center'
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
    
  // },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default Upload;



                