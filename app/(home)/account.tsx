import HabitsPieChart from "@/components/account/HabitsPieChart";
import Carrousel from "@/components/global/Carrousel";
import Identities from "@/components/global/Identities";
import Title from "@/components/global/Title";
import { colors } from "@/constants/Theme";
import useHabitsStore from "@/hooks/useHabitsStore";
import useUserStore from "@/hooks/useUserStore";
import { DaysOfWeek } from "@/types/enums";
import { HabitUtils } from "@/utils/habit";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import _ from "lodash";
import { useMemo } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { BarChart } from "react-native-gifted-charts";
interface DayHabitCount {
  label: string;
  value: number;
}
export default function Account() {
  const { nickname, email, birthDate, perfilUri, identity, setPerfilUri } =
    useUserStore();
  const habits = useHabitsStore((state) => state._habits);
  const data = useMemo(() => {
    const habitsCountByDay = HabitUtils.countHabitsByDay(habits);
    const daysOrder: DaysOfWeek[] = [
      DaysOfWeek.Sunday,
      DaysOfWeek.Monday,
      DaysOfWeek.Tuesday,
      DaysOfWeek.Wednesday,
      DaysOfWeek.Thursday,
      DaysOfWeek.Friday,
      DaysOfWeek.Saturday,
    ];

    const formattedHabitsByDay: DayHabitCount[] = daysOrder.map((day) => {
      let dayName = "";
      switch (day) {
        case DaysOfWeek.Sunday:
          dayName = "D";
          break;
        case DaysOfWeek.Monday:
          dayName = "L";
          break;
        case DaysOfWeek.Tuesday:
          dayName = "M";
          break;
        case DaysOfWeek.Wednesday:
          dayName = "M";
          break;
        case DaysOfWeek.Thursday:
          dayName = "J";
          break;
        case DaysOfWeek.Friday:
          dayName = "V";
          break;
        case DaysOfWeek.Saturday:
          dayName = "S";
          break;
        default:
          dayName = "";
      }
      return {
        label: dayName,
        value: habitsCountByDay[day],
      };
    });

    return formattedHabitsByDay;
  }, [habits]);
  const sections = useMemo(() => {
    const result = _.orderBy(data, ["value"], "desc")[0];
    return _.range(0, result.value + 1).map(String);
  }, [data]);
  return (
    <ScrollView className="flex-1">
      <View className="w-full p-2 flex-row">
        <TouchableOpacity
          onPress={async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ["images"],
              allowsMultipleSelection: false,
            });
            if (result.canceled) return;
            await setPerfilUri(result.assets[0].uri);
          }}
          className="w-[30%]"
        >
          <Image
            className="w-28 h-28 rounded-xl bg-primary"
            source={{ uri: perfilUri }}
          />
        </TouchableOpacity>
        <View className="w-[70%]">
          <Text
            numberOfLines={1}
            className="font-secondary-bold w-full text-2xl text-textPrimary"
          >
            {nickname ?? ""}
          </Text>
          <Text
            numberOfLines={1}
            className="font-secondary-regular w-full text-sm text-textPrimary"
          >
            {email ?? ""}
          </Text>
          <View className="flex-1 items-center gap-1 flex-row">
            <View className="p-2 bg-primary rounded-xl">
              <FontAwesome
                name="birthday-cake"
                size={20}
                color={colors.background}
              />
            </View>
            <View className="flex-row p-2 items-center rounded-xl bg-primary">
              <Text className="text-background font-secondary-regular">
                {new Date(birthDate ?? "").toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="p-2 flex-row gap-2 flex-wrap">
        {identity && (
          <Identities
            className="w-full"
            onChange={(newIdentity) => {
              useUserStore.setState({ identity: newIdentity });
            }}
            value={identity}
          />
        )}
      </View>
      <Title title="Gráfico de ocupación" className={["m-2"]}>
        <Carrousel
          className="w-full self-center flex-1"
          titles={[
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
            "Domingo",
          ]}
        >
          <HabitsPieChart day={DaysOfWeek.Monday} />
          <HabitsPieChart day={DaysOfWeek.Tuesday} />
          <HabitsPieChart day={DaysOfWeek.Wednesday} />
          <HabitsPieChart day={DaysOfWeek.Thursday} />
          <HabitsPieChart day={DaysOfWeek.Friday} />
          <HabitsPieChart day={DaysOfWeek.Saturday} />
          <HabitsPieChart day={DaysOfWeek.Sunday} />
        </Carrousel>
      </Title>
      <Title title="Gráfico de productividad" className={["m-2"]}>
        <BarChart
          barWidth={20}
          barBorderRadius={4}
          frontColor={colors.primary}
          data={data}
          yAxisLabelTexts={sections}
          stepValue={1}
          maxValue={sections.length - 1}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </Title>
    </ScrollView>
  );
}
