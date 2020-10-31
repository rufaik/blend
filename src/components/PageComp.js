import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { Constants } from 'expo';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { Input, Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';



const FirstRoute = ({ navigation }) => (
  <View style={styles.container}>
  <View style={styles.card}>
			<Text style={styles.log}>Preparation Time</Text>
			<Text style={styles.logG}> 6 Minutes</Text>
			<Text style={styles.log}>Cooking Time</Text>
			<Text style={styles.logG}>10 Minutes</Text>
			<Text style={styles.log}>Number of Servings</Text>
			<Text style={styles.logG}> 4 people</Text>
</View>	
  <View style={styles.card}>
			<Text style={styles.log}>20 Minute Pasta Carbonara. Pasta coated in a thick egg sauce with bacon and parmesan cheese. 
A super easy weeknight dinner!
			</Text>
			
</View>	
	<View style={styles.card}>
			<Text style={styles.log}>Nutritional Info (per serving)</Text>
			<Text style={styles.logG}>Calories</Text>
			<Text style={styles.logG}>Fat</Text>
			<Text style={styles.logG}>Fibre</Text>
			<Text style={styles.logG}>Protein</Text>
	</View>	

	<Button 
			style={styles.button} 
			buttonStyle={{ backgroundColor: '#F68951',padding: 15, width: '90%', borderRadius: 30}} 
			title="Cook This Dish"
			onPress={() => {navigation.navigate('Diet')}}
			titleStyle={{
				fontSize:14,
				fontFamily:'Poppins_600SemiBold'
			}}
		/>
</View>
);
const SecondRoute = () => (
  <View style={styles.container} >
  	<Text style={styles.header} h1>Servings: 4</Text>
  	  <View style={styles.card}>
			<Text style={styles.log}>Cucumber</Text>
			<Text style={styles.logG}>250g, Thinly sliced</Text>
			<Text style={styles.log}>Cherry Tomatoes</Text>
			<Text style={styles.logG}>300g</Text>
			<Text style={styles.log}>Garlic</Text>
			<Text style={styles.logG}>3 cloves, minced</Text>
	</View>	
	<Button 
			style={styles.button} 
			buttonStyle={{ backgroundColor: '#F68951',padding: 15, width: '90%', borderRadius: 30}} 
			title="Cook This Dish"
			onPress={() => {navigation.navigate('TrackList')}}
			titleStyle={{
				fontSize:14,
				fontFamily:'Poppins_600SemiBold'
			}}
		/>
  </View>
);
const ThirdRoute = () => (
    <View style={styles.container}>
	<View style={styles.card}>
		<Text style={styles.logGg}>1. In a large pot of boiling salted water, cook pasta according to package instructions; reserve 1/2 cup water and drain well.</Text>

		<Text style={styles.logGg}>2. In a small bowl, whisk together eggs and Parmesan; set aside.</Text>

		<Text style={styles.logGg}>3. Heat a large skillet over medium high heat. Add bacon and cook until brown and crispy, about 6-8 minutes; reserve excess fat.</Text>

		<Text style={styles.logGg}>4. Stir in garlic until fragrant, about 1 minute. Reduce heat to low.</Text>

		<Text style={styles.logGg}>5. Working quickly, stir in pasta and egg mixture, and gently toss to combine; season with salt and pepper, to taste. Add reserved pasta water, one tablespoon at a time, until desired consistency is reached.</Text>

		<Text style={styles.logGg}>6. Serve immediately, garnished with parsley, if desired</Text>
	</View>	
	<Button 
			style={styles.button} 
			buttonStyle={{ backgroundColor: '#F68951',padding: 15, width: '90%', borderRadius: 30}} 
			title="Cook This Dish"
			onPress={() => {navigation.navigate('TrackList')}}
			titleStyle={{
				fontSize:14,
				fontFamily:'Poppins_600SemiBold'
			}}
		/>
</View>
);

const PageComp = (props) => {
 

  handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    console.log("three", props.navigationState.routes)

    return (
    	<View>
    	<Text>
    	Hey bab!
    	</Text>
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 183
                ),
              })
            ),
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 183
                ),
              })
            ),
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 183
                ),
              })
            )
          );

             const backgroundColor = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 246 : 255
                ),
              })
            ),
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 137 : 255
                ),
              })
            ),
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 81 : 255
                ),
              })
            )
          );



          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ padding: 5, fontFamily:'Poppins_500Medium', paddingHorizontal: 20, margin: 3, borderRadius: 16, overflow:"hidden", color, backgroundColor }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });


    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop:15
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',

  },
  card:{
  	backgroundColor:"#F7F7F7",
  	borderRadius: 10,
    marginHorizontal: 17,
    marginTop:10,
    padding: 10,
    paddingLeft:15,
  },
  log: {
	fontSize: 14,
	fontWeight: "500",
	fontFamily: 'Poppins_600SemiBold',
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
    logGg: {
	lineHeight:21,
	marginBottom: 5,
	color: '#012243',
	fontFamily: 'Poppins_500Medium',
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 17,
    marginTop:10,
    fontFamily: 'Poppins_700Bold',
  },
  button: {
	justifyContent: 'center',
    alignItems: 'center',
    marginTop:24,
	},
});


export default PageComp;