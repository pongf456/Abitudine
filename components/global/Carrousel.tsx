import { colors } from "@/constants/Theme";
import { AntDesign } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { View, ViewProps, TouchableOpacity } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
interface Properties extends ViewProps {
  titles: string[];
  children: React.ReactNode[];
}
export default function Carrousel({ titles, children, ...props }: Properties) {
  const [selectedItem, setSelectedItem] = useState(0);
  const pan = Gesture.Pan();
  pan
    .onChange((event) => {
      if (event.changeX >= 2) toRight();
      else if (event.changeX <= -2) toLeft();
    })
    .runOnJS(true);
  const toLeft = useCallback(() => {
    if (selectedItem <= 0) setSelectedItem(children.length - 1);
    else setSelectedItem(selectedItem - 1);
  }, [children.length, selectedItem]);
  const toRight = useCallback(() => {
    if (selectedItem >= children.length - 1) setSelectedItem(0);
    else setSelectedItem(selectedItem + 1);
  }, [children.length, selectedItem]);
  return (
    <View {...props}>
      <View className="flex-row h-[20%]">
        <TouchableOpacity
          onPress={toLeft}
          className={"w-[20%] h-full items-center justify-center"}
        >
          <AntDesign size={25} color={colors.textPrimary} name="left" />
        </TouchableOpacity>
        <View className="h-full w-[60%] items-center justify-center">
          <Animated.Text
            layout={LinearTransition}
            className="font-secondary-regular px-2 py-1 rounded-xl border-2 border-primary text-base text-textPrimary"
          >
            {titles[selectedItem] ?? ""}
          </Animated.Text>
        </View>
        <TouchableOpacity
          onPress={toRight}
          className={"w-[20%] h-full items-center justify-center"}
        >
          <AntDesign size={25} color={colors.textPrimary} name="right" />
        </TouchableOpacity>
      </View>
      <GestureDetector gesture={pan}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          key={selectedItem}
          className="flex-1 items-center justify-center"
          children={children[selectedItem]}
        ></Animated.View>
      </GestureDetector>
    </View>
  );
}
