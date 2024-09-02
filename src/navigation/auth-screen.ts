import { authScreenTypes } from "@src/types/types";
import { navigationNames } from "./navigation-names";
import { GetStarted, Login } from "@src/screens/auth";

export const authScreen: authScreenTypes[] = [
  {
    screenName: navigationNames.GET_STARTED,
    component: GetStarted,
  },
  {
    screenName: navigationNames.LOGIN,
    component: Login,
  },
];
