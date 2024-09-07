import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { VerticalScrollContainer } from "@src/components/core";
import { ScreenTitle } from "@src/common/header-title";
import { SectionList, View, Text, StyleSheet } from "react-native";
import { getDateTime, groupDataByDate } from "@src/helper/helper";
import { RegularText, SemiBoldText } from "@src/components";
import { moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";

const data = [
  { id: 1, question: "Item 1", date: "2024-09-07" },
  { id: 2, question: "Item 2", date: "2024-09-07" },
  { id: 3, question: "Item 3", date: "2024-09-06" },
  { id: 4, question: "Item 4", date: "2024-09-06" },
  { id: 5, question: "Item 3", date: "2024-09-05" },
  { id: 6, question: "Item 4", date: "2024-09-05" },
  { id: 7, question: "Item 3", date: "2024-09-06" },
  { id: 8, question: "Item 4", date: "2024-09-06" },
  { id: 9, question: "Item 3", date: "2024-09-05" },
  { id: 10, question: "Item 4", date: "2024-09-05" },
];

export const History = ({
  navigation,
}: BottomTabBarScreenProps<navigationNames.HISTORY>) => {
  // Group data by date
  const groupedData = groupDataByDate(data);

  // Convert grouped data to the format required by SectionList
  const sections = Object.keys(groupedData).map((date) => ({
    date: getDateTime(date), // Section header (date)
    data: groupedData[date], // Items for that date
  }));
  return (
    <>
      <VerticalScrollContainer>
        <Screen>
          <ScreenTitle
            title='History'
            bckBtnOnPress={() => navigation.navigate(navigationNames.HOME)}
          />
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <RegularText sizeSmall black>
                  {item.question}
                </RegularText>
              </View>
            )}
            renderSectionHeader={({ section: { date } }) => (
              <View style={styles.header}>
                <SemiBoldText sizeSmall gray>
                  {date}
                </SemiBoldText>
              </View>
            )}
          />
        </Screen>
      </VerticalScrollContainer>
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
  },
});
