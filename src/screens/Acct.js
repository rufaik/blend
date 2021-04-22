import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground, ScrollView, TouchableOpacity,FlatList, Image } from 'react-native';
import recipe from '../api/recipe'
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons'; 
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { Constants } from 'expo';
import { Prep, Directions, Picture, Nutrition1 } from './ResultsShowScreenDCopy'
import { Ingred1 } from './IngredTabScreen'
import NutritionInfo from '../components/NutritionInfo'
import AccountScreen, { ScreenOne } from './AccountScreen'
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
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const FirstRoute = (props) => {
  const showD = props.showD;

    
return(
  <View style={styles.container}>
  <ScreenOne />
</View>
)};


const SecondRoute = (props) => {
const showD = props.showD;


return (
  <View style={styles.container} >
  <ScreenOne />
  </View>
)};


const ThirdRoute  = (props) => {
const showD = props.showD;


return (
    <View style={styles.container}>
     <ScreenOne />
</View>
)};


    
export default class Acct extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'My recipes' },
      { key: 'second', title: 'Liked recipes' },
      { key: 'third', title: 'Recents' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View>
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
              key={route.key}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ padding: 5, fontFamily:'Poppins_500Medium', paddingHorizontal: 19, margin: 3, borderRadius: 16, overflow:"hidden", color, backgroundColor }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
      </View>
    );
  };

  render() {
    // const showD = this.props.navigation.getParam("showD");
    // console.log("loopo",this.props)

    const renderScene = ({ route }) => {
      switch (route.key) {
        case "first":
          return <FirstRoute  />;
        case "second":
          return <SecondRoute  />;
        case "third":
          return <ThirdRoute  />;
        default:
          return null;
      }
    };

    return (
      <ScrollView>
    
      <TouchableOpacity onPress={() => {
        console.log("hey")
      this.props.navigation.navigate('Settings')}}>
            <Text style={styles.sub}> Settings </Text>
      </TouchableOpacity>

       <AccountScreen />

        <TabView
          navigationState={this.state}
          renderScene={renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
        />
    </ScrollView>
    );
  }
}




Acct.navigationOptions = {
  title: 'TrackList',
  headerShown: true
};

const styles = StyleSheet.create({
  leftIcon:{
    position: 'absolute',
    left:20,
    paddingTop:38,
  },
  navHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:35,
  },
  titleHeader:{
  fontSize: 20,
  fontWeight: "500",
  fontFamily: 'Poppins_700Bold',
 },
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
  sub: {
  fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    fontWeight: "700",
    position: "relative",
    marginLeft:"80%",
    color: '#F68951',
    marginTop:51,
    zIndex: 2 
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