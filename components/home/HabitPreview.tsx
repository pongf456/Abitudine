import { Habit } from "@/types/interfaces";
import { router } from "expo-router";
import moment from "moment";
import { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default function HabitPreview({
  name,
  description,
  startDate,
  startedDate,
  endDate,
}: Habit) {
  const now = useMemo(() => moment(), []);
  const startMoment = useMemo(() => moment(startDate, "hh:mm A"), [startDate]);
  const textTime = useMemo(() => {
    const diferencia = moment.duration(startMoment.diff(now));
    const horas = diferencia.hours();
    const minutos = diferencia.minutes();
    if (diferencia.asMilliseconds() >= 0) {
      return `${horas} hora${horas === 1 ? "" : "s"} y ${minutos} minuto${minutos === 1 ? "" : "s"}`;
    } else return "Ya pasó";
  }, [now, startMoment]);
  return (
    <TouchableOpacity
      onPress={() => router.push(`/habits/${startedDate}`)}
      className="w-80 mx-2 h-full p-1 bg-accent border-2 border-primary rounded-xl"
    >
      <Text
        numberOfLines={1}
        className="text-center px-2 font-secondary-bold text-sm text-primary"
      >
        {name}
      </Text>
      <Text
        numberOfLines={1}
        className="px-2 text-textPrimary font-secondary-regular text-xs"
      >
        {description}
      </Text>
      <View className="justify-between flex-1 items-end flex-row">
        <Text className="font-secondary-regular text-xs text-primary">
          {textTime}
        </Text>
        <Text className="font-secondary-regular text-primary text-xs">
          {startDate} - {endDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
