import { colors } from "@/constants/Theme";
import { AntDesign } from "@expo/vector-icons";
import clsx from "clsx";
import moment, { Moment } from "moment";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  AppState,
  AppStateStatus,
} from "react-native";
interface Properties {
  time: string;
}
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
export default function Timer({ time }: Properties) {
  const [appState, setAppState] = useState(AppState.currentState);
  const [lastActiveTime, setLastActiveTime] = useState<Moment | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>();
  const duration = useMemo(() => {
    return moment.duration(seconds, "seconds");
  }, [seconds]);
  const start = useCallback(async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "¡Se acabó el tiempo!",
        body: "El temporizador llegó a su fin.",
      },
      identifier: "pomodoro",
      trigger: {
        date: moment().add(duration, "seconds").toDate(),
        type: Notifications.SchedulableTriggerInputTypes.DATE,
      },
    });

    const timeout = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 0) {
          setSeconds(moment.duration(time).asSeconds());
          clearInterval(timeout);
          setIntervalId(null);
          return 0;
        } else return seconds - 1;
      });
    }, 1000);
    setIntervalId(timeout);
  }, [time, duration]);
  const pause = useCallback(async () => {
    if (intervalId) clearInterval(intervalId);
    await Notifications.cancelScheduledNotificationAsync("pomodoro");
    setIntervalId(null);
  }, [intervalId]);
  const reload = useCallback(async () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(moment.duration(time).asSeconds());
    await Notifications.cancelScheduledNotificationAsync("pomodoro");
  }, [intervalId, time]);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      (nextAppState: AppStateStatus) => setAppState(nextAppState),
    );
    return () => {
      subscription.remove();
    };
  }, [appState]);
  useEffect(() => {
    setSeconds(moment.duration(time).asSeconds());
  }, [time]);
  useEffect(() => {
    return () => {
      reload();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (intervalId && appState === "active" && lastActiveTime) {
      const difference = moment().diff(lastActiveTime, "seconds");
      setSeconds((seconds) => {
        if (seconds <= 0 || seconds - difference <= 0) {
          setSeconds(moment.duration(time).asSeconds());
          clearInterval(intervalId);
          setIntervalId(null);
          return 0;
        } else return seconds - difference;
      });
      setLastActiveTime(null);
    } else if (intervalId && appState === "background" && !lastActiveTime) {
      setLastActiveTime(moment());
    }
  }, [appState, lastActiveTime, intervalId, time]);
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
