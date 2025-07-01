import React, { useEffect, useRef } from "react";
import { Animated, FlatList, SafeAreaView, StyleSheet } from "react-native";
import NFTCard from "./NFTCard";

const NFTList = ({ DATA }) => {
  const fadeIn = useRef(new Animated.Value(0)).current;

  const CardAnimation = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      isInteraction: true,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    CardAnimation();
  }, []);

  return (
    <SafeAreaView>
      <Animated.View style={{ opacity: fadeIn }}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <NFTCard DATA={item} />}
          contentContainerStyle={styles.listContainer}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default NFTList;

const styles = StyleSheet.create({
  listContainer: {
    gap: 30,
  },
});
