import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import nft08 from "../assets/images/nft08.jpg";
import nft01 from "../assets/images/nft01.jpg";
import nft04 from "../assets/images/nft04.jpg";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const mainDuration = 1000;
  const navigation = useNavigation();
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveBtnAnimation = useRef(new Animated.Value(200)).current;

  const BtnOnPressHandler = () => {
    navigation.navigate("Home");
  };

  const ImagesAnimationHandler = () => {
    Animated.parallel([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration: mainDuration,
        useNativeDriver: true,
      }),

      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration: mainDuration,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const TextAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration: 1000,
      delay: mainDuration,
      useNativeDriver: true,
    }).start();
  };

  const BtnAnimationHandler = () => {
    Animated.spring(moveBtnAnimation, {
      toValue: 0,
      friction: 5,
      duration: 1000,
      delay: mainDuration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    ImagesAnimationHandler();
    TextAnimationHandler();
    BtnAnimationHandler();
  }, [ImagesAnimationHandler, TextAnimationHandler, BtnAnimationHandler]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View
        style={[
          styles.imagesContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}>
        <View style={styles.imgCard}>
          <Image source={nft01} style={styles.image} />
        </View>
        <View style={[styles.imgCard, { top: 40 }]}>
          <Image source={nft08} style={styles.image} />
        </View>
        <View style={styles.imgCard}>
          <Image source={nft04} style={styles.image} />
        </View>
      </Animated.View>

      <Animated.View
        style={[styles.TextContainer, { opacity: fadeTextAnimation }]}>
        <Text style={styles.mainText}>
          Discover, Collect, and Trade Exclusive NFTs.
        </Text>
        <Text style={styles.subText}>
          Explore a new era of creativity, buy and sell unique digital assets,
          and own a piece of the future!
        </Text>
      </Animated.View>

      <Animated.View
        style={[
          styles.btnContainer,
          {
            transform: [
              {
                translateY: moveBtnAnimation,
              },
            ],
          },
        ]}>
        <Button
          text={"Get Started"}
          btnStyle={styles.btn}
          textStyle={styles.textBtn}
          onPressHandler={BtnOnPressHandler}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.bg,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingInline: SIZES.medium,
  },

  imagesContainer: {
    gap: SIZES.medium,
    flexDirection: "row",
    marginTop: SIZES.xLarge,
  },

  imgCard: {
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
    borderRadius: 25,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },

  TextContainer: {
    marginTop: 80,
    gap: 10,
    paddingInline: 3,
  },

  mainText: {
    color: COLORS.white,
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
    textAlign: "center",
  },

  subText: {
    color: COLORS.gray,
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    textAlign: "center",
  },

  btnContainer: {
    marginTop: SIZES.xLarge,
    marginInline: "auto",
  },

  btn: {
    width: 200,
    justifyContent: "center",
    backgroundColor: COLORS.second,
    paddingInline: SIZES.xLarge,
    paddingBlock: SIZES.medium,
    borderRadius: SIZES.small,
  },

  textBtn: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    textAlign: "center",
  },
});
