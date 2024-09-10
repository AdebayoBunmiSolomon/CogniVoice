import { authScreenTypes } from "@src/types/types";
import { screenNames } from "./navigation-names";
import { GetStarted, Login } from "@src/screens/auth";

export const authScreen: authScreenTypes[] = [
  {
    screenName: screenNames.GET_STARTED,
    component: GetStarted,
  },
  {
    screenName: screenNames.LOGIN,
    component: Login,
  },
];
