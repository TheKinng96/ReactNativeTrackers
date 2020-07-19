import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'
import { AuthContext } from '../context/context';

const SigninScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <>
      <Text style={{ fontSize: 48 }}> SigninScreen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </>
  )
}

const style = StyleSheet.create({})

export default SigninScreen;