import { screenNames } from "@src/navigation/navigation-names";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "@src/screens/screen";
import { ScreenTitle } from "@src/common/header-title";

export const TermsOfUse = ({
  navigation,
}: RootStackScreenProps<screenNames.TERMS_OF_USE>) => {
  return (
    <Screen>
      <ScreenTitle
        title='Term of Use'
        bckBtnOnPress={() => navigation.goBack()}
      />
    </Screen>
  );
};
