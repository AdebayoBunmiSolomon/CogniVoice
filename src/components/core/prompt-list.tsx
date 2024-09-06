import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { LightText } from "../shared/text/light-text";
import { colors } from "@src/resources/colors";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { promptListTypes } from "@src/types/types";
import { Ionicons } from "@expo/vector-icons";
import Animated, { Easing, FadeIn, FadeOut } from "react-native-reanimated";

type promptListProps = {
  data: promptListTypes;
};

export const PromptList: React.FC<promptListProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(items, index) =>
          items.description.toString() + index.toString()
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                borderColor:
                  selectedIndex === index ? colors.main : colors.lightGray,
              },
            ]}
            key={index}
            onPress={() => setSelectedIndex(index)}>
            <View style={styles.itemSubContainer}>
              <LightText gray sizeSmall>
                {item.description}
              </LightText>
              <Image
                source={item.icon}
                resizeMode='contain'
                style={styles.image}
              />
              {selectedIndex === index && (
                <Animated.View
                  entering={FadeIn.delay(100)
                    .duration(300)
                    .easing(Easing.inOut(Easing.ease))}
                  exiting={FadeOut.delay(100)
                    .duration(300)
                    .easing(Easing.inOut(Easing.ease))}>
                  <Ionicons
                    name='checkmark-sharp'
                    size={moderateScale(15)}
                    color={colors.main}
                  />
                </Animated.View>
              )}
            </View>
          </TouchableOpacity>
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
    paddingBottom: verticalScale(10),
  },
  itemContainer: {
    backgroundColor: colors.darkGray,
    paddingVertical: DVH(0.6),
    paddingHorizontal: DVW(4),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(15),
    borderWidth: DVW(0.3),
  },
  itemSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(3),
  },
  image: {
    width: DVW(4),
    height: DVH(4),
  },
});
