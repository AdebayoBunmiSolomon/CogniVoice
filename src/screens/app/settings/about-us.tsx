import { HeaderTitle, ScreenTitle } from "@src/common/header-title";
import { RegularText } from "@src/components";
import { VerticalScrollContainer } from "@src/components/core";
import { screenNames } from "@src/navigation/navigation-names";
import { verticalScale } from "@src/resources/scaling";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/screen";
import { StyleSheet, View } from "react-native";

export const AboutUs = ({
  navigation,
}: RootStackScreenProps<screenNames.ABOUT_US>) => {
  return (
    <VerticalScrollContainer>
      <Screen>
        <ScreenTitle
          title='About Us'
          bckBtnOnPress={() => navigation.goBack()}
        />
        <View style={styles.titleContainer}>
          <HeaderTitle />
        </View>
        <RegularText>
          Cognivoice is an AI-powered voice assistance app designed to make your
          interactions smarter and more intuitive. Leveraging the advanced
          capabilities of ChatGPT’s in-built modeling, Cognivoice brings natural
          language understanding to the forefront, providing seamless voice
          assistance that adapts to your needs. Whether you’re looking for quick
          information, reminders, or help with tasks, Cognivoice is here to
          enhance your day-to-day life with the power of AI.
        </RegularText>
      </Screen>
    </VerticalScrollContainer>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: verticalScale(20),
    alignSelf: "flex-end",
  },
});
