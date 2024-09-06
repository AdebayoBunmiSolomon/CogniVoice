import { colors } from "@src/resources/colors";
import { DVW, moderateScale } from "@src/resources/scaling";
import React from "react";
import { StyleSheet, View } from "react-native";

type circularLineView = {
  borderColor?: string;
  children: React.ReactNode;
};

export const CircularLineView: React.FC<circularLineView> = ({
  borderColor,
  children,
}) => {
  return (
    <View
      style={[
        styles.userImgContainer,
        {
          borderColor: borderColor ? borderColor : colors.main,
        },
      ]}>
      {children && children}
    </View>
  );
};

const styles = StyleSheet.create({
  userImgContainer: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderWidth: DVW(0.3),
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
