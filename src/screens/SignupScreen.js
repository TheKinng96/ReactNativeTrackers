import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'
import { AuthContext } from '../context/context'

const SignupScreen = ({ navigation }) => {
  const {signIn} = React.useContext(AuthContext)
  return <>
    <Text style={{ fontSize: 48 }}> SignupScreen</Text>
    <Button title="Sign In" onPress={() => signIn()} />
    <Button title="Go to signin" onPress={() => navigation.push("SignIn")}  /> 
  </>
}

const style = StyleSheet.create({})

export default SignupScreen;