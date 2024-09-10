import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BottomTabBarStackParamList } from "./types";
import { screenNames } from "@src/navigation/navigation-names";
import { bottomTabScreen } from "@src/navigation";
import { DVH, moderateScale } from "@src/resources/scaling";
import { RegularText } from "@src/components";
import { Platform } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import { colors } from "@src/resources/colors";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

export const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: Platform.OS === "ios" ? DVH(10) : DVH(8),
        },
        headerShown: false,
        tabBarLabel: ({ focused }) =>
          focused ? (
            <RegularText main>{route.name.toLowerCase()}</RegularText>
          ) : (
            <RegularText sizeSmall lightGray>
              {route.name.toLowerCase()}
            </RegularText>
          ),
        tabBarIcon: ({ focused }) =>
          focused && route.name === screenNames.HOME ? (
            <AntDesign
              name='home'
              size={moderateScale(20)}
              color={colors.main}
            />
          ) : !focused && route.name === screenNames.HOME ? (
            <AntDesign
              name='home'
              size={moderateScale(20)}
              color={colors.darkGray}
            />
          ) : focused && route.name === screenNames.AI_CHAT ? (
            <MaterialCommunityIcons
              name='robot'
              size={moderateScale(20)}
              color={colors.main}
            />
          ) : !focused && route.name === screenNames.AI_CHAT ? (
            <MaterialCommunityIcons
              name='robot'
              size={moderateScale(20)}
              color={colors.darkGray}
            />
          ) : focused && route.name === screenNames.HISTORY ? (
            <Octicons name='log' size={moderateScale(20)} color={colors.main} />
          ) : !focused && route.name === screenNames.HISTORY ? (
            <Octicons
              name='log'
              size={moderateScale(20)}
              color={colors.darkGray}
            />
          ) : focused && route.name === screenNames.SETTINGS ? (
            <Ionicons
              name='settings'
              size={moderateScale(20)}
              color={colors.main}
            />
          ) : !focused && route.name === screenNames.SETTINGS ? (
            <Ionicons
              name='settings'
              size={moderateScale(20)}
              color={colors.darkGray}
            />
          ) : undefined,
      })}
      initialRouteName={screenNames.HOME}>
      {bottomTabScreen &&
        bottomTabScreen.map((screen, index) => (
          <Tab.Screen
            name={screen.screenName}
            component={screen.component}
            key={index}
          />
        ))}
    </Tab.Navigator>
  );
};
