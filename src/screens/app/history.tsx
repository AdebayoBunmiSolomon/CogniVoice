import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { RegularText } from "@src/components";
import { BottomTabBarScreenProps } from "@src/router/types";

export const History =
  ({}: BottomTabBarScreenProps<navigationNames.HISTORY>) => {
    return (
      <Screen>
        <RegularText>History screen</RegularText>
      </Screen>
    );
  };
