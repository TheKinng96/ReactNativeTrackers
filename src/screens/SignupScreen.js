import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signup } = useContext(AuthContext)
  
  return (
    <View style={style.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker </Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail} 
        autoCapitalize='none'
        autoCorrect={false}
        />
      <Spacer />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword} 
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
        />
      <Spacer>
        {state.errorMessage ? <Text style={style.error}>{state.errorMessage}</Text> : null}
        <Button title="Sign Up" onPress={() => signup({email,password})} />
        <Button title="Go to signin" onPress={() => navigation.push("SignIn")} /> 
      </Spacer>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
  error: {
    fontSize: 16,
    marginBottom: 16,
    color: 'red',
    marginLeft: 15


  }
})

export default SignupScreen;