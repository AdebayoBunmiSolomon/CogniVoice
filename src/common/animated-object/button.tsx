import { RegularText } from "@src/components";
import React, { useEffect, useState } from "react";
import { TouchableOpacityProps, ViewStyle } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { animationIn, animationOut } from "../services/animations";

type animatedBtnProps = {
  object: React.ComponentType<TouchableOpacityProps>;
  style: ViewStyle;
  animationTimer?: number;
  enteringAnimation?: keyof typeof animationIn;
  exitingAnimation?: keyof typeof animationOut;
  title?: string;
};

export const AnimatedButton: React.FC<animatedBtnProps> = ({
  object,
  style,
  animationTimer,
  title,
}) => {
  const AnimatedButton = Animated.createAnimatedComponent(object);
  const [showObj, setShowObj] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowObj(true);
      },
      animationTimer ? animationTimer : 500
    );
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showObj && (
        <AnimatedButton
          style={style}
          entering={SlideInDown.delay(500).duration(1000).damping(20)}
          exiting={SlideInDown.delay(500).duration(1000).damping(20)}>
          <RegularText sizeBody white>
            {title ? title : "no title"}
          </RegularText>
        </AnimatedButton>
      )}
    </>
  );
};
