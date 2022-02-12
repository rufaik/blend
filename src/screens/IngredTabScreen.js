import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, ScrollView, TouchableOpacity, Button,FlatList, Image } from 'react-native';
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
import SearchBar from '../components/SearchBar';
import ResultsListE from '../components/ResultsListE'
import ingred from '../api/ingred';
import Item from '../components/ResultsDetailF'
import spoon from '../api/spoon';
import { appID, appKey, spoonKey } from '../api/keys';
import edamam from '../api/edamam';




export const Ingred1 = ({ onSubmit, navigation, showD }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [resultsd, setResultsd] = useState('');
  const [ term, setTerm] = useState('');
  const [ item, setResults ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')


  // const searchApi = async (searchTerm) => {
  //   try {
  //     const response = await ingred.get('/', {
  //       params: {
  //           number: 3,
  //           query: `${searchTerm}`
  //       }
  //      });
  //      setResults(response.data)
       
  //   } catch (err) {
  //     seterrorMessage('Something went wrong')
  //   } 
  //   };

  // //     useEffect(() => {
  // //   searchApi(newList,",")
  // // }, [])

  //   useEffect(() => {
  //   searchApi('tomato')
  // }, []);



	const searchApi123 = async (showD) => {
			const response1 = await spoon.get(`/`,{
				params: {
		    		apiKey: spoonKey,
   					url: showD
				}
			 });
			 setResultsd(response1.data)
			 console.log("resultsd.extendedIngredients.nameClean", response1.data.extendedIngredients.nameClean)
			
		}

 

	 useEffect(() => {
    searchApi123(showD)
  }, []);



// const searchApi = async (showD) => {
//     console.log("working", showD);
//     const response = await nutrition.get(`${showD}/ingredientWidget.json`);
//     setResults(response.data.ingredients);
//      console.log("worki1ng", response.data.ingredients);
//   };

// 	 useEffect(() => {
//     searchApi(showD);
//   }, []);






  const addToList = item => {
    //copy the selected item array
    let updatedItems = itemList;
    //use array.push to add it to the array
    updatedItems.push(item.id);

    setItemList(updatedItems);
    setSelectedId(item.id);
  };

  const removeFromList = item => {
    //copy the slected item array
    let updatedItems = itemList;
    //find the current item in the array
    let itemIndexToRemove = updatedItems.indexOf(item.id);
    //use splice to remove the item from list
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    updatedItems.splice(itemIndexToRemove, 1);

    setItemList(updatedItems);
    //this is weird but it makes it work - I can't unselect, so made a non-existing id
    setSelectedId(item.id + "____");
  };

  const renderItem = ({ item }) => {
    //check if item is in the list - if so, it's selected
    const backgroundColor = itemList.indexOf(item.id) > -1 ? "white" : "#F4F4F4"
    const shadowOpacity = itemList.indexOf(item.id) > -1 ? 0.2 : 0
    // const borderColor = item.id === selectedId ? "#14D08C" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() =>
          itemList.indexOf(item.id) > -1
            ? removeFromList(item)
            : addToList(item)
        }
        style={{ backgroundColor, shadowOpacity }}
      />
    ); 
  };

return(
	<View >
	<Text style={styles.header} h1>Servings: {resultsd.servings}</Text>
      
      <ScrollView style={styles.card} >
      <ResultsListE 
      title="hey"
      item={resultsd.extendedIngredients}

      />
     </ScrollView>
</View>
  )};
        













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

	 // useEffect(() => {
  //    searchApii(showD)
  // }, []);

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
			<Text style={styles.log}>Cooking Time</Text>
			<Text style={styles.logG}>{resultsd.readyInMinutes} Minutes</Text>
			<Text style={styles.log}>Number of Servings</Text>
			<Text style={styles.logG}>{resultsd.servings}</Text>
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

 

	 // useEffect(() => {
  //   searchApii(showD)
  // }, []);

	if(!resultsd) {
		return null;
	}


 
	return(
      <View>
	
		<View style={styles.item}>
				<ImageBackground 
		    	source={{ uri: resultsd.image }} 
		    	style={styles.image} 
		    	imageStyle={{ borderRadius: 14, opacity: 1.2}}
			/> 
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
				<Text style={styles.icon}> {resultsd.readyInMinutes}mins</Text>
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
	   			<Text style={styles.by}> by <Text style={{color: 'black'}}>{resultsd.sourceName}</Text></Text>
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
			console.log("wise", responsep)
		}

 

	 // useEffect(() => {
  //   searchApii(showD)
  // }, []);

	if(!resultsd) {
		return null;
	}


 
	return(
		<View>
      		<View style={styles.card}>
				<Text style={styles.log}>Preparation Time</Text>
				<Text style={styles.logG}> {resultsd.preparationMinutes} Minutes</Text>
				<Text style={styles.log}>Cooking Time</Text>
				<Text style={styles.logG}>{resultsd.cookingMinutes} Minutes</Text>
				<Text style={styles.log}>Number of Servings</Text>
				<Text style={styles.logG}>{resultsd.servings}</Text>
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
			
		}

 

	 // useEffect(() => {
  //   searchApii(showD)
  // }, []);

	if(!resultsd) {
		return null;
	}

	console.log("last", showD)
 
	return(
      <View style={styles.card}>
			<Text style={styles.log}>INSTRUCTIONS</Text>
					<Text style={styles.log}> Step {resultsd.analyzedInstructions[0].steps[0].number}:{resultsd.analyzedInstructions[0].steps[0].step} </Text>
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
    const responsep = await nutrition.get(`${showD}/nutritionWidget.json`);
    setResultsd(responsep);

    const spaceProtein = responsep.data.good.filter((x) => x.title === "Protein");
    setProtein(spaceProtein);
    if(protein && protein[0]){
      console.log("space", protein[0].amount);
  }
    const spaceFiber = responsep.data.good.filter((x) => x.title === "Fiber");
    setFiber(spaceFiber);
    if(fiber && fiber[0]){
      console.log("space", fiber[0].amount);
	}
    const spaceFat = responsep.data.bad.filter((x) => x.title === "Saturated Fat");
    setFat(spaceFat);
    if(sfat && sfat[0]){
      console.log("space", sfat[0].amount);
     }
    const spaceSodium = responsep.data.bad.filter((x) => x.title === "Sodium");
    setSodium(spaceSodium);
    if(sodium && sodium[0]){
      console.log("space", sodium[0].amount);
    }

    const spaceSugar = responsep.data.bad.filter((x) => x.title === "Sugar");
    setSugar(spaceSugar);
    if(sugar && sugar[0]){
      console.log("space", sugar[0].amount);
    }
  };

	 // useEffect(() => {
  //   searchApiN(showD);
  // }, []);




	if(!resultsd) {
		return <Text style={styles.header}>Wrong!</Text>;
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
	header: {
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 17,
    marginTop:10,
    fontFamily: 'Poppins_700Bold',
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
  	 marginLeft:130,
  	
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
