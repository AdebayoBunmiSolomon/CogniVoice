import { CircularView } from "@src/common/circular-container";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { moderateScale, verticalScale } from "@src/resources/scaling";

export const RoundedViews: React.FC<{}> = () => {
  return (
    <>
      <View style={styles.roundedViewContainer}>
        <CircularView bgColor={colors.main}>
          <MaterialCommunityIcons
            color={colors.white}
            size={moderateScale(30)}
            name='robot'
          />
        </CircularView>
        <CircularView bgColor={colors.darkGray}>
          <MaterialCommunityIcons
            color={colors.white}
            size={moderateScale(30)}
            name='chat'
          />
        </CircularView>
        <CircularView bgColor={colors.lightGray}>
          <MaterialCommunityIcons
            color={colors.white}
            size={moderateScale(30)}
            name='microphone'
          />
        </CircularView>
        <CircularView bgColor={colors.blue}>
          <MaterialCommunityIcons
            color={colors.white}
            size={moderateScale(30)}
            name='airplane-takeoff'
          />
        </CircularView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  roundedViewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
    marginTop: verticalScale(100),
  },
});
