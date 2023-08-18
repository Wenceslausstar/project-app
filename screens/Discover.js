import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Discover = () => {
  const navigation = useNavigation();
  /* React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);*/
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#009bcc] font-bold ">
            Discover
          </Text>
          <Text className="text-[#6ad8c0] text-[36px]">
            the magic of nature.!
          </Text>
        </View>
        <View className="w-12 h-12 bg-gray-600 rounded-md items-center justify-center"></View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
