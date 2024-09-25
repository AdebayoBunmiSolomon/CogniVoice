import { screenNames } from "@src/navigation/navigation-names";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "@src/screens/screen";
import { ScreenTitle } from "@src/common/header-title";
import { RegularText, SemiBoldText } from "@src/components";
import { VerticalScrollContainer } from "@src/components/core";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/scaling";

export const TermsOfUse = ({
  navigation,
}: RootStackScreenProps<screenNames.TERMS_OF_USE>) => {
  return (
    <VerticalScrollContainer>
      <Screen>
        <ScreenTitle
          title='Term of Use'
          bckBtnOnPress={() => navigation.goBack()}
        />
        <SemiBoldText sizeBody blue>
          Our App Terms & Conditions
        </SemiBoldText>

        <View style={styles.divider} />

        <RegularText gray>
          Welcome to Cognivoice, an AI-powered voice assistant app designed to
          enhance your communication experience. By using Cognivoice, you agree
          to the following terms:
        </RegularText>

        <View style={styles.divider} />

        <RegularText gray>
          Cognivoice is intended for personal use, enabling you to access
          AI-driven voice assistance features. You agree not to misuse the app,
          engage in illegal activities, or use it to violate any laws.
        </RegularText>
        <View style={styles.divider} />

        <RegularText gray>
          We respect your privacy. Cognivoice collects limited data to enhance
          functionality, and we are committed to protecting your information.
          Please review our Privacy Policy for details.While Cognivoice aims to
          provide accurate and helpful responses, we cannot guarantee the app's
          accuracy for all scenarios. You acknowledge that the app's AI may have
          limitations.
        </RegularText>
        <View style={styles.divider} />
        <RegularText gray>
          We reserve the right to update these terms at any time. Continued use
          of the app implies acceptance of any changes.
        </RegularText>
        <View style={styles.divider} />

        <RegularText gray>
          By using Cognivoice, you agree to these terms and conditions.
        </RegularText>
      </Screen>
    </VerticalScrollContainer>
  );
};

const styles = StyleSheet.create({
  divider: {
    paddingVertical: moderateScale(10),
  },
});
