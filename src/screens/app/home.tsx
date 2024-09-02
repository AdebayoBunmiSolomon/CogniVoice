import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { HeaderTitle } from "@src/common/header-title";
import { CircularView } from "@src/common/circular-container";
import { Image, Platform, StyleSheet, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { BoldText, IconButton, RegularText } from "@src/components";
import { AntDesign } from "@expo/vector-icons";

export const Home = ({}: BottomTabBarScreenProps<navigationNames.HOME>) => {
  return (
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
      <View>
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
    </Screen>
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
});
