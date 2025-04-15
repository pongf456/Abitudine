import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
interface Properties {
  value: string;
  minimum?: string;
  onChange: (newValue: string) => void;
  title: string;
}
export default function DateSelector({
  value,
  title,
  onChange,
  minimum,
}: Properties) {
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setOpen(true)}
      className="flex-col gap-1 items-center"
    >
      {open && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          onChange={(ev, date) => {
            const newTime = moment(date);
            if (!minimum) onChange(newTime.format("hh:mm A"));
            if (newTime.isAfter(moment(minimum, "hh:mm A"))) {
              onChange(newTime.format("hh:mm A"));
            }
            setOpen(false);
          }}
        />
      )}
      <Text className="p-2 bg-darkTextPrimary rounded-md font-secondary-bold text-textPrimary">
        {value}
      </Text>
      <Text className="font-secondary-semibold text-primary">{title}</Text>
    </TouchableOpacity>
  );
}
