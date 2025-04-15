import { colors } from "@/constants/Theme";
import { AntDesign } from "@expo/vector-icons";
import clsx from "clsx";
import moment from "moment";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
} from "react-native";

function ButtonIcon({
  iconName,
  disabled,
  ...props
}: TouchableOpacityProps & { iconName: keyof typeof AntDesign.glyphMap }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      className={clsx("p-2 rounded-xl bg-primary", disabled && "opacity-50")}
    >
      <AntDesign name={iconName} size={25} color={colors.darkTextPrimary} />
    </TouchableOpacity>
  );
}
interface Properties {
  time: string;
}
export default function Timer({ time }: Properties) {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>();
  useEffect(() => {
    setSeconds(moment.duration(time).asSeconds());
  }, [time]);
  const duration = useMemo(() => {
    return moment.duration(seconds, "seconds");
  }, [seconds]);
  const start = useCallback(() => {
    const timeout = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 0) {
          setSeconds(moment.duration(time).asSeconds());
          clearInterval(timeout);
          setIntervalId(null);
          Notifications.scheduleNotificationAsync({
            content: {
              title: "¡Se acabó el tiempo!",
              body: "El temporizador llegó a su fin.",
            },
            trigger: null,
          });

          return 0;
        } else return seconds - 1;
      });
    }, 1000);
    setIntervalId(timeout);
  }, [time]);
  const pause = useCallback(() => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);
  const reload = useCallback(() => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(moment.duration(time).asSeconds());
  }, [intervalId, time]);
  return (
    <View className="w-full h-full">
      <View className="flex-1 items-center justify-center">
        <View className="w-48 h-48 bg-primary rounded-full items-center justify-center">
          <Text className="font-secondary-bold text-3xl text-darkTextPrimary">
            {String(duration.minutes()).padStart(2, "0")}:
            {String(duration.seconds()).padStart(2, "0")}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-center gap-2">
        <ButtonIcon
          onPress={pause}
          disabled={!intervalId ? true : false}
          iconName="pause"
        />
        <ButtonIcon
          disabled={intervalId ? true : false}
          onPress={start}
          iconName="play"
        />
        <ButtonIcon onPress={reload} iconName="reload1" />
      </View>
    </View>
  );
}
