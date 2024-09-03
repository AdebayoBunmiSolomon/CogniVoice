import { RegularText, SemiBoldText } from "@src/components";
import { verticalScale } from "@src/resources/scaling";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type subHeaderProps = {
  leftTextTitle: string;
  rightTextTitle: string;
};

export const SubHeader: React.FC<subHeaderProps> = ({
  leftTextTitle,
  rightTextTitle,
}) => {
  return (
    <View style={styles.container}>
      <SemiBoldText sizeBody black>
        {leftTextTitle && leftTextTitle}
      </SemiBoldText>
      <TouchableOpacity>
        <RegularText sizeSmall main>
          {rightTextTitle && rightTextTitle.toLowerCase()}
        </RegularText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
