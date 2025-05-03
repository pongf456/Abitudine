import { Habit } from "@/types/interfaces";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { DaysOfWeek } from "@/types/enums";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/constants/Theme";
import { memo, useCallback, useMemo } from "react";
import clsx from "clsx";
import { difficultyTranslations } from "@/constants/utils";
import useHabitsStore from "@/hooks/useHabitsStore";
import { router } from "expo-router";
interface Properties {
  values: DaysOfWeek[];
}
interface SecondProperties extends Properties {
  title: string;
  value: DaysOfWeek;
}
const Day = memo(function Day(properties: SecondProperties) {
  const selected = useMemo(
    () => properties.values.includes(properties.value),
    [properties.value, properties.values],
  );
  return (
    <View
      className={clsx(
        "w-8 h-8 rounded-xl bg-primary items-center justify-center",
        !selected && "opacity-50",
      )}
    >
      <Text className="font-secondary-bold text-darkTextPrimary">
        {properties.title}
      </Text>
    </View>
  );
});
const DaysViewer = memo(function DaysSelector(v: Properties) {
  return (
    <View className="w-full flex-row gap-2 p-2 justify-around">
      <Day {...v} title="D" value={DaysOfWeek.Sunday} />
      <Day {...v} title="L" value={DaysOfWeek.Monday} />
      <Day {...v} title="M" value={DaysOfWeek.Tuesday} />
      <Day {...v} title="M" value={DaysOfWeek.Wednesday} />
      <Day {...v} title="J" value={DaysOfWeek.Thursday} />
      <Day {...v} title="V" value={DaysOfWeek.Friday} />
      <Day {...v} title="S" value={DaysOfWeek.Saturday} />
    </View>
  );
});
const HabitComponent = memo(function HabitComponent(data: Habit) {
  const { del } = useHabitsStore();
  const edit = useCallback(() => {
    router.push(`/habits/${data.startedDate}`);
  }, [data.startedDate]);
  return (
    <Animated.View
      layout={LinearTransition}
      entering={FadeIn}
      exiting={FadeOut}
      className="bg-accent relative  rounded-xl my-2 p-1 border-2 border-primary"
    >
      <AntDesign
        name="paperclip"
        color={colors.primary}
        size={25}
        className="absolute top-2 left-2"
      />
      <Text
        numberOfLines={1}
        className=" text-center font-secondary-bold text-textPrimary py-1 px-8 text-xl"
      >
        {data.name}
      </Text>
      <Text
        numberOfLines={3}
        className="font-secondary-regular text-sm text-textPrimary p-2"
      >
        {data.description}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.identity.map((trait) => (
          <Text
            key={trait}
            className="p-2 mx-1 bg-primary rounded-xl font-secondary-regular text-darkTextPrimary"
          >
            {trait}
          </Text>
        ))}
      </ScrollView>
      <View className="flex-row justify-between">
        <DaysViewer values={data.executionDays} />
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="p-1 font-secondary-regular text-sm bg-primary text-darkTextPrimary rounded-md">
          {difficultyTranslations[data.difficulty]}
        </Text>
        <Text className="font-secondary-regular text-right mx-1 text-textPrimary">
          {data.startDate} - {data.endDate}
        </Text>
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="font-secondary-regular text-sm text-textPrimary">
          {new Date(data.startedDate).toLocaleString()}
        </Text>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={edit}
            className="p-2 rounded-xl bg-primary"
          >
            <MaterialIcons name="edit" size={20} color={colors.background} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => del(data.startedDate)}
            className="p-2 rounded-xl bg-primary"
          >
            <MaterialIcons name="delete" size={20} color={colors.background} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
});

export default HabitComponent;
