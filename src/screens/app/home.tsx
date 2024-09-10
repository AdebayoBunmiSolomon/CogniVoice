import { screenNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { HeaderTitle, SubHeader } from "@src/common/header-title";
import { CircularLineView } from "@src/common/circular-container";
import { Image, StyleSheet, View } from "react-native";
import { DVH, moderateScale, verticalScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import {
  BoldText,
  ChatHistory,
  ExploreMore,
  IconButton,
  RegularText,
} from "@src/components";
import { AntDesign } from "@expo/vector-icons";
import { chatHistory } from "@src/constants/chat-history";
import { exploreMore } from "@src/constants/explore-more";
import { PromptList, VerticalScrollContainer } from "@src/components/core";
import { promptList } from "@src/constants/prompt-list";

export const Home = ({
  navigation,
}: BottomTabBarScreenProps<screenNames.HOME>) => {
  return (
    <>
      <VerticalScrollContainer>
        <Screen>
          <View style={styles.headerContainer}>
            <HeaderTitle />
            <CircularLineView borderColor={colors.blue}>
              <Image
                source={require("@src/assets/profile.png")}
                style={styles.image}
                resizeMode='center'
              />
            </CircularLineView>
          </View>
          <View style={styles.questionTextContainer}>
            <BoldText sizeBody black>
              👋 Hello, John Doe
            </BoldText>
            <RegularText sizeBody gray>
              How can I help you today?
            </RegularText>
          </View>
          <IconButton
            title='New Chat'
            titleType='regular'
            textWhite
            icon={
              <AntDesign
                name='wechat'
                size={moderateScale(20)}
                color={colors.white}
              />
            }
            style={{
              backgroundColor: colors.main,
            }}
            onPress={() => {
              navigation.navigate(screenNames.AI_CHAT);
            }}
          />
          <SubHeader leftTextTitle='Chat History' rightTextTitle='Show all' />
          <ChatHistory data={chatHistory} />
          <SubHeader leftTextTitle='Explore more' rightTextTitle='show all' />
          <ExploreMore data={exploreMore} />
          <SubHeader leftTextTitle='Popular prompt' rightTextTitle='show all' />
          <PromptList data={promptList && promptList.slice(0, 4)} />
          <PromptList data={promptList && promptList.slice(5, 9)} />
        </Screen>
      </VerticalScrollContainer>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    marginBottom: DVH(0.07),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  questionTextContainer: {
    marginBottom: verticalScale(10),
  },
});
