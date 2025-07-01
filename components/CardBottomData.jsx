import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const CardBottomData = ({ address, tokenId, tokenSt, blockchain }) => {
  return (
    <SafeAreaView style={styles.mainComponent}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Contact address</Text>
        <Text style={styles.text}>{address}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Token ID</Text>
        <Text style={styles.text}>{tokenId}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Token Standard</Text>
        <Text style={styles.text}>{tokenSt}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Blockchain</Text>
        <Text style={styles.text}>{blockchain}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainComponent: {
    // marginTop: SIZES.large,
    paddingInline: SIZES.medium,
    // gap:SIZES.medium
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    paddingBlock: SIZES.medium,
  },
});
export default CardBottomData;
