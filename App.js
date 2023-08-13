import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider} from "native-base";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
