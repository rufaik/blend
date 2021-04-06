import React, { useRef,  useState, useEffect, useContext } from 'react';
import { Camera } from 'expo-camera'
import { View, Text, TouchableOpacity } from "react-native";
import { AsyncStorage } from 'react-native';
import { Context  as TrackContext } from '../context/TrackContext'




 const CameraScreen = ({navigation}) => {
 	const [hasPermission, setHasPermission] = useState(null);
 	const { state } = useContext(TrackContext);
 	const cameraRef = useRef();

 	 useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

 	   if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

   const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
       AsyncStorage.setItem(`${state.userId}-photo`, photo.uri);
    }
  };

 	return (
 		 <TouchableOpacity onPress={snap}>
	 		<Camera 
	 		ref={(camera) => (cameraRef.current = camera)}
	 		style={{ width:"100%", height:"100%" }}
	 		type={Camera.Constants.Type.front}>

	 		</Camera>
	 	</TouchableOpacity>
 	)
 }

 export default CameraScreen;


