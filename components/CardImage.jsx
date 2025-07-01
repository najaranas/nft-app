import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CardImage = ({ image, avatars }) => {
  return (
    <View>
      <Image source={image} style={styles.mainCardImage} resizeMode="cover" />
      <View style={styles.avatarsContainer}>
        {avatars.length
          ? avatars.map((item, index) => (
              <Image
                key={item.id}
                source={item.image}
                style={[
                  styles.avatarStyle,
                  { zIndex: index, marginLeft: index !== 0 ? -10 : 0 },
                ]}
              />
            ))
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCardImage: {
    width: "100%",
    height: 360,
    borderRadius: 20,
  },
  avatarsContainer: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: 30,
    transform: [{ translateY: "50%" }],
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default CardImage;
