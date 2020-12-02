import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Button,FlatList, Image } from 'react-native';
import recipe from '../api/recipe';
import nutrition from '../api/nutrition';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons'; 
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Time = ({met, style}) => {
	if (met > 60) {
		let num = met
	const hours = Math.floor(num / 60);  
  	const minutes = num % 60;
  		return (
  		  			<Text style={style}>{`${hours}h${minutes}m`}</Text>)
	} else {
		return (<Text style={style}> {met}mins</Text>)
	}}


export const Copy = ({ navigation, showD }) => {
	// const showD = navigation.getParam('showD');
	const [resultsd, setResultsd] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSelected, setSelection] = useState(false);

	const searchApii = async (showD) => {
		c
			const responsep = await recipe.get('/', {
				params: {
		    		ids: `${showD}`
				}
			 });
			 setResultsd(responsep.data[0])
			
		}

	 useEffect(() => {
     searchApii(showD)
  }, []);



	if(!resultsd) {
		return null;
	}

 
	return(
		<View>
		<Spacer />
		<View style={styles.item}>
				<ImageBackground 
		    	source={{ uri: resultsd.image }} 
		    	style={styles.image} 
		    	imageStyle={{ borderRadius: 14}}
			/> 
		    <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
		            <Text
		              style={{
		                fontSize: 20,
		                fontWeight: "600",
		                color: 'white',
		                
		              }}>
		             {resultsd.title}
		            </Text>
		    </View>
        </View>
  		<TouchableOpacity 
  			style={styles.balcony}
  			value={isSelected}
  			onPress={setSelection}>
	   			<Text> by: {resultsd.sourceName}</Text>
	   				{isSelected 
				   	? <FontAwesome name="heart" size={24} color="black" />
				   	: <FontAwesome name="heart-o" size={24} color="black" />
				   	}
		</TouchableOpacity>
		<Image style={styles.imageline} source={require('../images/line.png')}/>

{/*Prep time blurb*/}

		<View style={styles.card}>
			<Text style={styles.log}>Prepppparation Time</Text>
			<Text style={styles.logG}> {resultsd.preparationMinutes} Minutes</Text>
			<Time 
				style={styles.logG}
				met={resultsd.preparationMinutes}
			/>
			<Text style={styles.log}>Cooking Time</Text>
			<Text style={styles.logG}>{resultsd.readyInMinutes} Minutes</Text>
			<Text style={styles.log}>Number of Servings</Text>
			<Text style={styles.logG}>{resultsd.servings} people</Text>
		</View>
		<Spacer />

{/*DIRECTIONS blurb*/}

		<View style={styles.card}>
			<Text style={styles.log}>INSTRUCTIONS</Text>
					<Text style={styles.log}> Step {resultsd.analyzedInstructions[0].steps[0].number}:{resultsd.analyzedInstructions[0].steps[0].step} </Text>
		</View>		 
	

</View>
		);

	
};

export const Picture = ({ navigation, showD }) => {
	// const showD = navigation.getParam('showD');
	const [resultsd, setResultsd] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSelected, setSelection] = useState(false);

	
	const searchApii = async (showD) => {

			const responsep = await recipe.get('/', {
				params: {
		    		ids: `${showD}`
				}
			 });
			 setResultsd(responsep.data[0])
		
		}

 

	 useEffect(() => {
    searchApii(showD)
  }, []);

	if(!resultsd) {
		return null;
	}


 
	return(
      <View>
	
		<View style={styles.item}>
				<ImageBackground 
		    	source={{ uri: resultsd.image }} 
		    	style={styles.image} 
		    	imageStyle={{ borderRadius: 14, opacity: 1.2}}>
		    	<View style={styles.child1}>
		    	</View>
			</ImageBackground> 
		    <View style={{ position: 'absolute', bottom:-8, left: 10 }}>
		            <Text
		              style={{
		                fontSize: 20,
		                fontWeight: "600",
		                color: 'white',
		                
		              }}>
		             {resultsd.title}
		            </Text>
		            <View style={styles.time} >
				<MaterialIcons  name="access-time" size={15} color="white" />
				<Time 
				style={styles.icon}
				met={resultsd.readyInMinutes}
			/>
				<Entypo name="dot-single" size={24} color="white" />
				<FontAwesome name="heart-o" size={15} color="white" />
				<Text style={styles.icon}> {resultsd.aggregateLikes}</Text>
			</View>
		    </View>
        </View>
  		<TouchableOpacity 
  			style={styles.balcony}
  			value={isSelected}
  			onPress={setSelection}>
	   			<Text style={styles.by}> by </Text>
	   			<Text style={styles.source}>{resultsd.sourceName}</Text>
	   			<View style={styles.rightBalcony}>
	   			<Image source={require('../images/myfit.png')} style={styles.myfit} />
	   			<Image source={require('../images/share1.png')} style={{marginHorizontal: 17, width:27, height: 27}} />
	   				{isSelected 
				   	? <FontAwesome name="heart" size={24} color="black" />
				   	: <FontAwesome name="heart-o" size={24} color="black" />
				   	}
				 </View>
		</TouchableOpacity>
	</View>

		);

	
};



export const Prep = ({ navigation, showD }) => {
	// const showD = navigation.getParam('showD');
	const [resultsd, setResultsd] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSelected, setSelection] = useState(false);

	
	const searchApii = async (showD) => {
			const responsep = await recipe.get('/', {
				params: {
		    		ids: `${showD}`
				}
			 });
			 setResultsd(responsep.data[0])
			// console.log("wise", responsep.data[0].analyzedInstructions[0])
		}

 

	 useEffect(() => {
    searchApii(showD)
  }, []);

	if(!resultsd) {
		return null;
	}


 
	return(
		<View>
      		<View style={styles.card}>
				<Text style={styles.log}>Preparation Time</Text>
				<Time 
					style={styles.logG}
					met={resultsd.preparationMinutes}
				/>
				<Text style={styles.log}>Cooking Time</Text>
				<Time 
					style={styles.logG}
					met={resultsd.cookingMinutes}
				/>
				<Text style={styles.log}>Number of Servings</Text>
				<Text style={styles.logG}>{resultsd.servings} people</Text>
			</View>
{/*			<View style={styles.card}>
				<Text style={styles.log}>

				20 Minute Pasta Carbonara. Pasta coated in a thick egg sauce with bacon and parmesan cheese. 
				A super easy weeknight dinner!
				</Text>
			</View>	*/}
		</View>	
		);

	
};



export const Directions = ({ navigation, showD }) => {
	// const showD = navigation.getParam('showD');
	const [resultsd, setResultsd] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSelected, setSelection] = useState(false);

	
	const searchApii = async (showD) => {
			const responsep = await recipe.get('/', {
				params: {
		    		ids: `${showD}`
				}
			 });
			 setResultsd(responsep.data[0])
			 // console.log('DIRECTIONS', responsep.data[0].analyzedInstructions[0])
			
		}

 

	 useEffect(() => {
    searchApii(showD)
  }, []);

	if(!resultsd) {
		return null;
	}

	// console.log("last", showD)
 
	return(
      <View style={styles.card}>

      	{resultsd.analyzedInstructions[0] ? ( <>
				{resultsd.analyzedInstructions[0].steps[0] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[0].number}. {resultsd.analyzedInstructions[0].steps[0].step} </Text>
					</>
					) : (
            			<Text style={styles.log}>This recipe is so easy! No instructions necessary!</Text>
          			)}
			
				{resultsd.analyzedInstructions[0].steps[1] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[1].number}. {resultsd.analyzedInstructions[0].steps[1].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[2] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[2].number}. {resultsd.analyzedInstructions[0].steps[2].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[3] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[3].number}. {resultsd.analyzedInstructions[0].steps[3].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[4] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[4].number}. {resultsd.analyzedInstructions[0].steps[4].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[5] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[5].number}. {resultsd.analyzedInstructions[0].steps[5].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[6] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[6].number}. {resultsd.analyzedInstructions[0].steps[6].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[7] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[7].number}. {resultsd.analyzedInstructions[0].steps[7].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[8] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[8].number}. {resultsd.analyzedInstructions[0].steps[8].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[9] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[9].number}. {resultsd.analyzedInstructions[0].steps[9].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[10] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[10].number}. {resultsd.analyzedInstructions[0].steps[10].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[11] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[11].number}. {resultsd.analyzedInstructions[0].steps[11].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[12] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[12].number}. {resultsd.analyzedInstructions[0].steps[12].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[13] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[13].number}. {resultsd.analyzedInstructions[0].steps[13].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[14] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[14].number}. {resultsd.analyzedInstructions[0].steps[14].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[15] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[15].number}. {resultsd.analyzedInstructions[0].steps[15].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[16] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[16].number}. {resultsd.analyzedInstructions[0].steps[16].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[17] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[17].number}. {resultsd.analyzedInstructions[0].steps[17].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[18] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[18].number}. {resultsd.analyzedInstructions[0].steps[18].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[19] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[19].number}. {resultsd.analyzedInstructions[0].steps[19].step} </Text>
					</>
					) : null}
				{resultsd.analyzedInstructions[0].steps[20] ? (
					<>
						<Text style={styles.logGg}>{resultsd.analyzedInstructions[0].steps[20].number}. {resultsd.analyzedInstructions[0].steps[20].step} </Text>
					</>
					) : null}
					</>
					) : <Text style={styles.log}>This recipe is so easy! No instructions necessary!</Text>}
		</View>	

		);

	
};


export const Nutrition1 = ({ navigation, showD }) => {
	// const showD = navigation.getParam('showD');
	const [resultsd, setResultsd] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSelected, setSelection] = useState(false);
	const [protein, setProtein] = useState('');
	const [fiber, setFiber] = useState('');
	const [sodium, setSodium] = useState('');
	const [sfat, setFat] = useState('');
	const [sugar, setSugar] = useState('');
	
	// const searchApiN = async (showD) => {
	// 		console.log("working", showD)
	// 		const responsep =  await nutrition.get(`${showD}/nutritionWidget.json`);
	// 		setResultsd(responsep)
	// 		const space = await responsep.data.good.filter(x => x.title === 'Protein');
	// 		setNut(space)
	// 		console.log(space)
	// 		console.log("space", nut[0].amount)
	// 	}



	 // useEffect(() => {
  //   searchApiN(showD)
  // }, []);

// const searchApiN = async (showD) => {
//     console.log("working", showD);
//     const responsep = await nutrition.get(`${showD}/nutritionWidget.json`);
//     setResultsd(responsep);
//     const space = responsep.data.good.filter((x) => x.title === "Protein");
//     setNut(space);
//     // console.log("space", nut[0].amount);
//   };

  const searchApiN = async (showD) => {
    console.log("working", showD);
    const [alist, setAlist] = useState(["american", "mexican"]);

    const responsep = await nutrition.get(`${showD}/nutritionWidget.json`);
    setResultsd(responsep);

    const spaceProtein = responsep.data.good.filter((x) => x.title === "Protein");
    setProtein(spaceProtein);
  //   if(protein && protein[0]){
  //     console.log("space", protein[0].amount);
  // }
    const spaceFiber = responsep.data.good.filter((x) => x.title === "Fiber");
    setFiber(spaceFiber);
 //    if(fiber && fiber[0]){
 //      console.log("space", fiber[0].amount);
	// }
    const spaceFat = responsep.data.bad.filter((x) => x.title === "Saturated Fat");
    setFat(spaceFat);
    // if(sfat && sfat[0]){
    //   console.log("space", sfat[0].amount);
    //  }
    const spaceSodium = responsep.data.bad.filter((x) => x.title === "Sodium");
    setSodium(spaceSodium);
    // if(sodium && sodium[0]){
    //   console.log("space", sodium[0].amount);
    // }

    const spaceSugar = responsep.data.bad.filter((x) => x.title === "Sugar");
    setSugar(spaceSugar);
    // if(sugar && sugar[0]){
    //   console.log("space", sugar[0].amount);
    // }
  };

	 useEffect(() => {
    searchApiN(showD);
  }, []);




	if(!resultsd) {
		return null;
	}


	
 
	return(
		<View>
      		<View style={styles.card}>
				
				<Text style={styles.log1}>Nutritional Info <Text style={styles.logTitle}>(per serving)</Text></Text>
				<Text style={styles.logG}>Calories: <Text style={{ color: 'black'}}>{resultsd.data.calories} kcal</Text></Text>
				<Text style={{ marginBottom: 5 }}><Text style={styles.logG}>Fat: <Text style={{ color: 'black'}}>{resultsd.data.fat} </Text></Text>
				{sfat && sfat[0] ? (
            			<>
              				<Text style={styles.logG}>  (of which saturates: <Text style={{ color: 'black'}}>{sfat[0].amount}</Text>)</Text>
            			</>
         				) : (
            				<Text>Loading...</Text>
          			)}</Text>
          		<Text style={{ marginBottom: 5 }}><Text style={styles.logG}>Carbs: <Text style={{ color: 'black'}}>{resultsd.data.carbs} </Text></Text>
          			{sugar && sugar[0] ? (
            			<>
              				<Text style={styles.logG}>  (of which sugars: <Text style={{ color: 'black'}}>{sugar[0].amount}</Text>)</Text>
            			</>
         				) : (
            				<Text>Loading...</Text>
          			)}</Text>
				  {protein && protein[0] ? (
            			<>
              				<Text style={styles.logG}>Protein: <Text style={{ color: 'black'}}>{protein[0].amount}</Text></Text>
            			</>
         				) : (
            				<Text>Loading...</Text>
          			)}
				  {fiber && fiber[0] ? (
            			<>
              				<Text style={styles.logG}>Fiber: <Text style={{ color: 'black'}}>{fiber[0].amount}</Text></Text>
            			</>
         				) : (
            				<Text>Loading...</Text>
          			)}
				  
				  {sodium && sodium[0] ? (
            			<>
              				<Text style={styles.logG}>Salt: <Text style={{ color: 'black'}}>{sodium[0].amount}</Text></Text>
            			</>
         				) : (
            				<Text>Loading...</Text>
          			)}
				  
				
			</View>

		</View>	
		);

	
};


const styles = StyleSheet.create({
	logGg: {
	lineHeight:21,
	marginBottom: 5,
	color: '#012243',
	fontFamily: 'Poppins_500Medium',
  },
	myfit:{
		width: 24,
		height:24,
		borderRadius: 5
	},
	by:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
	color: '#ACACAC',
	},
	source:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
	color: 'black',
	width: "70%", 
	flexWrap: 'wrap'
	},
	imageline: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
   alignSelf: 'center',   
  },
	card:{
  	backgroundColor:"#F7F7F7",
  	borderRadius: 10,
    fontFamily: 'Poppins_600SemiBold',
    margin: 17,
    padding: 10,
    paddingLeft:15,

  },
	log: {
	fontSize: 14,
	fontWeight: "500",
	fontFamily: 'Poppins_600SemiBold',
	lineHeight:22
	},
	log1: {
	fontSize: 17,
	fontWeight: "500",
	fontFamily: 'Poppins_600SemiBold',
	lineHeight:22,
	marginBottom: 7
	},
	logTitle: {
	fontSize: 14,
	fontWeight: "500",
	fontFamily: 'Poppins_500Medium',
	lineHeight:22
	},
	logG: {
	fontSize: 14,
	fontWeight: "500",
	fontFamily: 'Poppins_600SemiBold',
	color: '#ACACAC',
	lineHeight:22,
	marginBottom: 5
	},
 child: {
    flex: 1,
   width: "100%",
    height: 210,
   borderRadius: 14,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    fontFamily: 'Poppins_600SemiBold',

  },
  child1: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 14,
  },
  image: {
  	opacity: 1.9,
    width: "100%",
    height: 210,
    borderRadius: 14,
    opacity: 1.9
  },
  item: {
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginTop:15 ,
  },
  balcony: {
    fontFamily: 'Poppins_600SemiBold',
  	flexDirection: "row",
  	 // justifyContent: 'space-between',
  	 marginTop:10,
  	 marginHorizontal:10,
  	 paddingRight:20,
  	 paddingBottom: 11,
  	 borderBottomColor: "#E5E5E5",
  	 borderBottomWidth: 1,
  },
  rightBalcony: {
    fontFamily: 'Poppins_600SemiBold',
  	flexDirection: "row",
  	 alignItems: 'center',
  	 position: "absolute",
  	 right: 15
  	
  },
  time:{
	 flexDirection: "row",
	 alignItems: "center",
     fontFamily: 'Poppins_600SemiBold',
	 paddingBottom: 15
	},
  icon:{
	 color: "white",
	 fontFamily: 'Poppins_600SemiBold',
	}
});
