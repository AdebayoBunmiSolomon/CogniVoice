import { appScreenTypes } from "@src/types/types";
import { navigationNames } from "./navigation-names";
import { Chatting } from "@src/screens/app";
import { BottomTabStack } from "@src/router/bottom-tab";

export const appScreens: appScreenTypes[] = [
  {
    screenName: navigationNames.BOTTOM_TAB,
    component: BottomTabStack,
  },
  {
    screenName: navigationNames.CHATTING,
    component: Chatting,
  },
];
