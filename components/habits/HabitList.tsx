import useHabitsStore from "@/hooks/useHabitsStore";
import { memo } from "react";
import { FlatList, Text, View } from "react-native";
import HabitComponent from "./HabitComponent";
const HabitList = memo(function HabitList() {
  const { _habits } = useHabitsStore();
  return _habits && _habits.length !== 0 ? (
    <FlatList
      data={_habits}
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
