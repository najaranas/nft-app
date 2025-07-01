import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  SafeAreaView,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import CardMiddleData from "./CardMiddleData";
import CardImage from "./CardImage";
import { useNavigation } from "@react-navigation/native";
import LikeIcon from "./LikeIcon";

const NFTCard = ({ DATA }) => {
  const navigation = useNavigation();

  const [isLiked, setIsLiked] = useState(false);

  const pressHandler = () => {
    navigation.navigate("NFTDetails", {
      DATA,
      isLiked,
      likePressHandler,
    });
  };

  const likePressHandler = () => {
    setIsLiked((prev) => {
      return !prev;
    });
  };

  return (
    <SafeAreaView>
      <Animated.View>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            pressHandler();
          }}>
          <CardImage image={DATA.image} avatars={DATA.avatars} />
          <CardMiddleData
            name={DATA.name}
            creator={DATA.creator}
            price={DATA.price}
            views={DATA.views}
            comments={DATA.comments}
            date={DATA.date}>
            <LikeIcon isLiked={isLiked} likePressHandler={likePressHandler} />
          </CardMiddleData>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.xLarge,
  },
});

export default NFTCard;
