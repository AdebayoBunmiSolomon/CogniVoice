import { ScreenTitle } from "@src/common/header-title";
import { VerticalScrollContainer } from "@src/components/core";
import { screenNames } from "@src/navigation/navigation-names";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/screen";

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
      </Screen>
    </VerticalScrollContainer>
  );
};
