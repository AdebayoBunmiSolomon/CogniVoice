import { bottomTabScreenTypes } from "@src/types/types";
import { navigationNames } from "./navigation-names";
import { AIChat, History, Home, Settings } from "@src/screens/app";

export const bottomTabScreen: bottomTabScreenTypes[] = [
  {
    screenName: navigationNames.HOME,
    component: Home,
  },
  {
    screenName: navigationNames.AI_CHAT,
    component: AIChat,
  },
  {
    screenName: navigationNames.HISTORY,
    component: History,
  },
  {
    screenName: navigationNames.SETTINGS,
    component: Settings,
  },
];
