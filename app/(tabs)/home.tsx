import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar'

const Home = () => {
  return (
    <View className='flex flex-row justify-between items-center pt-10 bg-blue-500'>
      <Text className='h-auto pl-4 justify-center items-center'>Home</Text>
      {/* <View className='flex-1 mt-5'> */}
        <SearchBar />
      {/* </View> */}
      <Text className='h-auto pr-4 justify-center items-center'>Cart</Text>

    </View>
  )
}

export default Home