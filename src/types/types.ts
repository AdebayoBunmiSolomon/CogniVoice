import { AuthStackParamList } from "@src/router/types";

export type authScreenTypes = {
  screenName: keyof AuthStackParamList;
  component: React.ComponentType<any>;
};

export type bottomTabScreenTypes = {
  screenName: keyof AuthStackParamList;
  component: React.ComponentType<any>;
};
