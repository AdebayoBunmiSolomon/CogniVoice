import { LightText } from "@src/components/shared/text/light-text";
import { colors } from "@src/resources/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

type chatHistoryProps = {
  data: string[];
};

export const ChatHistory: React.FC<chatHistoryProps> = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(items, index) => items.toString() + index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.itemContainer,
              {
                borderColor: colors.lightGray,
              },
            ]}
            key={index}>
            <LightText gray sizeSmall>
              {item}
            </LightText>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        maxToRenderPerBatch={2}
        initialNumToRender={2}
        windowSize={2}
        updateCellsBatchingPeriod={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: colors.darkGray,
    paddingVertical: DVH(1.5),
    paddingHorizontal: DVW(4),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(15),
    borderWidth: DVW(0.3),
  },
});
