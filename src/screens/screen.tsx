import { layout, moderateScale } from "@src/resources/scaling";
import React from "react";
import { View, StyleSheet, Platform } from "react-native";

type screenProps = {
  children: React.ReactNode;
};

export const Screen: React.FC<screenProps> = ({ children }) => {
  return <View style={styles.container}>{children && children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Platform.OS === "ios" ? "95%" : "96%",
    height: "100%",
    alignSelf: "center",
    paddingTop: Platform.OS === "android" ? moderateScale(50) : layout.size50,
  },
});
