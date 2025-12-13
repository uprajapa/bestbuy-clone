import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-bold text-primary">Welcome!</Text>
      <Link href="/product/computer" className="mt-5 text-lg">Computer</Link>
    </View>
  );
}
