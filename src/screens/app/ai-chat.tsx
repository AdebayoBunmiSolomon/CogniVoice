import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { RegularText } from "@src/components";
import { BottomTabBarScreenProps } from "@src/router/types";

export const AIChat =
  ({}: BottomTabBarScreenProps<navigationNames.AI_CHAT>) => {
    return (
      <Screen>
        <RegularText>AI-Chat screen</RegularText>
      </Screen>
    );
  };
