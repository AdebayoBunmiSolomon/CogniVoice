import React from "react";
import { Screen } from "../screen";
import { AuthScreenProps } from "@src/router/types";
import { navigationNames } from "@src/navigation/navigation-names";
import { Image, StyleSheet, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { BoldText, IconButton } from "@src/components";
import { Fontisto } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { useIsAuthenticatedStore } from "@src/services/store/useAuthenticationStore";

export const Login = ({
  navigation,
}: AuthScreenProps<navigationNames.LOGIN>) => {
  const { setIsAuthenticated } = useIsAuthenticatedStore();
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Image
            source={require("@src/assets/businessman.png")}
            style={styles.image}
            resizeMode='contain'
          />
          <View style={styles.titleTextContainer}>
            <BoldText sizeLarge main>
              Signin-
            </BoldText>
            <BoldText sizeLarge blue>
              Here
            </BoldText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            titleType='regular'
            title='Continue with facebook'
            onPress={() => {
              setIsAuthenticated(true);
            }}
            textWhite
            bgBlue
            icon={
              <Fontisto
                name='facebook'
                size={moderateScale(20)}
                color={colors.white}
              />
            }
          />
          <IconButton
            titleType='regular'
            title='Continue with google'
            onPress={() => {
              setIsAuthenticated(true);
            }}
            textWhite
            bgMain
            icon={
              <Fontisto
                name='google'
                size={moderateScale(20)}
                color={colors.white}
              />
            }
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: DVW(25),
    height: DVH(12.5),
    alignSelf: "center",
  },
  titleTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    gap: moderateScale(20),
  },
  container: {
    flex: 1,
    gap: moderateScale(10),
    flexDirection: "column",
    justifyContent: "center",
    marginTop: DVH(-20),
  },
});
