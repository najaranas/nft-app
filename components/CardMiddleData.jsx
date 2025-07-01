import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEye,
  faCommentDots,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const CardMiddleData = ({
  name,
  creator,
  price,
  views,
  comments,
  date,
  children,
}) => {
  const iconSize = 15;

  return (
    <View style={styles.dataContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.creator}>{creator}</Text>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={styles.icon}
              size={iconSize}
            />
          </View>
          <Text style={styles.creator}>{date}</Text>
        </View>
      </View>

      <View style={styles.iconDataBoxContainer}>
        <View style={styles.iconDataBox}>
          <FontAwesomeIcon icon={faEye} style={styles.icon} size={iconSize} />
          <Text style={styles.creator}>{views}</Text>
        </View>
        <View style={styles.iconDataBox}>
          <FontAwesomeIcon
            icon={faCommentDots}
            style={styles.icon}
            size={iconSize}
          />
          <Text style={styles.creator}>{comments}</Text>
        </View>
        <View style={styles.iconDataBox}>
          <FontAwesomeIcon
            icon={faEthereum}
            style={styles.icon}
            size={iconSize}
          />
          <Text style={styles.creator}>{price}</Text>
        </View>
        {children ? children : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    padding: SIZES.medium,
    gap: SIZES.medium,
    marginTop: SIZES.large,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SIZES.small,
  },
  name: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontFamily: FONTS.semiBold,
  },
  creator: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
  },
  icon: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: FONTS.light,
  },
  iconDataBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SIZES.small,
  },

  iconDataBox: {
    backgroundColor: COLORS.second,
    padding: SIZES.small,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    gap: SIZES.small,
  },

  faHeart: {
    padding: 10,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: COLORS.second,
  },
});

export default CardMiddleData;
