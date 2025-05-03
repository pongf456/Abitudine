import { DaysOfWeek } from "@/types/enums";
import { View } from "react-native";
import Day from "./Day";
interface Properties {
  values: DaysOfWeek[];
  onChange: (value: DaysOfWeek[]) => void;
}
export default function DaysSelector(v: Properties) {
  return (
    <View className="flex-row gap-2 p-2 justify-around">
      <Day {...v} title="D" value={DaysOfWeek.Sunday} />
      <Day {...v} title="L" value={DaysOfWeek.Monday} />
      <Day {...v} title="M" value={DaysOfWeek.Tuesday} />
      <Day {...v} title="M" value={DaysOfWeek.Wednesday} />
      <Day {...v} title="J" value={DaysOfWeek.Thursday} />
      <Day {...v} title="V" value={DaysOfWeek.Friday} />
      <Day {...v} title="S" value={DaysOfWeek.Saturday} />
    </View>
  );
}
