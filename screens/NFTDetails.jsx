import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import CardImage from "../components/CardImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faDollar } from "@fortawesome/free-solid-svg-icons";
import CardMiddleData from "../components/CardMiddleData";
import CardBottomData from "../components/CardBottomData";
import { useNavigation } from "@react-navigation/native";
import LikeIcon from "../components/LikeIcon";

const NFTDetails = ({ route }) => {
  const { DATA, isLiked, likePressHandler } = route.params;
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);
  const navigation = useNavigation();

  const fadeDataIn = useRef(new Animated.Value(0)).current;
  const fadeImageIn = useRef(new Animated.Value(0)).current;
  const moveImage = useRef(new Animated.ValueXY({ x: 0, y: -100 })).current;
  const fadeBidIn = useRef(new Animated.Value(0)).current;
  const moveBId = useRef(new Animated.ValueXY({ x: 0, y: 500 })).current;

  const DataAnimation = () => {
    Animated.timing(fadeDataIn, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      isInteraction: true,
      useNativeDriver: true,
    }).start();
  };

  const ImageAnimation = () => {
    Animated.parallel([
      Animated.timing(fadeImageIn, {
        toValue: 1,
        duration: 1000,
        isInteraction: true,
        useNativeDriver: true,
      }),
      Animated.timing(moveImage, {
        toValue: { x: 0, y: 0 },
        duration: 700,
        isInteraction: true,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const bidAnimation = () => {
    Animated.parallel([
      Animated.timing(fadeBidIn, {
        toValue: 1,
        duration: 1000,
        isInteraction: true,
        useNativeDriver: true,
      }),
      Animated.spring(moveBId, {
        toValue: { x: 0, y: 0 },
        tension: 25,
        friction: 5,
        duration: 700,
        isInteraction: true,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleLocalLikePress = () => {
    setLocalIsLiked((prev) => !prev);
    likePressHandler();
  };

  useEffect(() => {
    DataAnimation();
    ImageAnimation();
    bidAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View
        style={{
          opacity: fadeImageIn,
          transform: moveImage.getTranslateTransform(),
        }}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: COLORS.white }} />
        </TouchableOpacity>
        <CardImage image={DATA.image} avatars={DATA.avatars} />
      </Animated.View>

      <Animated.View style={{ opacity: fadeDataIn }}>
        <CardMiddleData
          name={DATA.name}
          creator={DATA.creator}
          price={DATA.price}
          views={DATA.views}
          comments={DATA.comments}
          date={DATA.date}>
          <LikeIcon
            isLiked={localIsLiked}
            likePressHandler={handleLocalLikePress}
          />
        </CardMiddleData>
        <CardBottomData
          address={DATA.address}
          tokenId={DATA.tokenId}
          tokenSt={DATA.tokenSt}
          blockchain={DATA.blockchain}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.topBidContainer,
          { opacity: fadeBidIn, transform: moveBId.getTranslateTransform() },
        ]}>
        <Text style={styles.topBidText}> Top Bid :</Text>
        <View style={styles.topBidResult}>
          <FontAwesomeIcon
            icon={faDollar}
            size={SIZES.medium}
            style={{ color: COLORS.white }}
          />
          <Text style={styles.topBidText}>{DATA.topBid}</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.bg,
    flex: 1,
    paddingBottom: 170,
  },

  icon: {
    position: "absolute",
    backgroundColor: COLORS.second,
    top: SIZES.xLarge * 2,
    left: SIZES.large,
    zIndex: 1,
    color: COLORS.white,
    padding: SIZES.medium,
    borderRadius: "50%",
    borderColor: COLORS.white,
    borderWidth: 2,
    padding: 10,
    borderRadius: "50%",
    borderWidth: 2,
  },

  topBidContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBlock: SIZES.medium,
  },

  topBidResult: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: COLORS.second,
    borderRadius: 15,
    paddingInline: SIZES.small,
  },

  topBidText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    paddingBlock: SIZES.medium,
  },
});
export default NFTDetails;
