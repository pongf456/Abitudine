import useHabitsStore from "@/hooks/useHabitsStore";
import { memo, useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import HabitComponent from "./HabitComponent";
import _ from "lodash";
import { DaysOfWeek } from "@/types/enums";
import { HabitUtils } from "@/utils/habit";
interface Properties {
  days: DaysOfWeek[];
}
const HabitList = memo(function HabitList({ days }: Properties) {
  const { _habits } = useHabitsStore();
  const data = useMemo(() => {
    return _.filter(_habits, (habit) => {
      return HabitUtils.includesTheseDays(habit.executionDays, days);
    });
  }, [days, _habits]);
  return data && data.length !== 0 ? (
    <FlatList
      data={data}
      renderItem={({ item }) => <HabitComponent {...item} />}
      keyExtractor={(item) => item.startedDate}
      contentContainerStyle={{ flexGrow: 1, padding: 16 }} // Ajusta el padding según necesites
    />
  ) : (
    <View className="h-full items-center justify-center">
      <Text className="font-secondary-regular text-sm text-textPrimary">
        No posees hábitos
      </Text>
    </View>
  );
});
export default HabitList;
