import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation }) =>  {
  return (
    <>
      <Text style={{ fontSize: 48 }}> TrackListScreen</Text>
      <Button title="Go to Detail Page" onPress={() => navigation.push('TrackDetail')} />
    </>
  )
}

const style = StyleSheet.create({})

export default TrackListScreen;