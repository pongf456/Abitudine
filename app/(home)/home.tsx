import Title from "@/components/global/Title";
import useHabitsStore from "@/hooks/useHabitsStore";
import { useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import _ from "lodash";
import moment from "moment";
import HabitPreview from "@/components/home/HabitPreview";
import Carrousel from "@/components/global/Carrousel";
import Timer from "@/components/home/Timer";
import { HabitUtils } from "@/utils/habit";
export default function Home() {
  const habits = useHabitsStore((store) => store._habits);
  const forToday = useMemo(() => {
    const day = moment().day();
    const filtered = _.filter(habits, (item) => {
      return HabitUtils.includesTheseDays(item.executionDays, [day]);
    });
    return _.orderBy(
      filtered,
      (habit) => moment(habit.startDate, "hh:mm A").valueOf(),
      "asc",
    );
  }, [habits]);
  return (
    <View className="w-full flex-1">
      <Title
        title="Hábitos diarios"
        className={["p-1", "items-center h-20 my-2  justify-center"]}
      >
        {forToday.length === 0 ? (
          <Text className="p-4 font-secondary-regular text-sm text-textSecondary">
            No posees hábitos para hoy
          </Text>
        ) : (
          <FlatList
            data={forToday}
            className="h-full w-full overflow-hidden"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.startedDate}
            renderItem={({ item }) => <HabitPreview {...item} />}
          />
        )}
      </Title>
      <Title title="Pomodoro" className={["px-1"]}>
        <Carrousel titles={["Concentración", "Descanso"]} className="h-80">
          <Timer time="00:15:00" />
          <Timer time="00:05:00" />
        </Carrousel>
      </Title>
    </View>
  );
}
