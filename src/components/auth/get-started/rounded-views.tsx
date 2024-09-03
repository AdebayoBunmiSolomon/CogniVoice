import { CircularView } from "@src/common/circular-container";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { moderateScale, verticalScale } from "@src/resources/scaling";
import Animated, { BounceInLeft } from "react-native-reanimated";
import { getStartedIndicators } from "@src/constants/get-started";

export const RoundedViews: React.FC<{}> = () => {
  const [arrNumbOfIcons, setArrNumbOfIcons] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const addToNumbersOfIcons = (arrNumber: number) => {
    if (!arrNumbOfIcons.includes(arrNumber)) {
      setArrNumbOfIcons((prevArr) => [...prevArr, arrNumber]);
    } else {
      //do not do anything...
    }
  };

  useEffect(() => {
    if (counter < 5) {
      // Only run the timer if the counter is less than 5
      const timer = setTimeout(() => {
        setCounter((prevCounter) => prevCounter + 1);
        addToNumbersOfIcons(counter); // Add the current counter to the array
      }, 500);

      return () => clearTimeout(timer); // Cleanup timer on component unmount or before the next effect
    }
  }, [counter]);
  return (
    <>
      <View style={styles.roundedViewContainer}>
        {getStartedIndicators &&
          getStartedIndicators.map((item, index) => {
            return (
              arrNumbOfIcons &&
              arrNumbOfIcons.includes(index + 1) && (
                <View key={index}>
                  <Animated.View
                    entering={BounceInLeft.delay(500 * index)
                      .duration(1000)
                      .damping(20)}>
                    <CircularView
                      key={index}
                      bgColor={
                        index === 0
                          ? colors.main
                          : index === 1
                          ? colors.darkGray
                          : index === 2
                          ? colors.lightGray
                          : index === 3
                          ? colors.blue
                          : undefined
                      }>
                      <MaterialCommunityIcons
                        color={colors.white}
                        size={moderateScale(30)}
                        name={item as unknown as string}
                      />
                    </CircularView>
                  </Animated.View>
                </View>
              )
            );
          })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  roundedViewContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
    marginTop: verticalScale(10),
  },
});
