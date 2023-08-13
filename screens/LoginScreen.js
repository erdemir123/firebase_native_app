import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFormik } from "formik";

import { Image } from "react-native";
import { Box, FormControl, Input, WarningOutlineIcon } from "native-base";
import validation from "../components/validation";

export default function LoginScreen({ navigation }) {
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: validation,
  });
  return (
    <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex-1 mt-4">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <Ionicons name="arrow-back-outline" size={20} color="green" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 -mt-24 pt-4"
      >
        <Box alignItems="center">
          <FormControl
            isInvalid={errors.email && touched.email}
            w="100%"
            maxW="300px"
          >
            <FormControl.Label>E-mail Adress</FormControl.Label>
            <Input
              placeholder="Enter email"
              py="4"
              variant="filled"
              rounded="xl"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors.email}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box alignItems="center">
          <FormControl
            isInvalid={errors.password && touched.password}
            w="100%"
            maxW="300px"
          >
            <FormControl.Label>Password</FormControl.Label>
            <Input
              placeholder="Enter password"
              py="4"
              variant="filled"
              rounded="xl"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>

        <TouchableOpacity className="flex items-end mt-2">
          <Text className="text-gray-700 mb-5">Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={handleSubmit}>
          <Text className="text-xl font-bold text-center text-gray-700">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
