import { RegularText } from "@src/components";
import React, { useEffect, useState } from "react";
import { ViewProps, ViewStyle } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

type animatedObjectProps = {
  object: React.ComponentType<ViewProps>;
  style: ViewStyle;
};

export const AnimatedObject: React.FC<animatedObjectProps> = ({
  object,
  style,
}) => {
  const AnimatedComponent = Animated.createAnimatedComponent(object);
  const [showObj, setShowObj] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowObj(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showObj && (
        <AnimatedComponent
          style={style}
          entering={SlideInDown.delay(500).damping(20)}>
          <RegularText sizeBody white>
            Get Started
          </RegularText>
        </AnimatedComponent>
      )}
    </>
  );
};
