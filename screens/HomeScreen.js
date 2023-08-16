import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/*first section */}
      <View className="flex-row px-8 mt-10 items-center space-x-2">
        <View className="bg-black  w-19 h-16 rounded-full item-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">ENCORE</Text>
        </View>
        <Text className="texT-[2A2B4B] text-3xl font-semibold">TRAVELS</Text>
      </View>

      {/*second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00bcc9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3c6072] text-base">
          Remember to embrace the beauty of different cultures
        </Text>
        <Text className="text-[#3c6072] text-base">Bon voyage!</Text>
      </View>
      {/*circle section */}
      <View className="w-[400px] h-[400px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#13c457] rounded-full absolute -bottom-28 -left-36"></View>
      {/*image section */}
      <View className="flex-1 relative items-center justify-center"></View>
      <Image
      source={("../assets/images/hero.png")}>
    </SafeAreaView>
  );
};

export default HomeScreen;
