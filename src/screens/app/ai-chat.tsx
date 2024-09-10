import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { ScreenTitle } from "@src/common/header-title";
import { Entypo } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { moderateScale, verticalScale } from "@src/resources/scaling";
import { VerticalScrollContainer } from "@src/components/core";
import {
  CircularIconButton,
  Features,
  RegularText,
  SemiBoldText,
} from "@src/components";
import { aiChat } from "@src/constants/ai-chat";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export const AIChat = ({
  navigation,
}: BottomTabBarScreenProps<navigationNames.AI_CHAT>) => {
  return (
    <>
      <VerticalScrollContainer>
        <Screen>
          <ScreenTitle
            title='ChatAI'
            bckBtnOnPress={() => navigation.navigate(navigationNames.HOME)}
            rightIcon={
              <Entypo
                name='back-in-time'
                color={colors.black}
                size={moderateScale(20)}
              />
            }
          />
          <View style={styles.featureText}>
            <SemiBoldText sizeMedium gray>
              Features
            </SemiBoldText>
          </View>
          <Features data={aiChat} />
          <View style={styles.bottomBtnContainer}>
            <View>
              <CircularIconButton
                onPress={() => {
                  navigation.navigate(navigationNames.VOICE_CHATTING);
                }}
                titleType='regular'
                style={{
                  backgroundColor: colors.blue,
                }}
                icon={
                  <FontAwesome
                    name='microphone'
                    size={moderateScale(20)}
                    color={colors.white}
                  />
                }
              />
            </View>
            <View>
              <CircularIconButton
                onPress={() => {
                  navigation.navigate(navigationNames.VOICE_CHATTING);
                }}
                titleType='regular'
                style={{
                  backgroundColor: colors.blue,
                }}
                icon={
                  <Ionicons
                    name='chatbox-ellipses-outline'
                    size={moderateScale(20)}
                    color={colors.white}
                  />
                }
              />
            </View>
          </View>
        </Screen>
      </VerticalScrollContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  featureText: {
    paddingVertical: verticalScale(7),
  },
  bottomBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(20),
  },
});
