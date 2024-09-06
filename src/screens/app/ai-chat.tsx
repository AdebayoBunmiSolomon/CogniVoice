import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { ScreenTitle } from "@src/common/header-title";
import { Entypo } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { moderateScale } from "@src/resources/scaling";
import { VerticalScrollContainer } from "@src/components/core";
import {
  CircularIconButton,
  Features,
  RegularText,
  SemiBoldText,
} from "@src/components";
import { aiChat } from "@src/constants/ai-chat";
import { FontAwesome } from "@expo/vector-icons";
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
          <SemiBoldText sizeMedium gray>
            Features
          </SemiBoldText>
          <Features data={aiChat} />
          <CircularIconButton
            onPress={() => {}}
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
          <View style={styles.container}>
            <RegularText sizeBody black>
              Speak now
            </RegularText>
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
});
