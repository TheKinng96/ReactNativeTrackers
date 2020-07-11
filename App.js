import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {isLoggedIn ? (
          <>
          <Tab.Navigator>
            <Tab.Screen name="CreateTrack" component={TrackCreateScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
            <Stack.Navigator>
              <Stack.Screen name="TrackList" component={TrackListScreen} />
              <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
            </Stack.Navigator>
          </Tab.Navigator>
          </>
        ) : (
          <>
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="SignIn" component={SigninScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
