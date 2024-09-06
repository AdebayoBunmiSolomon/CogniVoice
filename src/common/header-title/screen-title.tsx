import { BoldText } from "@src/components";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
      <TouchableOpacity onPress={bckBtnOnPress}>
        <AntDesign
          name={"arrowleft"}
          size={moderateScale(20)}
          color={colors.black}
        />
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <BoldText sizeBody>{title}</BoldText>
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
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "56%",
  },
});
