import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { VerticalScrollContainer } from "@src/components/core";
import { ScreenTitle } from "@src/common/header-title";
import { SectionList, View, Text, StyleSheet } from "react-native";
import { groupDataByDate } from "@src/helper/helper";
import { format } from "date-fns";

const data = [
  { id: 1, title: "Item 1", date: "2024-09-05T10:00:00Z" },
  { id: 2, title: "Item 2", date: "2024-09-05T12:00:00Z" },
  { id: 3, title: "Item 3", date: "2024-09-06T09:00:00Z" },
  { id: 4, title: "Item 4", date: "2024-09-06T15:00:00Z" },
];

export const History = ({
  navigation,
}: BottomTabBarScreenProps<navigationNames.HISTORY>) => {
  // Group data by date
  const groupedData = groupDataByDate(data);

  // Convert grouped data to the format required by SectionList
  const sections = Object.keys(groupedData).map((date) => ({
    title: date, // Section header (date)
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
                <Text>{item.title}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.header}>
                <Text style={styles.headerText}>
                  {format(new Date(title), "EEEE, MMMM d, yyyy")}
                </Text>
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
    padding: 10,
  },
  headerText: {
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
