import { DVH, DVW } from "@src/resources/scaling";
import React from "react";
import { StyleSheet, View } from "react-native";

type circularViewProps = {
  children: React.ReactNode;
  bgColor?: `#${string}`;
};

export const CircularView: React.FC<circularViewProps> = ({
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
    paddingHorizontal: DVW(4),
    paddingVertical: DVH(2),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
