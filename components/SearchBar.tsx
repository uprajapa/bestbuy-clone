import { View, Text, TextInput } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View className="w-2/3 h-auto bg-white rounded-md mb-1">
      <TextInput onPress={() => {}} placeholder="Search Best Buy Clone" className="text-black" />
    </View>
  )
}

export default SearchBar