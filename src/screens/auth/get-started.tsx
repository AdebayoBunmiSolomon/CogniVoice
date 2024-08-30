import React from "react";
import { Screen } from "../screen";
import { MediumText, RegularText } from "@src/components";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { DVH, moderateScale, verticalScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { RoundedViews } from "@src/components/auth/get-started";
import { AnimatedObject } from "@src/common";

export const GetStarted: React.FC<{}> = () => {
  return (
    <ImageBackground
      source={require("@src/assets/get-started.jpg")}
      style={styles.bgImage}
      resizeMode='cover'>
      {/* Semi-transparent overlay */}
      <View style={styles.overlay} />
      <Screen>
        <View style={styles.textContainer}>
          <MediumText sizeLarge white>
            This AI Voice Assistance ChatBot is the best in the world and has a
            fun concept
          </MediumText>
          <RegularText sizeSmall lightGray>
            Beyond conversation, discover a new level of intelligence and
            engagement
          </RegularText>
          <RoundedViews />
        </View>
      </Screen>
      <AnimatedObject style={styles.button} object={TouchableOpacity} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the parent (bgImage)
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the alpha for desired transparency
  },
  textContainer: {
    gap: moderateScale(10),
  },
  button: {
    width: "90%",
    height: DVH(7),
    justifyContent: "center",
    alignItems: "center",
    bottom: verticalScale(20),
    backgroundColor: colors.main,
    borderRadius: moderateScale(10),
  },
});
