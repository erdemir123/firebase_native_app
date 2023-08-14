import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../config/fireBase";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const {navigate} = useNavigation()
  const handleLogout = async () => {
    await signOut(auth);
    navigate("Welcome");
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => handleLogout()}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
