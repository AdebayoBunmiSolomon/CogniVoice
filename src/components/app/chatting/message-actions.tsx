import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LightText } from "@src/components/shared/text/light-text";
import { moderateScale } from "@src/resources/scaling";

type messageActionProps = {
  iconColor: string;
  likeIconName: string;
  disLikeIconName: string;
  msgRoleType: "ai" | "user";
  copyToClipBoard: () => void;
  likeMsg: () => void;
  unLikeMsg: () => void;
};

export const MessageAction: React.FC<messageActionProps> = ({
  iconColor,
  msgRoleType,
  copyToClipBoard,
  likeMsg,
  unLikeMsg,
  likeIconName,
  disLikeIconName,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.copyContainer}>
        <TouchableOpacity onPress={copyToClipBoard}>
          <Ionicons
            name='copy-outline'
            size={moderateScale(20)}
            color={iconColor}
          />
        </TouchableOpacity>
        {msgRoleType === "ai" ? (
          <LightText sizeSmall white>
            copy text
          </LightText>
        ) : (
          <LightText sizeSmall gray>
            copy text
          </LightText>
        )}
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={likeMsg}>
          <AntDesign
            name={likeIconName}
            color={iconColor}
            size={moderateScale(20)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={unLikeMsg}>
          <AntDesign
            name={disLikeIconName}
            color={iconColor}
            size={moderateScale(20)}
          />
        </TouchableOpacity>
      </View>
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
