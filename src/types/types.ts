import {
  RootStackParamList,
  AuthStackParamList,
  BottomTabBarStackParamList,
} from "@src/router/types";
import { ImageSourcePropType } from "react-native";

export type authScreenTypes = {
  screenName: keyof AuthStackParamList;
  component: React.ComponentType<any>;
};

export type bottomTabScreenTypes = {
  screenName: keyof BottomTabBarStackParamList;
  component: React.ComponentType<any>;
};

export type appScreenTypes = {
  screenName: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

export type exploreMoreTypes = {
  description: string;
  icon: ImageSourcePropType;
};

export type promptListTypes = {
  description: string;
  icon: ImageSourcePropType;
}[];

export type aiChatType = {
  description: string;
  title: string;
  icon: ImageSourcePropType;
}[];
