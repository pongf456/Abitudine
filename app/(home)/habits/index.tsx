import AddModal from "@/components/habits/AddModal";
import DaysSelector from "@/components/habits/DaysSelector";
import HabitList from "@/components/habits/HabitList";
import { colors } from "@/constants/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Habits() {
  const [addVisible, setAddVisible] = useState(false);
  const [days, setDays] = useState([0, 1, 2, 3, 4, 5, 6]);
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center">
        <Text className="p-2 font-secondary-bold text-2xl mx-2 text-textPrimary">
          Hábitos
        </Text>
        <TouchableOpacity
          onPress={() => setAddVisible(true)}
          className="self-end flex-row m-2 p-2 items-center gap-2 rounded-md bg-primary"
        >
          <MaterialIcons color={colors.background} size={25} name="add" />
          <Text className="font-secondary-regular text-darkTextPrimary text-sm">
            Añadir hábito
          </Text>
        </TouchableOpacity>
      </View>
      <DaysSelector values={days} onChange={setDays} />
      <HabitList days={days} />
      <AddModal
        visible={addVisible}
        hide={() => {
          setAddVisible(false);
        }}
      />
    </View>
  );
}
