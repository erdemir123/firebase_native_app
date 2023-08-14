import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/fireBase";

export default function useAuth() {
  const [userObject, setUserObject] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObject(user);
      } else {
        setUserObject(null);
      }
    });
    return unsub;
  }, [userObject]);
  return { userObject };
}
