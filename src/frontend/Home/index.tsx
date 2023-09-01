import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  useEffect(() => {
    AsyncStorage.getItem('registrationStatus').then((status) => { console.log("hey:",status)})
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home