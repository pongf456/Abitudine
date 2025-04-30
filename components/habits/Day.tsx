import { DaysOfWeek } from "@/types/enums";
import clsx from "clsx";
import { useCallback, useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";

interface Properties {
  values: DaysOfWeek[];
  onChange: (value: DaysOfWeek[]) => void;
  title: string;
  value: DaysOfWeek;
}

function Day(properties: Properties) {
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

export default Day;
