import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ btnStyle, textStyle, onPressHandler, text }) => {
  return (
    <View>
      <TouchableOpacity style={btnStyle} onPress={onPressHandler}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
