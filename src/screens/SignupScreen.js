import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { AuthContext } from '../context/context'
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = React.useContext(AuthContext)
  
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
        <Button title="Sign Up" onPress={() => signIn()} />
        <Button title="Go to signin" onPress={() => navigation.push("SignIn")} /> 
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,

  }
})

export default SignupScreen;