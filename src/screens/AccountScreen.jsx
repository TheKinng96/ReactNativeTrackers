import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'
import { AuthContext } from '../context/context';

const AccountScreen = () => {
  const {signOut} = React.useContext(AuthContext)

  return <>
    <Text style={{ fontSize: 48 }}> AccountScreen</Text>
    <Button title="Sign Out" onPress={() => signOut()}/>
  </>
}

const style = StyleSheet.create({})

export default AccountScreen;