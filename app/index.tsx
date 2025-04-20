import Phrases from "@/components/index/Phrases";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-end">
      <Image
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        className="w-full h-full flex-1 absolute top-0 left-0"
      />
      <Phrases />
      <View className="px-12 py-4 rounded-t-xl bg-background">
        <Link href="/home" asChild>
          <TouchableOpacity className="bg-primary p-4 rounded-xl">
            <Text className="text-darkTextPrimary text-xs xs:text-base font-secondary-bold text-center">
              INGRESAR
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
