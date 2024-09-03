import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { HeaderTitle, SubHeader } from "@src/common/header-title";
import { CircularView } from "@src/common/circular-container";
import { Image, Platform, StyleSheet, View, ScrollView } from "react-native";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
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

export const Home = ({}: BottomTabBarScreenProps<navigationNames.HOME>) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          bottom: verticalScale(10),
        }}>
        <Screen>
          <View style={styles.headerContainer}>
            <HeaderTitle />
            <CircularView bgColor={colors.main}>
              <Image
                source={require("@src/assets/profile.png")}
                style={styles.image}
                resizeMode='center'
              />
            </CircularView>
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
            bgBlue
            icon={
              <AntDesign
                name='wechat'
                size={moderateScale(20)}
                color={colors.white}
              />
            }
            onPress={() => {}}
          />
          <SubHeader leftTextTitle='Chat History' rightTextTitle='Show all' />
          <ChatHistory data={chatHistory} />
          <SubHeader leftTextTitle='Explore more' rightTextTitle='show all' />
          <ExploreMore data={exploreMore} />
          <SubHeader leftTextTitle='Popular prompt' rightTextTitle='show all' />
          <ExploreMore data={exploreMore} />
        </Screen>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Platform.OS === "android" ? DVW(8) : DVW(10),
    height: Platform.OS === "android" ? DVH(4) : DVH(5),
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
