import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'

const SignupScreen = ({navigation}) =>  {
  return <>
    <Text style={{ fontSize:48 }}> SignupScreen</Text>
    <Button title="Go to signin"onPress={() => navigation.navigate("Signin")}/> 
  </>
}

const style = StyleSheet.create({})

export default SignupScreen;