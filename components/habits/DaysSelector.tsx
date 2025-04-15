import { DaysOfWeek } from "@/types/enums";
import clsx from "clsx";
import { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
interface Properties {
  values: DaysOfWeek[];
  onChange: (value: DaysOfWeek[]) => void;
}
interface SecondProperties extends Properties {
  title: string;
  value: DaysOfWeek;
}
function Day(properties: SecondProperties) {
  const selected = useMemo(
    () => properties.values.includes(properties.value),
    [properties.value, properties.values],
  );
  const add = useCallback(() => {
    properties.onChange([...properties.values, properties.value]);
  }, [properties]);
  const del = useCallback(() => {
    const data = properties.values.filter((item) => item !== properties.value);
    properties.onChange(data);
  }, [properties]);
  return (
    <TouchableOpacity
      className={clsx(
        "w-8 h-8 rounded-xl bg-primary items-center justify-center",
        !selected && "opacity-50",
      )}
      onPress={selected ? del : add}
    >
      <Text className="font-secondary-bold text-darkTextPrimary">
        {properties.title}
      </Text>
    </TouchableOpacity>
  );
}
export default function DaysSelector(v: Properties) {
  return (
    <View className="flex-row gap-2 p-2 justify-around">
      <Day {...v} title="L" value={DaysOfWeek.Monday} />
      <Day {...v} title="M" value={DaysOfWeek.Tuesday} />
      <Day {...v} title="M" value={DaysOfWeek.Wednesday} />
      <Day {...v} title="J" value={DaysOfWeek.Thursday} />
      <Day {...v} title="V" value={DaysOfWeek.Friday} />
      <Day {...v} title="S" value={DaysOfWeek.Saturday} />
      <Day {...v} title="D" value={DaysOfWeek.Sunday} />
    </View>
  );
}
