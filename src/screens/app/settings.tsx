import { screenNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { RegularText } from "@src/components";
import { BottomTabBarScreenProps } from "@src/router/types";

export const Settings = ({}: BottomTabBarScreenProps<screenNames.SETTINGS>) => {
  return (
    <Screen>
      <RegularText>Settings screen</RegularText>
    </Screen>
  );
};
