import { DVH, DVW } from "@src/resources/scaling";
import React from "react";
import { StyleSheet, View } from "react-native";

type roundedImageProps = {
  children: React.ReactNode;
  bgColor: `#${string}`;
};

export const RoundedView: React.FC<roundedImageProps> = ({
  children,
  bgColor,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <View>{children && children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DVW(20),
    height: DVH(10),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
