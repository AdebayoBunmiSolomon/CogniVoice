import { BoldText } from "@src/components";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const HeaderTitle: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@src/assets/businessman.png")}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={styles.headerTitle}>
        <BoldText sizeBody main>
          Cogni
        </BoldText>
        <BoldText sizeBody blue>
          Voice
        </BoldText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: DVW(8),
    height: DVH(4),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  headerTitle: {
    flexDirection: "row",
  },
});
