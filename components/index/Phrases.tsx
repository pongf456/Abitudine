import phrases from "@/constants/phrases";
import { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import Logo from "../global/Logo";
import Animated, {
  LinearTransition,
  useAnimatedRef,
} from "react-native-reanimated";
export default function Phrases() {
  const changePhrase = useCallback(() => {
    const index = Math.round(Math.random() * (phrases.length - 1));
    return phrases[index];
  }, []);
  const [phrase, setPhrase] = useState(phrases[0]);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    setStarted(true);
    const interval = setInterval(() => setPhrase(changePhrase), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [changePhrase]);
  const contentRef = useAnimatedRef<Animated.View>();
  return (
    <Animated.View
      ref={contentRef}
      layout={started ? LinearTransition.springify().damping(30) : undefined}
      className="p-2 m-4 items-center bg-background rounded-xl overflow-hidden"
    >
      <Logo size={30} />
      <Text className="m-1 font-primary-bold text-sm xs:text-lg  text-primary">
        {phrase.autor}
      </Text>
      <Text className="m-1 text-center font-primary-semibold text-sm xs:text-lg  text-primary">
        {phrase.frase}
      </Text>
      <Text className="m-1 font-primary-regular text-sm xs:text-lg  text-primary">
        -{phrase.libro}-
      </Text>
    </Animated.View>
  );
}
