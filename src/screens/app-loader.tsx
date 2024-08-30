import React from "react";
import { Screen } from "./screen";
import { BoldText } from "@src/components";
import { Image, StyleSheet, View } from "react-native";
import { DVH, DVW, verticalScale } from "@src/resources/scaling";
import { Loader } from "@src/components/core";
import { colors } from "@src/resources/colors";

export const AppLoader = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require("@src/assets/businessman.png")}
            style={styles.image}
            resizeMode='contain'
          />
          <BoldText sizeLarge main>
            Cogni
          </BoldText>
          <BoldText sizeLarge blue>
            Voice
          </BoldText>
        </View>
      </View>
      <View style={styles.loaderContainer}>
        <Loader color={colors.main} size='large' />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: DVW(15),
    height: DVH(7.5),
  },
  loaderContainer: {
    flex: 0.1,
    justifyContent: "flex-end",
    bottom: verticalScale(50),
  },
});
