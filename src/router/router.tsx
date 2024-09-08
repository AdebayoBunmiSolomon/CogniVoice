import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppStack } from "./app-stack";
import { AuthStack } from "./auth-stack";
import { useIsAuthenticatedStore } from "@src/services/store/useAuthenticationStore";

export const Router = () => {
  const { isAuthenticated } = useIsAuthenticatedStore();
  const authenticated = isAuthenticated;
  return (
    <>
      <NavigationContainer>
        <StatusBar style='dark' />
        {authenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};
