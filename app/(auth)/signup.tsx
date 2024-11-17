import { View } from "react-native";
import React from "react";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpScreen() {
  return (
    <View className="bg-black flex-1">
      <SignUpForm />
    </View>
  );
}
