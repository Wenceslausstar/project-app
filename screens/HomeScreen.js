import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

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
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation={"fadeIn"}
          easing={"ease-in-out"}
          source={HeroImage}
          className="v-full h-full  object-cover mt-6"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9]
        rounded-full items-center justify-center"
        >
          <Animatable.View
            easing={"ease-in-out"}
            animation={"bounceIn"}
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">GO</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
