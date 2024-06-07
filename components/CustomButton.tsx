import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const CustomButton: React.FC = () => {
  return (
    <TouchableOpacity className="border-solid border-2 border-sky-500  px-2 bg-slate-500 ">
      <Text className="text-white">testbutton</Text>
    </TouchableOpacity>
  );
};
