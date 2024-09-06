import { LightText } from "@src/components/shared/text/light-text";
import { SemiBoldText } from "@src/components/shared/text/semi-bold-text";
import { colors } from "@src/resources/colors";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { aiChatType } from "@src/types/types";
import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

type featureProps = {
  data: aiChatType;
};

export const Features: React.FC<featureProps> = ({ data }) => {
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
                backgroundColor:
                  index === 0
                    ? colors.blue
                    : index === 1
                    ? colors.lightGray
                    : index === 2
                    ? colors.main
                    : undefined,
              },
            ]}
            key={index}>
            <View style={styles.descriptionContainer}>
              <View style={styles.imgContainer}>
                <Image
                  source={item.icon}
                  resizeMode='contain'
                  style={styles.image}
                />
                <SemiBoldText
                  sizeBody
                  white={index === 0 || index === 2 ? true : false}>
                  {item.title}
                </SemiBoldText>
              </View>
              <LightText
                white={index === 0 || index === 2 ? true : false}
                sizeSmall>
                {item.description}
              </LightText>
            </View>
          </View>
        )}
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
  itemContainer: {
    backgroundColor: colors.darkGray,
    paddingVertical: DVH(1.5),
    paddingHorizontal: DVW(4),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(15),
    borderWidth: DVW(0.3),
    marginBottom: verticalScale(15),
    width: "99%",
  },
  descriptionContainer: {
    width: "98%",
  },
  image: {
    width: DVW(12),
    height: DVH(10),
  },
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
});
