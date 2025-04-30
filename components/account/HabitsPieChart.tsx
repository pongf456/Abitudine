import { DaysOfWeek } from "@/types/enums";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import _ from "lodash";
import { useEffect, useMemo, useRef, useState } from "react";
import useHabitsStore from "@/hooks/useHabitsStore";
import { PieChart } from "react-native-gifted-charts";
import moment from "moment";
import { colors } from "@/constants/Theme";
import { Habit } from "@/types/interfaces";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedRef,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
interface Properties {
  day: DaysOfWeek;
}
interface PieChartItem extends Partial<Habit> {
  value: number;
  color?: string;
}
export default function HabitsPieChart({ day }: Properties) {
  const { _habits } = useHabitsStore();
  const [selectedItem, setSelectedItem] = useState<PieChartItem | null>(null);
  const animatedElementRef = useAnimatedRef<Animated.View>();
  const containerRef = useRef<View>(null);
  const [positions, setPositions] = useState([
    [0, 0],
    [0, 0],
  ]);
  const topAnim = useSharedValue(0);
  const leftAnim = useSharedValue(0);
  const pressureGesture = Gesture.Tap()
    .onStart((e) => {
      containerRef.current?.measure((cx, cy, cw, ch) => {
        setPositions([
          [e.x, e.y],
          [cw, ch],
        ]);
      });
    })
    .runOnJS(true);
  useEffect(() => {
    if (animatedElementRef.current) {
      animatedElementRef.current.measure((x, y, w, h) => {
        leftAnim.value = withTiming(
          positions[0][0] + w >= positions[1][0]
            ? positions[1][0] - w - 10
            : positions[0][0],
        );
        topAnim.value = withTiming(
          positions[0][1] + h >= positions[1][1]
            ? positions[1][1] - h - 10
            : positions[0][1],
        );
      });
    }
  }, [animatedElementRef, selectedItem, positions, leftAnim, topAnim]);
  useEffect(() => {
    if (selectedItem) {
      const timeout = setTimeout(() => {
        setSelectedItem(null);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [positions, selectedItem]);
  const habitList = useMemo(() => {
    return _.filter(_habits, (v) => {
      return _.intersection(v.executionDays, [day]).length > 0;
    });
  }, [_habits, day]);
  const preparedData: PieChartItem[] = useMemo(() => {
    let initialTime = "12:00 AM";
    const orderData = _.orderBy(
      habitList,
      (habit) => moment(habit.startDate, "hh:mm A").toDate(),
      "asc",
    );

    if (orderData.length === 0)
      return [
        {
          value: 1440,
          color: "#C7C8CA",
          startDate: initialTime,
          endDate: initialTime,
        },
      ];
    return _.flatten(
      _.map(orderData, (habit) => {
        const lastTimeToStartTime = moment
          .duration(
            moment(habit.startDate, "hh:mm A").diff(
              moment(initialTime, "hh:mm A"),
            ),
          )
          .asMinutes();
        const startTimeToEndTime = moment
          .duration(
            moment(habit.endDate, "hh:mm A").diff(
              moment(habit.startDate, "hh:mm A"),
            ),
          )
          .asMinutes();

        const toReturn = [
          {
            value: lastTimeToStartTime,
            color: colors.primary,
            startDate: initialTime,
            endDate: habit.startDate,
          },
          {
            value: startTimeToEndTime,
            ...habit,
          },
        ];
        initialTime = habit.endDate;
        return toReturn;
      }),
    );
  }, [habitList]);
  return (
    <GestureDetector gesture={pressureGesture}>
      <View
        ref={containerRef}
        className="w-full relative items-center justify-center p-2 h-[250] my-2"
      >
        <PieChart
          data={preparedData}
          radius={100}
          strokeWidth={2}
          strokeColor={colors.background}
          innerCircleBorderWidth={3}
          onPress={(item: unknown) => setSelectedItem(item as PieChartItem)}
        />
        {selectedItem && (
          <Animated.View
            ref={animatedElementRef}
            style={{
              position: "absolute",
              top: topAnim,
              left: leftAnim,
            }}
            entering={FadeIn}
            exiting={FadeOut}
            className="bg-background rounded-3xl max-w-80 border-2 p-2 border-primary"
          >
            <Text
              numberOfLines={1}
              className="font-secondary-bold text-center text-primary"
            >
              {selectedItem.name ?? "Tiempo libre"}
            </Text>
            <Text className="text-center font-secondary-regular text-primary">
              {selectedItem.startDate} - {selectedItem.endDate}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(null);
                if (selectedItem.startedDate)
                  router.push(`/habits/${selectedItem.startedDate}`);
                else router.push("/habits");
              }}
              className="p-2 m-2 rounded-xl self-center bg-primary"
            >
              <Text className="font-secondary-regular text-darkTextPrimary">
                Administrar
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </GestureDetector>
  );
}
