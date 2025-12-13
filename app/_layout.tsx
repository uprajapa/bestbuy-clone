import { Stack } from "expo-router";
import './global.css'
import { View } from "react-native";
import SearchBar from "@/components/SearchBar";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
        headerTitle: "Best Buy",
      }}
    />
    </Stack>
}
