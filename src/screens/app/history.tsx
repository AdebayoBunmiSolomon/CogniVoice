import { navigationNames } from "@src/navigation/navigation-names";
import React from "react";
import { Screen } from "../screen";
import { BottomTabBarScreenProps } from "@src/router/types";
import { VerticalScrollContainer } from "@src/components/core";
import { ScreenTitle } from "@src/common/header-title";
import { SectionList, View, StyleSheet } from "react-native";
import { groupDataByDate } from "@src/helper/helper";
import { RegularText, SemiBoldText } from "@src/components";
import { moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { history } from "@src/constants/history";
import { useHistory } from "@src/services/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";

export const History = ({
  navigation,
}: BottomTabBarScreenProps<navigationNames.HISTORY>) => {
  // Group data by date
  const groupedData = groupDataByDate(history);
  const { setSection } = useHistory();
  const sectionsData = setSection(groupedData);
  return (
    <>
      <VerticalScrollContainer>
        <Screen>
          <ScreenTitle
            title='History'
            bckBtnOnPress={() => navigation.navigate(navigationNames.HOME)}
          />
          <SectionList
            sections={sectionsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Ionicons
                  name='chatbox-ellipses-outline'
                  size={moderateScale(20)}
                  color={colors.black}
                />
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
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
