import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { DATA } from "../constants/data";

import HomeHeader from "../components/HomeHeader";
import NFTList from "../components/NFTList";
import NFTNotFound from "../components/NFTNotFound";

const Home = () => {
  const [NFTData, setNFTData] = useState(DATA);
  const [isNoSearchFound, setIsNoSearchFound] = useState(false);

  const searchHnadler = (searchText) => {
    if (!searchText) {
      setNFTData(DATA);
      setIsNoSearchFound(false);

      return;
    }

    const filtredData = DATA.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    if (filtredData.length) {
      setIsNoSearchFound(false);
      setNFTData(filtredData);
    } else {
      setIsNoSearchFound(true);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HomeHeader searchHnadler={searchHnadler} />

      {isNoSearchFound ? <NFTNotFound /> : <NFTList DATA={NFTData} />}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.bg,
    flex: 1,
    paddingInline: SIZES.medium,
    paddingTop: 50,
    paddingBottom: 170,
  },
});
