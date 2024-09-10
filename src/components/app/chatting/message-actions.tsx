import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LightText } from "@src/components/shared/text/light-text";
import { moderateScale } from "@src/resources/scaling";

type messageActionProps = {
  iconColor: string;
  leftIconName?: string;
  rightIconName?: string;
  msgRoleType: "ai" | "user";
  leftAction?: () => void;
  rightAction?: () => void;
  leftActionTitle?: string;
};

export const MessageAction: React.FC<messageActionProps> = ({
  iconColor,
  msgRoleType,
  leftAction,
  rightAction,
  leftActionTitle,
  leftIconName,
  rightIconName,
}) => {
  return (
    <View style={styles.container}>
      {leftAction && (
        <View style={styles.copyContainer}>
          <TouchableOpacity onPress={leftAction}>
            <Ionicons
              name={leftIconName}
              size={moderateScale(20)}
              color={iconColor}
            />
          </TouchableOpacity>
          {msgRoleType === "ai" ? (
            <LightText sizeSmall white>
              {leftActionTitle}
            </LightText>
          ) : (
            <LightText sizeSmall gray>
              {leftActionTitle}
            </LightText>
          )}
        </View>
      )}
      {rightAction && (
        <View style={styles.likeContainer}>
          <TouchableOpacity onPress={rightAction}>
            <AntDesign
              name={rightIconName}
              color={iconColor}
              size={moderateScale(20)}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  copyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
