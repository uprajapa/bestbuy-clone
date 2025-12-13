import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false, title: 'Home' }} />
      <Tabs.Screen name="shop" options={{ headerShown: false, title: 'Shop' }} />
      <Tabs.Screen name="favorite" options={{ headerShown: false, title: 'Favorite' }} />
      <Tabs.Screen name="account" options={{ headerShown: false, title: 'Account' }} />
    </Tabs>
  )
}

export default _layout