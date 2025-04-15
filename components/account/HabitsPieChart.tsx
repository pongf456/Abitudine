import { DaysOfWeek } from "@/types/enums";
import { View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import _ from "lodash";
import { useMemo } from "react";
import useHabitsStore from "@/hooks/useHabitsStore";
import moment from "moment";
import { generateColor } from "@/constants/utils";
interface Properties {
  day: DaysOfWeek;
}
export default function HabitsPieChart({ day }: Properties) {
  const { _habits } = useHabitsStore();
  const habitList = useMemo(() => {
    return _.filter(_habits, (v) => {
      return _.intersection(v.executionDays, [day]).length > 0;
    });
  }, [_habits, day]);
  const preparedData = useMemo(() => {
    const data = _.map(habitList, (data) => {
      const startMoment = moment(data.startDate, "hh:mm A");
      const endMoment = moment(data.endDate, "hh:mm A");
      const duration =
        endMoment.hours() * 60 +
        endMoment.minutes() -
        (startMoment.hours() * 60 + startMoment.minutes());
      return {
        name: data.name,
        population: duration,
        color: generateColor(),
        legendFontColor: "#000000",
        legendFontSize: 10,
      };
    });
    const notUsedTime =
      1490 -
      _.reduce(
        data,
        (accumulator, curr) => (accumulator += curr.population),
        0,
      );
    data.push({
      name: "Tiempo libre",
      population: notUsedTime,
      color: "#A9A9A9",
      legendFontColor: "#000000",
      legendFontSize: 10,
    });
    return data;
  }, [habitList]);
  return (
    <View className="w-full">
      <PieChart
        data={preparedData}
        width={250}
        height={250}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        center={[60, 0]}
        paddingLeft="0"
        style={{ width: "100%", alignItems: "center" }}
        hasLegend={false}
        accessor={"population"}
        backgroundColor={"transparent"}
      />
    </View>
  );
}
