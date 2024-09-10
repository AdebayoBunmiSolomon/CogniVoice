import { bottomTabScreenTypes } from "@src/types/types";
import { screenNames } from "./navigation-names";
import { AIChat, History, Home, Settings } from "@src/screens/app";

export const bottomTabScreen: bottomTabScreenTypes[] = [
  {
    screenName: screenNames.HOME,
    component: Home,
  },
  {
    screenName: screenNames.AI_CHAT,
    component: AIChat,
  },
  {
    screenName: screenNames.HISTORY,
    component: History,
  },
  {
    screenName: screenNames.SETTINGS,
    component: Settings,
  },
];
