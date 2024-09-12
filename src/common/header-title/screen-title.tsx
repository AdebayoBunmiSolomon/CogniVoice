import { BoldText, SemiBoldText } from "@src/components";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";

type screenTitleProps = {
  title: string;
  bckBtnOnPress: () => void;
  rightIcon?: React.ReactNode;
};

export const ScreenTitle: React.FC<screenTitleProps> = ({
  title,
  bckBtnOnPress,
  rightIcon,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={bckBtnOnPress} style={styles.button}>
        <Entypo
          name={"chevron-left"}
          size={moderateScale(25)}
          color={colors.black}
        />
        <SemiBoldText sizeBody>{title}</SemiBoldText>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <View>{rightIcon ? rightIcon : <View />}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(1),
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
