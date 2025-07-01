import React, { useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Animated,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import anasPhoto from "../assets/images/avatars/anas.jpg";

const HomeHeader = ({ searchHnadler }) => {
  const fadeIn = useRef(new Animated.Value(0)).current;

  const headerAnimation = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      isInteraction: true,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    headerAnimation();
  }, [headerAnimation]);

  return (
    <SafeAreaView>
      <Animated.View style={{ opacity: fadeIn }}>
        <View style={[styles.rowCenter, { gap: SIZES.medium }]}>
          <Image
            source={anasPhoto}
            style={styles.userImage}
            resizeMode="cover"
          />
          <View>
            <View style={[styles.rowCenter, { gap: SIZES.small }]}>
              <Text style={styles.nameText}>Najar Anas</Text>
              <FontAwesomeIcon icon={faCircleCheck} style={styles.icon} />
            </View>
            <Text style={styles.nameSubText}>Creator</Text>
          </View>
        </View>
        {/* search field */}
        <View style={[styles.rowCenter, styles.searchField]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} />
          <TextInput
            placeholder="Enter NFT name to explore"
            placeholderTextColor={COLORS.white}
            style={styles.searchInput}
            numberOfLines={1}
            autoCorrect={false} // Removes autocorrect suggestions
            spellCheck={false} // Removes the red underline
            autoCapitalize="none" // Prevents automatic capitalization
            onChange={(event) => {
              searchHnadler(event.nativeEvent.text);
            }}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  icon: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },

  nameText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
  },

  nameSubText: {
    color: COLORS.gray,
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
  },

  searchField: {
    marginBlock: SIZES.large,
    backgroundColor: COLORS.cardBg,
    paddingBlock: SIZES.small,
    paddingInline: SIZES.medium,
    borderRadius: SIZES.small,
  },

  searchInput: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    flex: 1,
  },
});
