import { screenNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { ScreenTitle } from "@src/common/header-title";
import { settings } from "@src/constants/settings";
import { LightText, RegularText, SemiBoldText } from "@src/components";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { Entypo } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { VerticalScrollContainer } from "@src/components/core";

export const Settings = ({
  navigation,
}: BottomTabBarScreenProps<screenNames.SETTINGS>) => {
  const date = new Date();
  const currYear = date.getFullYear();
  return (
    <VerticalScrollContainer>
      <Screen>
        <ScreenTitle
          title='Settings'
          bckBtnOnPress={() => navigation.navigate(screenNames.HOME)}
        />
        <View style={styles.container}>
          {settings.map((items, index) => (
            <View key={index}>
              <SemiBoldText sizeBody blue>
                {items.title}
              </SemiBoldText>
              <View style={styles.subTitleMainContainer}>
                {items.data &&
                  items.data.map((items, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.btnContainer}
                      onPress={() => {
                        navigation.navigate(items.navigationScreen);
                      }}>
                      <View style={styles.suTitleContainer}>
                        <Image
                          source={items.icon}
                          style={styles.image}
                          resizeMode='contain'
                        />
                        <RegularText sizeSmall blue>
                          {items.title}
                        </RegularText>
                      </View>
                      <Entypo
                        name='chevron-right'
                        size={moderateScale(20)}
                        color={colors.blue}
                      />
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          ))}
        </View>
      </Screen>
      <View style={styles.bottomTextContainer}>
        <LightText blue sizeSmall>
          &copy;Copyright,{currYear.toString()}
        </LightText>
      </View>
    </VerticalScrollContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: DVW(8),
    height: DVH(10),
  },
  container: {
    marginTop: verticalScale(10),
  },
  subTitleMainContainer: {
    backgroundColor: colors.darkGray,
    paddingVertical: verticalScale(2),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(5),
  },
  suTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomTextContainer: {
    height: Platform.OS === "ios" ? DVH(9) : DVH(13),
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
});
