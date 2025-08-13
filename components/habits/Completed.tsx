import useHabitsStore from "@/hooks/useHabitsStore";
import { Habit } from "@/types/interfaces";
import { HabitUtils } from "@/utils/habit";
import moment from "moment";
import { memo, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
interface Properties {
  habit: Habit;
}
const Completed = memo(function Completed({ habit }: Properties) {
  const { upd } = useHabitsStore();
  const time = useMemo(() => moment().format("DD/MM/YY"), []);
  const completed = useMemo(
    () => habit.daysCompleted.includes(time),
    [habit, time],
  );
  const inTheHour = useMemo(() => {
    const actualHour = moment().hours();
    const habitStartHour = moment(habit.startDate, "hh:mm A").hours();
    return actualHour >= habitStartHour;
  }, [habit.startDate]);
  const inTheDay = useMemo(
    () => HabitUtils.includesTheseDays(habit.executionDays, [moment().days()]),
    [habit.executionDays],
  );
  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: withSpring(completed ? 1 : 0, { duration: 100 }) }],
    }),
    [completed],
  );
  const setCompleted = useCallback(() => {
    if (completed) {
      habit.daysCompleted = habit.daysCompleted.filter((item) => item !== time);
    } else {
      habit.daysCompleted.push(time);
    }
    upd(habit.startedDate, habit);
  }, [completed, habit, time, upd]);
  return inTheDay && inTheHour ? (
    <View className="px-1 py-2 flex-row items-center justify-between bg-primary rounded-xl">
      <Text
        numberOfLines={1}
        className="font-secondary-medium text-background text-2xl"
      >
        ¿Hábito completado?
      </Text>
      <TouchableOpacity
        onPress={setCompleted}
        className="p-1 mx-2 rounded-full border-2 border-background"
      >
        <Animated.View
          style={animatedStyle}
          className="w-4 h-4 rounded-full bg-background"
        />
      </TouchableOpacity>
    </View>
  ) : null;
});
export default Completed;
