import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { ScreenTitle } from "@src/common/header-title";
import { RootStackScreenProps } from "@src/router/types";

export const Chatting = ({
  navigation,
}: RootStackScreenProps<navigationNames.CHATTING>) => {
  return (
    <Screen>
      <ScreenTitle
        title='Chats'
        bckBtnOnPress={() => navigation.navigate(navigationNames.BOTTOM_TAB)}
      />
    </Screen>
  );
};
