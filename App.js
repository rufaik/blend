import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Settings from './src/screens/Settings';
import Test from './src/screens/Test';
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
import Original from './src/screens/ResultsShowScreenD'
import PreferencesScreen from './src/screens/PreferencesScreen'
import ResetScreen from './src/screens/ResetScreen'
import Page from './src/screens/Page'
import SplashScreen1 from './src/screens/SplashScreen1'
import SplashScreen2 from './src/screens/SplashScreen2'
import SplashScreen3 from './src/screens/SplashScreen3'
import TrendingAll from './src/screens/TrendingAll'
import ForYouAll from './src/screens/ForYouAll'
import DietScreen from './src/screens/DietScreen'
import EditScreen from './src/screens/EditScreen'
import EditDScreen from './src/screens/EditDScreen'
import AccountScreen from './src/screens/AccountScreen'
import All from './src/screens/All'
import Acct from './src/screens/Acct'
import Upload from './src/screens/Upload'
import CameraScreen from './src/screens/CameraScreen'
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


const SwipeTabs = createMaterialTopTabNavigator(
  {
    Splash1: { screen: SplashScreen1},
    Splash2: { screen: SplashScreen2},
    Splash3: { screen: SplashScreen3}
  },
  {
    initialRouteName: "Splash1",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: false,
      style: { height: 0 }
    }
  }
);


const trackListFlow = createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
        ResultsShowA: ResultsShowScreenA,
        ResultsShowB: ResultsShowScreenB,
        Original: Original,
        All: All,
        TrendingAll: TrendingAll,
        ForYou:ForYouAll
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
        },
      {
    headerMode: 'splashFlow',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      title: 'TrackList',
  headerShown: true
      
    },
  })

const CameraFlow = createStackNavigator({
        Acct: Acct,
        Account: AccountScreen,
        Settings: Settings,
        Upload: Upload,
        CameraScreen: CameraScreen,
        },
      {
    headerMode: 'Camera',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      title: 'TrackList',
  headerShown: true
      
    },
  })


trackListFlow.navigationOptions = {
  title: 'Explore',
  tabBarIcon: <SimpleLineIcons name="compass" size={24} color="gray" />
}

const searchFlow = createStackNavigator({
      // Account: AccountScreen,
      Edit:EditScreen,
      EditD:EditDScreen,
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
  //  Home: PreferencesScreen,
  // Diet: DietScreen,
  // TrackList: TrackListScreen,
  // Account: AccountScreen,
  // Upload: Upload,
  SwipeTabs,
  splashFlow,
  ResolveAuth: ResolveAuthScreen,
  loginFlow: 
    createStackNavigator({

      Signup: SignupScreen,
      Reset: ResetScreen,
      Home: PreferencesScreen,
      Diet: DietScreen,
      Signin: SigninScreen
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
      searchFlow,
      Home: PreferencesScreen,
      Diet: DietScreen,
      CameraFlow
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