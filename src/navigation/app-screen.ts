import { appScreenTypes } from "@src/types/types";
import { screenNames } from "./navigation-names";
import { TextChatting, VoiceChatting } from "@src/screens/app";
import { BottomTabStack } from "@src/router/bottom-tab";

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
];
