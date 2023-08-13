import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-1 justify-around my-4">
        <Text className="text-slate-100 font-bold text-4xl text-center">
          Let's Get Started!
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="shadow-sm shadow-yellow-500 mx-7 bg-yellow-300 py-2 rounded-xl "
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-white font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-400"> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
