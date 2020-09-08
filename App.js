import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { MaterialIcons } from '@expo/vector-icons';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import ResultsShowScreenA from './src/screens/ResultsShowScreenA'
import ResultsShowScreenB from './src/screens/ResultsShowScreenB'
import ResultsShowScreenD from './src/screens/ResultsShowScreenD'
import PreferencesScreen from './src/screens/PreferencesScreen'
import ResetScreen from './src/screens/ResetScreen'
import SplashScreen1 from './src/screens/SplashScreen1'
import SplashScreen2 from './src/screens/SplashScreen2'
import SplashScreen3 from './src/screens/SplashScreen3'
import DietScreen from './src/screens/DietScreen'
import All from './src/screens/All'
import { AppLoading } from "expo"
import { 
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic 
} from '@expo-google-fonts/poppins'
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const trackListFlow = createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
        ResultsShowA: ResultsShowScreenA,
        ResultsShowB: ResultsShowScreenB,
        ResultsShowD: ResultsShowScreenD,
        All: All
      },
      {
    headerMode: 'TrackList',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      
    },
  })

const splashFlow = createStackNavigator({
        Splash1: SplashScreen1,
        Splash2: SplashScreen2,
        Splash3: SplashScreen3
  })



trackListFlow.navigationOptions = {
  title: 'Explore',
  tabBarIcon: <SimpleLineIcons name="compass" size={24} color="gray" />
}

const searchFlow = createStackNavigator({
      Account: AccountScreen,
      ResultsShow: ResultsShowScreen
      },
      {
    headerMode: 'searchFlow',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      
    },
      })

searchFlow.navigationOptions = {
  title: 'Profile',
  tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={24} color="gray" />
}

const switchNavigator = createSwitchNavigator ({
  splashFlow,
  ResolveAuth: ResolveAuthScreen,
  loginFlow: 
    createStackNavigator({

      Signup: SignupScreen,
      Signin: SigninScreen,
      Reset: ResetScreen,
      Home: PreferencesScreen,
      Diet: DietScreen
      },
      {
    headerMode: 'loginFlow',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      
    },
    }),
  mainFlow: 

    createBottomTabNavigator({
      trackListFlow,
      searchFlow

  })
})

const App = createAppContainer(switchNavigator);



export default () => {
let [fontsLoaded, error] = useFonts({
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic 
})

if (!fontsLoaded) {
  return <AppLoading />
}



  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App 
          ref={(navigator) => { setNavigator(navigator) 
          }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
    );
};