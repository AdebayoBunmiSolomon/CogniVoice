import { fontFamily } from "@src/resources/fonts/font-family";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { useText } from "../hooks";

type textProps = {
  children: React.ReactNode;
  sizeSmall?: boolean;
  sizeBody?: boolean;
  sizeMedium?: boolean;
  sizeLarge?: boolean;
  sizeXtraLarge?: boolean;
  black?: boolean;
  white?: boolean;
  main?: boolean;
  lightGray?: boolean;
  darkGray?: boolean;
  blue?: boolean;
  cream?: boolean;
};

export const RegularText: React.FC<textProps> = ({
  children,
  sizeSmall,
  sizeBody,
  sizeMedium,
  sizeLarge,
  sizeXtraLarge,
  black,
  white,
  main,
  lightGray,
  darkGray,
  blue,
  cream,
}) => {
  const { textSize, textColor } = useText();
  const size = textSize(
    sizeSmall,
    sizeBody,
    sizeMedium,
    sizeLarge,
    sizeXtraLarge
  );
  const color = textColor(black, white, main, lightGray, darkGray, blue);
  return (
    <>
      <Text
        style={[
          styles.text,
          {
            fontSize: size,
            color: color,
          },
        ]}>
        {children && children}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.regular,
  },
});
