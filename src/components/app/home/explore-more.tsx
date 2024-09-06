import { LightText } from "@src/components/shared/text/light-text";
import { RegularText } from "@src/components/shared/text/regular-text";
import { colors } from "@src/resources/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
} from "react-native";

type exploreMoreProps = {
  data: {
    description: string;
    icon: ImageSourcePropType;
  }[];
  bgColor?: `#${string}`;
};

export const ExploreMore: React.FC<exploreMoreProps> = ({ data, bgColor }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(items, index) => items.toString() + index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.container,
              {
                backgroundColor: index === 1 ? colors.lightGray : colors.blue,
              },
            ]}
            key={index}>
            <Image
              source={item.icon}
              resizeMode='contain'
              style={styles.image}
            />
            <RegularText
              sizeBody
              white={index === 0 && true}
              black={index === 1 && true}>
              {item.description}
            </RegularText>
            {/* Wrap the button in a view and use flex styles */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.promptBtn}>
                <LightText sizeSmall black>
                  Use this prompt
                </LightText>
              </TouchableOpacity>
            </View>
          </View>
        )}
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={2}
        initialNumToRender={2}
        windowSize={2}
        updateCellsBatchingPeriod={100}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: DVH(1.5),
    paddingHorizontal: DVW(1.5),
    width: "49.5%",
    borderRadius: moderateScale(10),
    gap: moderateScale(20),
    marginRight: moderateScale(5),
    justifyContent: "space-between", // Ensure content is spaced apart
    flex: 1, // Allow the container to grow and push the button to the bottom
  },
  image: {
    width: DVW(10),
    height: DVH(5),
  },
  promptBtn: {
    backgroundColor: colors.white,
    paddingHorizontal: DVW(4),
    paddingVertical: DVH(1),
    borderRadius: moderateScale(30),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1, // Make button container flexible
    justifyContent: "flex-end", // Align the button at the bottom
  },
});
