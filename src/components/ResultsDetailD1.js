import React, { useEffect, useState } from 'react';
import { Text, Image, ImageBackground, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import recipe from '../api/recipe';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'



const ResultsDetailD = ({results2}) => {
const [resultsA, setResultsA] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	 // const id = results2.id
	 // console.log("ResultsDetailD1")
	
	// const searchApii = async (id) => {

	// 		const responsep = await recipe.get('/', {
	// 			params: {
	// 	    		ids: `${id}`
	// 			}
	// 		 });
	// 		 setResultsA(responsep.data[0])
		
	// 	}

	const Time = () => {
	if (results2.recipe.totalTime > 60) {
		let num = results2.recipe.totalTime
	const hours = Math.floor(num / 60);  
  	const minutes = num % 60;
  		return (
  		  			<Text style={styles.icon}>{`${hours}h${minutes}m`}</Text>)
	} else if (results2.recipe.totalTime === 0) {
		return (<Text style={styles.icon}> Quick </Text>)

	 } else {
		return (<Text style={styles.icon}> {results2.recipe.totalTime}mins</Text>)
	}}

 

	//  useEffect(() => {
 //    searchApii(id)
 //  }, []);

	// if(!resultsA) {
	// 	return null;
	// }


 
	

	return(
		<View style= {styles.container} >
		<View>
			<ImageBackground 
			style= {styles.image} 
			source={{ uri: results2.recipe.image }}
			imageStyle={{ borderRadius: 14}}
			/>
			<View style={styles.child}>

          </View>
          <View style={{ position: 'absolute', bottom: 10, left: 10, }}>
			 <View style={styles.time} >
			<Text 
				style={{
                fontSize: 15,
                fontWeight: "600",
                color: 'white',
				fontFamily: 'Poppins_600SemiBold',

              }}>
              {results2.recipe.label}
            </Text>
            <View style={styles.box}>
        	<Entypo name="dot-single" size={20} color="white" />
            <MaterialIcons  name="access-time" size={13} color="white" style={{ paddingTop: 4 }} />
			<Time />
			</View>
			</View>
             </View>
            </View>

      
			
		</View>
		);
};

const styles = StyleSheet.create({
	container:{
		borderRadius: 20,
    	marginVertical: 8,
    	marginHorizontal: 16,
		marginLeft: 15,
		width: 289,
		fontFamily: 'Poppins_600SemiBold',
		},
	image: {
    	opacity: 1.9,
		width: 289,
		height: 151,
		borderRadius: 14,
		marginBottom: 5
	},
	name: {
		fontWeight: 'bold',
		flexWrap: 'wrap',
		fontFamily: 'Poppins_600SemiBold',
	},
	child: {
    flex: 1,
    width: 289,
	height: 151,
	borderRadius: 14,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  icon:{
  	color: "white",
  	paddingTop: 2,
  	fontFamily: 'Poppins_500Medium',
  	fontSize: 12
  },
  time:{
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 5,
		flexWrap: 'wrap',
		paddingRight: 2,
		fontFamily: 'Poppins_600SemiBold',
	},
	box:{
		flexDirection: "row",
	}

});

export default ResultsDetailD;



// <TouchableOpacity onPress={onPress} style={[styles.item, style]}>

//     <ImageBackground 
//     	source={{ uri: item.imageUrl }} 
//     	style={styles.image} 
//     	imageStyle={{ borderRadius: 14}}
//     /> 
//     <View style={styles.child}>

//           </View>
     
//     <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontWeight: "600",
//                 color: 'white',
                
//               }}>
//               {item.id}
//             </Text>
//           </View>

// dots: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent:'center'

//   },
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0
//   },
//   item: {
//     borderRadius: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderWidth: 5
//   },
//   title: {
//     fontSize: 32
//   },
//   image: {
//     width: 170,
//     height: 120,
//     borderRadius: 14,
//     opacity: 1.9
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "800",
//     marginLeft: 75,
//     fontFamily: 'Poppins_700Bold',
     
//   },
//   subheader: {
//     fontSize: 16,
//     marginLeft: 15,
//     marginBottom: 10,
//     fontFamily: 'Poppins_700Bold',

//   },
//   nextheader: {
//     fontSize: 17,
//     fontWeight: "700",
//     marginLeft: 10,
//     color: '#F68951',
//     fontFamily: 'Poppins_600SemiBold',
//   },
// button: {
// 	marginTop: 10,
// 	justifyContent: 'center',
//     alignItems: 'center'
// 	},
//   child: {
//     flex: 1,
//    width: 170,
//     height: 120,
//    borderRadius: 14,
//     position: 'absolute',
//     backgroundColor: 'rgba(0,0,0,0.3)'
//   }



