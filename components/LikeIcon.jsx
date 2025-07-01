import { SafeAreaView, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LikeIcon = ({ isLiked, likePressHandler }) => {
  const iconSize = 15;
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          likePressHandler();
        }}
        style={[
          styles.faHeart,
          { backgroundColor: isLiked ? COLORS.second : COLORS.bg },
        ]}>
        <FontAwesomeIcon
          icon={faHeart}
          style={[
            styles.icon,
            { color: isLiked ? COLORS.white : COLORS.second },
          ]}
          size={iconSize}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.compose({
  faHeart: {
    padding: 10,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: COLORS.second,
  },
  icon: {
    fontSize: SIZES.small,
    fontFamily: FONTS.light,
  },
});
export default LikeIcon;
