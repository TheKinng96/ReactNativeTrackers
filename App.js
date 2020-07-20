import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TrackStack = createStackNavigator();
const CreateStack = createStackNavigator();
const AccountStack = createStackNavigator();

const TrackScreenStack = () => (
  <TrackStack.Navigator>
    <TrackStack.Screen name="TrackList" component={TrackListScreen} options={{ title: 'Track List' }} />
    <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} options={{ title: 'Track Detail' }} />
  </TrackStack.Navigator>
)

const TrackCreateStack = () => (
  <CreateStack.Navigator>
    <CreateStack.Screen name="CreateTrack" component={TrackCreateScreen} options={{ title: 'Create Track' }} />
  </CreateStack.Navigator>
)

const AccountScreenStack = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="AccountPage" component={AccountScreen} option={{ title: 'Account Page'}} />
  </AccountStack.Navigator>
)

export default () => {
  
  return (
    <AuthProvider>
      <NavigationContainer ref={(navigator)=> {setNavigator(navigator)}}>
      {
        AsyncStorage.getItem('token') ? (
          <Tab.Navigator>
            <Tab.Screen name="Track" component={TrackScreenStack} />
            <Tab.Screen name="AccountPage" component={AccountScreenStack} />
            <Tab.Screen name="CreateTrack" component={TrackCreateStack} />
          </Tab.Navigator>
        ): (
          <Stack.Navigator options={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignupScreen} options={{ title: 'Sign Up' }} />
            <Stack.Screen name="SignIn" component={SigninScreen} options={{ title: 'Sign In' }} />
          </Stack.Navigator>
          )
      }
      </NavigationContainer>
    </AuthProvider>

  )
};
