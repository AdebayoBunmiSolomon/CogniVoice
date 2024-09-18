import { screenNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { VerticalScrollContainer } from "@src/components/core";
import { ScreenTitle } from "@src/common/header-title";
import { SectionList, View, StyleSheet, TouchableOpacity } from "react-native";
import { RegularText, SemiBoldText } from "@src/components";
import { DVH, moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useHistory } from "@src/services/hooks";
import { useOpenCloseSwipeItem } from "@src/hooks";
import { Skeleton } from "moti/skeleton";

export const History = ({
  navigation,
}: BottomTabBarScreenProps<screenNames.HISTORY>) => {
  const { sectionData, deleteSectionItem, loading } = useHistory();
  const { swipeableRefs, handleSwipeOpen } = useOpenCloseSwipeItem();

  const renderRightAction = (
    sectionIndex: number,
    itemIndex: number,
    dataItemId: number
  ) => {
    return (
      <TouchableOpacity
        style={styles.deleteIconBtn}
        onPress={() => deleteSectionItem(sectionIndex, itemIndex, dataItemId)}>
        <MaterialIcons
          name='delete'
          color={colors.white}
          size={moderateScale(25)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* {loading ? (
        <>
          <Skeleton
            colorMode='light'
            width={"90%"}
            height={DVH(10)}
            radius={"round"}>
            <SemiBoldText sizeSmall gray>
              test
            </SemiBoldText>
          </Skeleton>
        </>
      ) : ( */}
      <VerticalScrollContainer>
        <Screen>
          <ScreenTitle
            title='History'
            bckBtnOnPress={() => navigation.navigate(screenNames.HOME)}
          />
          <SectionList
            sections={sectionData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index, section }) => (
              <Swipeable
                ref={(ref) => (swipeableRefs.current[item.id] = ref)}
                onSwipeableOpen={() =>
                  handleSwipeOpen(swipeableRefs.current[item.id])
                }
                renderRightActions={() =>
                  renderRightAction(
                    sectionData.indexOf(section),
                    index,
                    item.id
                  )
                }>
                <View style={styles.item}>
                  <Ionicons
                    name='chatbox-ellipses-outline'
                    size={moderateScale(20)}
                    color={colors.black}
                  />
                  <View
                    style={{
                      maxWidth: "90%",
                    }}>
                    <RegularText sizeSmall black>
                      {item.question}
                    </RegularText>
                  </View>
                </View>
              </Swipeable>
            )}
            renderSectionHeader={({ section: { date } }) => (
              // <View style={styles.header}>
              <SemiBoldText sizeSmall gray>
                {date}
              </SemiBoldText>
              // </View>
            )}
          />
        </Screen>
      </VerticalScrollContainer>
      {/* )} */}
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f2f2f2",
    padding: moderateScale(10),
  },
  item: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(15),
    marginBottom: moderateScale(10),
    backgroundColor: colors.lightGray,
    borderRadius: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  deleteIconBtn: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(2),
    marginBottom: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: colors.main,
    justifyContent: "center",
  },
});
