import { screenNames } from "@src/navigation/navigation-names";
import { settingsType } from "@src/types/types";

export const settings: settingsType = [
  {
    title: "Settings",
    data: [
      {
        title: "About us",
        icon: require("@src/assets/about-us.png"),
        navigationScreen: screenNames.ABOUT_US,
      },
      {
        title: "Privacy Policy",
        icon: require("@src/assets/privacy-policy.png"),
        navigationScreen: "",
      },
      {
        title: "Terms of Use",
        icon: require("@src/assets/term-of-use.png"),
        navigationScreen: screenNames.TERMS_OF_USE,
      },
      {
        title: "Language",
        icon: require("@src/assets/language.png"),
        navigationScreen: "",
      },
    ],
  },
  {
    title: "Stay in touch",
    data: [
      {
        title: "Rate App",
        icon: require("@src/assets/rating-stars.png"),
        navigationScreen: "",
      },
      {
        title: "Send Feedback",
        icon: require("@src/assets/feedback.png"),
        navigationScreen: "",
      },
    ],
  },
];
