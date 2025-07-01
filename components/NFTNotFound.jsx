import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const NFTNotFound = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.noFondText}>
        No NFTs found. Try different keywords?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  noFondText: {
    textAlign: "center",
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
  },
});

export default NFTNotFound;
