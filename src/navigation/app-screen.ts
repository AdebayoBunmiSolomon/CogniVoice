import { appScreenTypes } from "@src/types/types";
import { screenNames } from "./navigation-names";
import { TextChatting, VoiceChatting } from "@src/screens/app";
import { BottomTabStack } from "@src/router/bottom-tab";
import { AboutUs } from "@src/screens/app/settings/about-us";
import { TermsOfUse } from "@src/screens/app/settings/terms-of-use";

export const appScreens: appScreenTypes[] = [
  {
    screenName: screenNames.BOTTOM_TAB,
    component: BottomTabStack,
  },
  {
    screenName: screenNames.VOICE_CHATTING,
    component: VoiceChatting,
  },
  {
    screenName: screenNames.TEXT_CHATTING,
    component: TextChatting,
  },
  {
    screenName: screenNames.ABOUT_US,
    component: AboutUs,
  },
  {
    screenName: screenNames.TERMS_OF_USE,
    component: TermsOfUse,
  },
];
