import React, { useEffect, useState } from "react";
import { ViewProps, ViewStyle } from "react-native";
import { animationIn, animationOut } from "../services/animations";
import Animated, { SlideInDown } from "react-native-reanimated";
import { RegularText } from "@src/components";

type animatedIconBtnProps = {
  object: React.ComponentType<ViewProps>;
  style: ViewStyle;
  animationTimer?: number;
  enteringAnimation?: keyof typeof animationIn;
  exitingAnimation?: keyof typeof animationOut;
  title?: string;
  icon: React.ReactNode;
};

export const AnimatedIconButton: React.FC<animatedIconBtnProps> = ({
  object,
  style,
  animationTimer,
  title,
  icon,
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
            {title ? title : "no-title"}
          </RegularText>
          {icon && icon}
        </AnimatedButton>
      )}
    </>
  );
};
